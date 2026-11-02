// Build-time GitHub stats. Never throws — a failed fetch (rate limit, network,
// repo moved) must not fail `astro build`, it should just omit that repo's row.

export type RepoStats = {
  owner: string;
  repo: string;
  stars: number;
  pushedAt: string;
  createdAt: string;
  openIssues: number;
  latestRelease: string | null;
};

async function fetchJson(url: string, timeoutMs = 4000): Promise<unknown | null> {
  const controller = new AbortController();
  const timeout = setTimeout(() => controller.abort(), timeoutMs);
  try {
    const res = await fetch(url, {
      signal: controller.signal,
      headers: { Accept: 'application/vnd.github+json' },
    });
    if (!res.ok) return null;
    return await res.json();
  } catch {
    return null;
  } finally {
    clearTimeout(timeout);
  }
}

export async function fetchRepoStats(owner: string, repo: string): Promise<RepoStats | null> {
  const data = (await fetchJson(`https://api.github.com/repos/${owner}/${repo}`)) as {
    stargazers_count?: number;
    pushed_at?: string;
    created_at?: string;
    open_issues_count?: number;
  } | null;
  if (!data || typeof data.stargazers_count !== 'number') return null;

  const release = (await fetchJson(`https://api.github.com/repos/${owner}/${repo}/releases/latest`)) as {
    tag_name?: string;
  } | null;

  return {
    owner,
    repo,
    stars: data.stargazers_count,
    pushedAt: data.pushed_at ?? '',
    createdAt: data.created_at ?? '',
    openIssues: data.open_issues_count ?? 0,
    latestRelease: release?.tag_name ?? null,
  };
}

export function relativeTime(iso: string): string {
  if (!iso) return '';
  const diffMs = Date.now() - new Date(iso).getTime();
  const diffDays = Math.round(diffMs / 86_400_000);
  const rtf = new Intl.RelativeTimeFormat('en', { numeric: 'auto' });
  if (Math.abs(diffDays) < 1) return 'today';
  if (Math.abs(diffDays) < 30) return rtf.format(-diffDays, 'day');
  const diffMonths = Math.round(diffDays / 30);
  if (Math.abs(diffMonths) < 12) return rtf.format(-diffMonths, 'month');
  return rtf.format(-Math.round(diffMonths / 12), 'year');
}
