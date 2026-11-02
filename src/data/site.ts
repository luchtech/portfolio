// All page text lives here, so edits don't require touching components.
// Content mirrors references/mockup/src/App.tsx (the Figma-exported source of
// truth) — keep the two in sync rather than drifting from it.
// `icon` is a simple-icons slug (see https://simpleicons.org). Leave it out
// for a text-only chip. `aws` is special-cased as a small text badge.

export type Tech = { name: string; icon?: string; lucide?: string; href?: string };

export const person = {
  name: 'James Carlo Luchavez',
  email: 'james@luchtech.dev',
  github: 'luchtech',
  githubUrl: 'https://github.com/luchtech',
  linkedinUrl: 'https://www.linkedin.com/in/luchaveztech/',
  upworkUrl: 'https://www.upwork.com/freelancers/~0107c3f12c828682e7',
  whatsappUrl: 'https://wa.me/639061886959',
  viberUrl: 'viber://chat?number=639061886959',
  messengerUrl: 'https://m.me/luchaveztech',
  resumeUrl: '/resume.pdf',
  location: 'Cagayan de Oro, Philippines',
};

export const nav = [
  { label: 'LaraKube Desktop', href: '#larakube' },
  { label: 'Skills', href: '#skills' },
  { label: 'Experience', href: '#experience' },
  { label: 'Contact', href: '#contact' },
];

export const hero = {
  eyebrow: 'Backend engineer · Laravel · Kubernetes',
  headline: 'I build the platform your Laravel app',
  headlineAccent: 'runs on.',
  lede:
    "I'm James, a backend engineer with 7+ years of Laravel and PHP behind me. I also build LaraKube Desktop, an open-source tool that provisions servers with OpenTofu and runs Laravel apps on k3s.",
  primary: { label: 'Read the LaraKube Desktop story', href: '#larakube' },
  secondary: { label: 'github.com/luchtech', href: 'https://github.com/luchtech' },
  status: 'Open to remote backend and platform roles',
  // Terminal rows. Wrap a word in **double asterisks** to highlight it.
  // `ok` adds a green check after the line; `gap` adds a blank row before it.
  terminal: [
    { cmd: 'larakube cloud:create --provider=do' },
    { out: 'OpenTofu apply: droplet, firewall, SSH key', ok: true },
    { out: 'Hardening: UFW, fail2ban, key-only SSH', ok: true },
    { out: 'Installing **k3s** and **Traefik**', ok: true },
    { cmd: 'larakube cloud:deploy production', gap: true },
    { out: 'Namespace **shop-production**' },
    { out: 'Rollout web, queue, scheduler', ok: true },
    { out: "Let's Encrypt certificate issued", ok: true },
    { success: 'Live at https://shop.example.com', gap: true },
  ] as { cmd?: string; out?: string; success?: string; ok?: boolean; gap?: boolean }[],
};

export const toolsLabel = 'Daily tools';

// James's day-to-day client-work toolbox — not what LaraKube itself is
// written in (see `larakube.stack` for that).
export const tools: Tech[] = [
  { name: 'Laravel', icon: 'laravel' },
  { name: 'PHP', icon: 'php' },
  { name: 'Docker', icon: 'docker' },
  { name: 'Kubernetes', icon: 'kubernetes' },
  { name: 'k3s', icon: 'k3s' },
  { name: 'OpenTofu', icon: 'opentofu' },
  { name: 'OpenBao', icon: 'openbao' },
  { name: 'PostgreSQL', icon: 'postgresql' },
  { name: 'Redis', icon: 'redis' },
];

