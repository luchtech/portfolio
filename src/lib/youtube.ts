// Build-time YouTube playlist fetch. Never throws — a failed/rate-limited
// fetch must not fail `astro build`, it should just fall back to the caller's
// static list.

export type PlaylistVideo = {
  title: string;
  youtubeId: string;
};

function decodeEntities(s: string): string {
  return s
    .replace(/&amp;/g, '&')
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    .replace(/&quot;/g, '"')
    .replace(/&#39;/g, "'");
}

export async function fetchPlaylistVideos(playlistId: string, timeoutMs = 4000): Promise<PlaylistVideo[] | null> {
  const controller = new AbortController();
  const timeout = setTimeout(() => controller.abort(), timeoutMs);
  try {
    const res = await fetch(`https://www.youtube.com/feeds/videos.xml?playlist_id=${playlistId}`, {
      signal: controller.signal,
    });
    if (!res.ok) return null;
    const xml = await res.text();

    const videos: PlaylistVideo[] = [];
    for (const entryMatch of xml.matchAll(/<entry>([\s\S]*?)<\/entry>/g)) {
      const entry = entryMatch[1];
      const idMatch = entry.match(/<yt:videoId>([^<]+)<\/yt:videoId>/);
      const titleMatch = entry.match(/<title>([^<]*)<\/title>/);
      if (!idMatch || !titleMatch) continue;
      videos.push({ youtubeId: idMatch[1], title: decodeEntities(titleMatch[1]) });
    }

    return videos.length > 0 ? videos : null;
  } catch {
    return null;
  } finally {
    clearTimeout(timeout);
  }
}
