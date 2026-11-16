// All page text lives here, so edits don't require touching components.
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
  resumeDocxUrl: '/resume.docx',
  location: 'Cagayan de Oro, Philippines',
};

export const nav = [
  { label: 'Clients', href: '#testimonials' },
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
    "I'm James, a backend engineer with 6+ years of Laravel and PHP behind me. Most recently I ran a 7-API integration platform solo at MCM Retail Group. I also build LaraKube Desktop, an open-source tool that provisions servers with OpenTofu and runs Laravel apps on k3s.",
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
  logo: 'larakube.png', // in src/assets/; shown only if the file exists
  spinProUrl: 'https://getspin.pro/',
  problem: 'Docker Swarm gets you to production fast — but it won’t carry you into Kubernetes.',
  why: [
    'I’d paid for Spin Pro, ServerSideUp’s one-CLI-to-production tool for Docker Swarm, and wanted the same for Kubernetes: start on one VPS running k3s, move to managed Kubernetes later, no rewrites. That became LaraKube CLI — then LaraKube Desktop, for a GUI.',
  ],
  // What LaraKube itself is built with — distinct from `tools` above, which
  // is the toolbox James uses for client work, not this project's own stack.
  stack: {
    language: { name: 'PHP', icon: 'php' } as Tech,
    parts: [
      { label: 'CLI', icon: 'terminal', name: 'Laravel Zero', href: 'https://laravel-zero.com/' },
      { label: 'Desktop app', icon: 'monitor', name: 'NativePHP', href: 'https://nativephp.com/' },
    ] as const,
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
  // Drop files into src/assets/desktop/ with these exact names to fill these in;
  // until then each one renders as a placeholder with its expected path.
  screenshots: [
    { file: '01-dashboard.png', caption: 'Fleet dashboard' },
    { file: '02-create-server.png', caption: 'Creating a server' },
    { file: '03-create-project.png', caption: 'Starting a new project' },
    { file: '04-cluster-apps.png', caption: 'Cluster apps' },
  ],
  // Demo clips — bite-size, one per feature. Fetched live from this playlist
  // at build time (see src/lib/youtube.ts); `videos` below is only the
  // fallback used if that fetch fails.
  videosPlaylistId: 'PLA7VUwI0KNjI',
  videos: [
    { title: 'LaraKube Desktop: Deploy a Kubernetes Server in 3 Minutes', youtubeId: '9qw4NPD-Jz4' },
    { title: 'LaraKube Desktop: Install n8n with One Click', youtubeId: 'kO4ouF1c0zc' },
    { title: 'LaraKube Desktop: Install PocketBase (Self-Hosted Backend) in One Click', youtubeId: 'aj7jBycASs4' },
    { title: 'LaraKube Desktop: Install WordPress (Zero-Config CMS) in One Click', youtubeId: 'W-pbvrJv8Fk' },
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
        { name: 'Laravel Horizon' },
        { name: 'Laravel Reverb' },
        { name: 'React', icon: 'react' },
        { name: 'Inertia', icon: 'inertia' },
        { name: 'PHPUnit' },
        { name: 'Pest' },
        { name: 'Playwright' },
        { name: 'Sentry', icon: 'sentry' },
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
        { name: 'Linux', icon: 'linux' },
        { name: 'Nginx', icon: 'nginx' },
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
        { name: 'AWS EC2' },
        { name: 'AWS RDS' },
        { name: 'AWS S3' },
        { name: 'CloudFront' },
        { name: 'Elastic Beanstalk' },
        { name: 'Bref' },
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
    '6+ years building Laravel backends for teams in the US, Canada, Australia and the Philippines.',
  roles: [
    {
      date: 'Apr 2026 – now',
      title: 'Founder & Lead Engineer · LuchTech Web Development Services',
      description:
        'Building LaraKube, an open-source platform that provisions servers with OpenTofu across 4 clouds and deploys Laravel and 14 other frameworks to k3s, with a NativePHP desktop app and a Laravel Zero CLI.',
      tags: [
        { name: 'k3s', icon: 'k3s' },
        { name: 'OpenTofu', icon: 'opentofu' },
        { name: 'OpenBao', icon: 'openbao' },
        { name: 'React', icon: 'react' },
        { name: 'Inertia', icon: 'inertia' },
      ] as Tech[],
    },
    {
      date: 'Feb 2025 – Jun 2026',
      title: 'Systems Integration Engineer · MCM Retail Group, Jacksonville (remote)',
      description:
        'Became the sole backend engineer after layoffs and consolidated dozens of scattered automation scripts into one version-controlled Laravel platform integrating 7 third-party APIs: Jotform webhooks, Airtable, GoHighLevel CRM, Mobiz SMS, Checkbook.io payouts, GunBroker and Shippo. Moved it from AWS Lambda to EC2 with Docker Swarm, and added a FilamentPHP admin panel, real-time features with Laravel Reverb, and LLM features with the OpenAI API.',
      tags: [
        { name: 'Laravel', icon: 'laravel' },
        { name: 'FilamentPHP', icon: 'filament' },
        { name: 'Inertia', icon: 'inertia' },
        { name: 'React', icon: 'react' },
        { name: 'Docker Swarm', icon: 'docker' },
        { name: 'OpenAI API' },
      ] as Tech[],
    },
    {
      date: 'Feb 2024 – Feb 2025',
      title: 'Backend Developer · MCM Retail Group, Jacksonville (remote)',
      description:
        'Migrated business automations from Make, Zapier, Airtable, Google Apps Script and GoHighLevel into AWS Lambda, then led the move from standalone JavaScript scripts to Laravel on Lambda with Bref for version control and a shared codebase.',
      tags: [{ name: 'Laravel', icon: 'laravel' }, { name: 'AWS Lambda' }, { name: 'Bref' }] as Tech[],
    },
    {
      date: 'Dec 2022 – May 2026',
      title: 'Freelance Web Developer · Value Direct Inc., Atlanta (remote)',
      description:
        'Built and regularly extended a form-builder platform for client intake in the legal-services industry, plus the REST APIs connecting it to outside services, until the client retired the service.',
      tags: [
        { name: 'Laravel', icon: 'laravel' },
        { name: 'Inertia', icon: 'inertia' },
        { name: 'React', icon: 'react' },
        { name: 'MySQL', icon: 'mysql' },
        { name: 'Redis', icon: 'redis' },
        { name: 'Meilisearch', icon: 'meilisearch' },
        { name: 'Docker Swarm', icon: 'docker' },
      ] as Tech[],
    },
    {
      date: 'Oct 2021 – Aug 2023',
      title: 'Software Engineer · Fligno Software Philippines',
      description:
        'Promoted twice, from Junior Web Developer to Software Engineer. Placed as backend engineer on client projects for FIN-PAY (Brisbane) and Paiid (Vancouver). Published 15+ open-source Laravel packages on Packagist (about 10,000 downloads), tested with PHPUnit and Pest. Tracked production errors with Sentry.',
      tags: [
        { name: 'Laravel', icon: 'laravel' },
        { name: 'PHP', icon: 'php' },
        { name: 'Packagist', icon: 'packagist' },
      ] as Tech[],
    },
    {
      date: 'Nov 2020 – Sep 2021',
      title: 'Laravel Developer · Fourello, Mandaluyong',
      description:
        'Deployed Laravel apps on AWS (Elastic Beanstalk, EC2, RDS, S3 and CloudFront), integrated PayMaya payments and Mr. Speedy delivery as reusable Laravel SDKs, and built the team’s packages (about 20,000 downloads combined).',
      tags: [{ name: 'Laravel', icon: 'laravel' }, { name: 'AWS', icon: 'aws' }] as Tech[],
    },
  ],
};

export const testimonials = {
  title: 'What clients say',
  subtitle: 'From the people I built for.',
  items: [
    {
      quote: 'James Carlo works tirelessly to solve technology problems.',
      name: 'Isaiah Miller',
      role: 'Head of Innovation, MCM Retail Group, Inc.',
      // File name in src/assets/testimonials/, optimised at build time.
      photo: 'isaiah.png',
    },
    {
      quote:
        'James turned what we needed into a working system. He built our intake forms, connected them to the other services we use, and looked after the platform for more than three years. He was patient, explained things clearly, and always delivered. He is a trustworthy individual.',
      name: 'Bruno',
      role: 'President, Value Direct Inc.',
      photo: null as string | null,
    },
  ],
};

export const contact = {
  title: 'Hiring a backend engineer who can also run the cluster?',
  text: 'Based in Cagayan de Oro, Philippines, and used to working with teams in US, Canadian and Australian time zones.',
  video: {
    // Draft label — edit to match what the video actually shows.
    label: 'Want a bit more? Watch a short video',
    loomId: 'd8fc9d6b8e3448e6b9b6e35b81aca793',
  },
};

export const footer = {
  copyright: '© 2026 James Carlo Luchavez',
  sourceUrl: 'https://github.com/luchtech/portfolio',
};