export const larakube = {
  title: 'LaraKube Desktop: your apps and your team’s tools, on servers you own',
  logo: '/larakube.png', // shown if the file exists in public/
  spinProUrl: 'https://getspin.pro/',
  problem: 'Docker Swarm gets you to production fast — but it won’t carry you into Kubernetes.',
  why: [
    'I’d paid for Spin Pro, ServerSideUp’s one-CLI-to-production tool for Docker Swarm, and wanted the same for Kubernetes: start on one VPS running k3s, move to managed Kubernetes later, no rewrites. That became LaraKube CLI — then LaraKube Desktop, for a GUI.',
  ],
  // What LaraKube itself is built with — distinct from `tools` above, which
  // is the toolbox James uses for client work, not this project's own stack.
  stack: {
    shared: { name: 'PHP', icon: 'php' } as Tech,
    cli: { name: 'Laravel Zero', href: 'https://laravel-zero.com/' } as Tech,
    desktop: { name: 'NativePHP', href: 'https://nativephp.com/' } as Tech,
  },
  facts: [
    {
      big: '15',
      text: 'frameworks — 7 deploy to production today, 8 more scaffold now and are on the way',
      icons: [
        { name: 'Laravel', icon: 'laravel' },
        { name: 'Statamic', icon: 'statamic' },
        { name: 'WordPress', icon: 'wordpress' },
        { name: 'Next.js', icon: 'nextdotjs' },
        { name: 'Astro', icon: 'astro' },
        { name: 'Vite', icon: 'vite' },
        { name: 'Django', icon: 'django' },
        { name: 'FastAPI', icon: 'fastapi' },
      ] as Tech[],
      moreCount: 7,
    },
    {
      big: '4',
      text: 'cloud providers today: DigitalOcean, Hetzner, Google Cloud and AWS — more coming via OpenTofu',
      icons: [
        { name: 'DigitalOcean', icon: 'digitalocean' },
        { name: 'Hetzner', icon: 'hetzner' },
        { name: 'Google Cloud', icon: 'googlecloud' },
        { name: 'AWS', icon: 'aws' },
      ] as Tech[],
    },
    {
      big: '9',
      text: 'production essentials wired in from day one — the parts people forget until 2am',
      icons: [
        { name: 'Hardened', lucide: 'shield-check' },
        { name: 'HTTPS', lucide: 'lock' },
        { name: 'DNS', lucide: 'globe' },
        { name: 'Backups', lucide: 'database' },
        { name: 'Snapshots', lucide: 'camera' },
        { name: 'Autoscale', lucide: 'trending-up' },
        { name: 'Scoped access', lucide: 'key' },
        { name: 'Air-gapped', lucide: 'wifi-off' },
        { name: 'AI-ready', lucide: 'sparkles' },
      ] as Tech[],
    },
    {
      big: '30',
      text: 'cluster apps your team would otherwise rent per seat — one command installs each, with SSO and HTTPS wired in',
      icons: [
        { name: 'Matrix', icon: 'matrix' },
        { name: 'LiveKit', icon: 'livekit' },
        { name: 'Outline', icon: 'outline' },
        { name: 'Twenty', icon: 'twenty' },
        { name: 'Vaultwarden', icon: 'vaultwarden' },
        { name: 'Grafana', icon: 'grafana' },
        { name: 'n8n', icon: 'n8n' },
        { name: 'PocketBase', icon: 'pocketbase' },
      ] as Tech[],
      moreCount: 22,
    },
  ] as { big: string; text: string; icons?: Tech[]; moreCount?: number }[],
  // "How a deploy flows" diagram
  diagram: {
    inputs: [
      { title: 'LaraKube Desktop', sub: 'GUI and fleet dashboard' },
      { title: 'LaraKube CLI', sub: 'same engine, scriptable' },
      { title: 'Local cluster', sub: 'k3s on Linux and WSL, OrbStack on macOS', dashed: true },
    ] as { title: string; sub: string; dashed?: boolean }[],
    provision: {
      icon: 'opentofu',
      title: 'OpenTofu',
      sub: 'provisions the VPS or managed Kubernetes on DO, Hetzner, GCP or AWS',
    },
    cluster: {
      label: 'K3S ON A VPS · UFW · fail2ban · key-only SSH',
      ingress: { icon: 'traefikproxy', title: 'Traefik ingress + Let’s Encrypt' },
      apps: [
        {
          icon: 'laravel',
          title: 'shop-production',
          sub: 'web · queue · scheduler',
          sub2: 'one namespace per app',
        },
        {
          title: 'larakube-shared',
          sub: 'SSO, VPN and secrets',
          sub2: 'for team tools',
        },
      ] as { icon?: string; title: string; sub: string; sub2: string }[],
      commons: { title: 'Commons', sub: 'Postgres · MySQL · Valkey · S3 · Meilisearch' },
    },
    managed: {
      title: 'Managed Kubernetes (e.g. DOKS)',
      sub: 'same manifests when you outgrow one server',
    },
  },
  roadmap: {
    title: 'Coming soon: LaraKube Cloud',
    text: 'a web version of LaraKube Desktop with accounts and teams — no install required.',
  },
  decisionsTitle: 'Architecture decisions and trade-offs',
  decisions: [
    {
      title: 'k3s instead of Docker Swarm',
      body: 'A single VPS and a managed cluster speak the same Kubernetes API, so nothing gets rewritten when an app grows.',
    },
    {
      title: 'Plain manifests in your repo',
      body: 'LaraKube Desktop writes standard Kubernetes YAML into the project. If you stop using it, your app still deploys.',
    },
    {
      title: 'One blueprint everywhere',
      body: 'Local clusters, a small VPS and managed Kubernetes all run the same manifests, so local testing matches production.',
    },
    {
      title: 'Shared Commons, separate tenants',
      body: 'One Postgres, Valkey, S3 and Meilisearch per cluster saves memory. Each app still gets its own database, login, bucket and index.',
    },
    {
      title: 'Servers hardened by default',
      body: 'Every server gets UFW, fail2ban, key-only SSH and optional IP allow-listing for SSH and the k3s API.',
    },
    {
      title: 'No PHP on your laptop',
      body: 'Composer, Node and installers run in throwaway containers, and file ownership maps back to your user.',
    },
  ],
  links: [
    { label: 'docs.larakube.app', href: 'https://docs.larakube.app' },
    { label: 'larakube-cli on GitHub', href: 'https://github.com/luchavez-technologies/larakube-cli' },
    { label: 'larakube-desktop on GitHub', href: 'https://github.com/luchavez-technologies/larakube-desktop' },
  ],
  // Drop files into public/desktop/ with these exact names to fill these in;
  // until then each one renders as a placeholder with its expected path.
  screenshots: [
    { file: '01-dashboard.png', caption: 'Fleet dashboard' },
    { file: '02-create-server.png', caption: 'Creating a server' },
    { file: '03-create-project.png', caption: 'Starting a new project' },
    { file: '04-cluster-apps.png', caption: 'Cluster apps' },
  ],
};

