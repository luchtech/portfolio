// @ts-check
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  site: 'https://james.luchtech.dev',
  // Let <Image> fetch and optimise YouTube thumbnails at build time.
  image: {
    domains: ['i.ytimg.com'],
  },
vite: {
    server: {
      // Astro runs Vite underneath, and Vite 6+ rejects any Host header that
      // is not localhost — so without this every request through Traefik is
      // answered "Blocked request. This host is not allowed."
      allowedHosts: ['portfolio.test'],
      hmr: {
        // Traefik terminates TLS at the edge; the dev server itself speaks
        // plain HTTP inside the pod.
        host: 'portfolio.test',
        protocol: 'wss',
        clientPort: 443,
      },
      watch: {
        // inotify does not reliably cross the hostPath/VirtioFS boundary on
        // macOS, so the watcher polls rather than silently missing edits.
        usePolling: true,
        interval: 300,
      },
    },
  },
});