export const skills = {
  title: 'What I work with',
  subtitle: 'Laravel on the backend, and everything it takes to run it in production.',
  groups: [
    {
      name: 'Backend',
      items: [
        { name: 'Laravel', icon: 'laravel' },
        { name: 'PHP', icon: 'php' },
        { name: 'FilamentPHP', icon: 'filament' },
        { name: 'GraphQL', icon: 'graphql' },
        { name: 'REST APIs' },
        { name: 'MCP' },
        { name: 'OpenAI API' },
        { name: 'Claude', icon: 'claude' },
        { name: 'Antigravity' },
      ] as Tech[],
    },
    {
      name: 'Data',
      items: [
        { name: 'MySQL', icon: 'mysql' },
        { name: 'PostgreSQL', icon: 'postgresql' },
        { name: 'Redis', icon: 'redis' },
        { name: 'Meilisearch', icon: 'meilisearch' },
        { name: 'SeaweedFS' },
      ] as Tech[],
    },
    {
      name: 'Infrastructure',
      items: [
        { name: 'Docker', icon: 'docker' },
        { name: 'Kubernetes', icon: 'kubernetes' },
        { name: 'k3s', icon: 'k3s' },
        { name: 'Traefik', icon: 'traefikproxy' },
        { name: 'OpenTofu', icon: 'opentofu' },
        { name: 'OpenBao', icon: 'openbao' },
      ] as Tech[],
    },
    {
      name: 'Cloud and CI',
      items: [
        { name: 'AWS Lambda' },
        { name: 'AWS S3' },
        { name: 'DigitalOcean', icon: 'digitalocean' },
        { name: 'Hetzner', icon: 'hetzner' },
        { name: 'Cloudflare', icon: 'cloudflare' },
        { name: 'GitHub Actions', icon: 'githubactions' },
      ] as Tech[],
    },
  ],
};

export const experience = {
  title: 'Experience',
  subtitle:
    '7+ years building Laravel backends for teams in the US, Canada, Australia and the Philippines.',
  roles: [
    {
      date: 'Now',
      title: 'Founder, LuchTech Web Development Services',
      description: 'Building LaraKube Desktop, LaraKube CLI and the upcoming LaraKube Cloud.',
      tags: [
        { name: 'k3s', icon: 'k3s' },
        { name: 'OpenTofu', icon: 'opentofu' },
        { name: 'OpenBao', icon: 'openbao' },
      ] as Tech[],
    },
    {
      date: '2022 – now',
      title: 'Freelance Web Developer · Value Direct Inc., Atlanta',
      description:
        'Architect, build and run high-performance web apps, and the REST APIs that connect them to outside services.',
      tags: [
        { name: 'Laravel', icon: 'laravel' },
        { name: 'MySQL', icon: 'mysql' },
        { name: 'Redis', icon: 'redis' },
        { name: 'Meilisearch', icon: 'meilisearch' },
        { name: 'Docker Swarm', icon: 'docker' },
      ] as Tech[],
    },
    {
      date: '2025 – 2026',
      title: 'Systems Integration Engineer · MCM Retail Group, Jacksonville',
      description:
        'Designed a Laravel backend that integrates and manages third-party services at scale, added LLM features with the OpenAI API, and built the admin panel in FilamentPHP.',
      tags: [
        { name: 'Laravel', icon: 'laravel' },
        { name: 'FilamentPHP', icon: 'filament' },
        { name: 'OpenAI API' },
      ] as Tech[],
    },
    {
      date: '2024 – 2025',
      title: 'Backend Developer · MCM Retail Group, Jacksonville',
      description:
        'Moved critical processes to AWS Lambda for faster runs and lower cloud costs, and led the team’s move to serverless Laravel.',
      tags: [{ name: 'Laravel', icon: 'laravel' }, { name: 'AWS Lambda' }] as Tech[],
    },
    {
      date: '2020 – 2023',
      title: 'Earlier roles',
      description:
        'Software Engineer at Fligno Software Philippines, Backend Engineer at FIN-PAY in Brisbane, Software Engineer at Paiid in Vancouver, and Laravel Backend Developer at Fourello in Mandaluyong.',
      tags: [] as Tech[],
    },
  ],
};

export const contact = {
  title: 'Hiring a backend engineer who can also run the cluster?',
  text: 'Based in Cagayan de Oro, Philippines, and used to working with teams in US, Canadian and Australian time zones.',
};

export const footer = {
  copyright: '© 2026 James Carlo Luchavez',
  sourceUrl: 'https://github.com/luchtech/portfolio',
};
