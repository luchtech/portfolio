// Small progressive enhancement: a one-shot hero terminal typing effect, the
// WhatsApp QR toggle, and the screenshot carousel (Embla). All default to the
// fully-visible SSR output and only add motion when JS runs and the visitor
// hasn't asked for reduced motion.
import EmblaCarousel from 'embla-carousel';
import Autoplay from 'embla-carousel-autoplay';

function prefersReducedMotion(): boolean {
  return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
}

export function initThemeToggle(): void {
  const toggle = document.querySelector<HTMLButtonElement>('#theme-toggle');
  if (!toggle) return;

  toggle.addEventListener('click', () => {
    const next = document.documentElement.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
    document.documentElement.setAttribute('data-theme', next);
    localStorage.setItem('theme', next);
  });
}

// Wires up every `.embla` carousel on the page independently (screenshots,
// videos, …), so each gets its own Embla instance, buttons, and dots scoped
// to that root rather than the first match on the page.
export function initCarousel(): void {
  const roots = document.querySelectorAll<HTMLElement>('.embla');

  roots.forEach((root) => {
    const viewport = root.querySelector<HTMLElement>('.embla__viewport');
    const dotsContainer = root.querySelector<HTMLElement>('.embla__dots');
    if (!viewport) return;

    const plugins =
      prefersReducedMotion() || root.dataset.autoplay === 'false'
        ? []
        : [Autoplay({ delay: 4500, stopOnInteraction: true, stopOnMouseEnter: true })];

    // slidesToScroll defaults to 1 (one card per swipe); a carousel that
    // shows several cards per view at wider widths (e.g. videos, 3-up on
    // desktop) overrides it per breakpoint so one swipe advances a full page.
    const embla = EmblaCarousel(
      viewport,
      { loop: true, slidesToScroll: 1, breakpoints: JSON.parse(root.dataset.emblaBreakpoints ?? '{}') },
      plugins,
    );

    const prevBtn = root.querySelector<HTMLButtonElement>('.embla__btn--prev');
    const nextBtn = root.querySelector<HTMLButtonElement>('.embla__btn--next');
    prevBtn?.addEventListener('click', () => embla.scrollPrev());
    nextBtn?.addEventListener('click', () => embla.scrollNext());

    // Dots are built from Embla's own scroll-snap list (one per page), not
    // the slide count, so a 3-up-on-desktop carousel still shows one dot
    // per swipe rather than one per card.
    const buildDots = () => {
      if (!dotsContainer) return [];
      dotsContainer.innerHTML = '';
      return embla.scrollSnapList().map((_, i) => {
        const dot = document.createElement('button');
        dot.type = 'button';
        dot.className = 'embla__dot';
        dot.setAttribute('aria-label', `Go to slide ${i + 1}`);
        dot.addEventListener('click', () => embla.scrollTo(i));
        dotsContainer.appendChild(dot);
        return dot;
      });
    };
    let dots = buildDots();

    const updateDots = () => {
      const selected = embla.selectedScrollSnap();
      dots.forEach((dot, i) => dot.classList.toggle('embla__dot--selected', i === selected));
    };
    embla.on('select', updateDots);
    updateDots();

    // Nav buttons center on the media (thumbnail/screenshot) itself, not the
    // slide's full height — the figcaption below it is part of the same
    // scroll track. Measured from the real element since it's a
    // responsive aspect-ratio box, not a fixed size.
    const updateMediaHeight = () => {
      const media = root.querySelector<HTMLElement>('.embla__media');
      if (media) root.style.setProperty('--embla-media-h', `${media.getBoundingClientRect().height}px`);
    };
    updateMediaHeight();
    embla.on('resize', updateMediaHeight);
    embla.on('reInit', () => {
      dots = buildDots();
      updateDots();
      updateMediaHeight();
    });
  });
}

export function initQrToggle(): void {
  const toggle = document.querySelector<HTMLButtonElement>('.btn-split__toggle');
  const panel = document.querySelector<HTMLElement>('.qr-panel');
  const wrap = document.querySelector<HTMLElement>('.btn-split');
  if (!toggle || !panel || !wrap) return;

  const close = () => {
    toggle.setAttribute('aria-expanded', 'false');
    panel.classList.remove('is-open');
  };

  toggle.addEventListener('click', (e) => {
    e.stopPropagation();
    const open = toggle.getAttribute('aria-expanded') === 'true';
    if (open) {
      close();
    } else {
      toggle.setAttribute('aria-expanded', 'true');
      panel.classList.add('is-open');
    }
  });

  document.addEventListener('click', (e) => {
    if (!wrap.contains(e.target as Node)) close();
  });
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') close();
  });
}

export function initVideoDisclosure(): void {
  const details = document.querySelector<HTMLDetailsElement>('.contact-video');
  const embed = details?.querySelector<HTMLElement>('.contact-video__embed');
  if (!details || !embed) return;

  details.addEventListener(
    'toggle',
    () => {
      if (!details.open) return;
      const loomId = embed.dataset.loomId;
      if (!loomId) return;
      const iframe = document.createElement('iframe');
      iframe.src = `https://www.loom.com/embed/${loomId}`;
      iframe.title = 'Video';
      iframe.allow = 'fullscreen';
      iframe.allowFullscreen = true;
      embed.appendChild(iframe);
    },
    { once: true },
  );
}

// Demo video carousel on the LaraKube section: each card shows a YouTube
// thumbnail (no iframe cost) and clicking it spotlights the real embed in a
// centered, enlarged lightbox above a dimmed backdrop, rather than playing
// cramped inline inside a one-third-width carousel card.
export function initLkVideos(): void {
  const lightbox = document.querySelector<HTMLElement>('.lk-video-lightbox');
  const embed = lightbox?.querySelector<HTMLElement>('.lk-video-lightbox__embed');
  const closeBtn = lightbox?.querySelector<HTMLButtonElement>('.lk-video-lightbox__close');
  const buttons = document.querySelectorAll<HTMLButtonElement>('.lk-video__play');
  if (!lightbox || !embed) return;

  const close = () => {
    lightbox.classList.remove('is-open');
    lightbox.setAttribute('aria-hidden', 'true');
    embed.innerHTML = ''; // removing the iframe stops playback
    document.body.classList.remove('lk-video-lightbox-open');
  };

  const open = (youtubeId: string, title: string) => {
    const iframe = document.createElement('iframe');
    iframe.src = `https://www.youtube.com/embed/${youtubeId}?autoplay=1`;
    iframe.title = title;
    iframe.allow = 'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share';
    iframe.allowFullscreen = true;
    embed.appendChild(iframe);
    lightbox.classList.add('is-open');
    lightbox.setAttribute('aria-hidden', 'false');
    document.body.classList.add('lk-video-lightbox-open');
    closeBtn?.focus();
  };

  buttons.forEach((button) => {
    button.addEventListener('click', () => {
      const card = button.closest<HTMLElement>('.lk-video');
      const youtubeId = card?.dataset.youtubeId;
      if (!youtubeId) return;
      open(youtubeId, card?.querySelector('figcaption')?.textContent ?? 'Video');
    });
  });

  closeBtn?.addEventListener('click', close);
  lightbox.querySelector('.lk-video-lightbox__backdrop')?.addEventListener('click', close);
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && lightbox.classList.contains('is-open')) close();
  });
}

export function initTerminalTyping(): void {
  if (prefersReducedMotion()) return;

  const output = document.querySelector<HTMLElement>('.terminal-output');
  if (!output) return;
  const rows = Array.from(output.querySelectorAll<HTMLElement>('.t-row'));
  if (!rows.length) return;

  const captured = rows.map((row) => ({
    html: row.innerHTML,
    text: row.textContent ?? '',
    gap: row.classList.contains('t-gap'),
  }));

  try {
    rows.forEach((row) => {
      row.textContent = '';
    });

    const CHAR_MS = 16;
    const ROW_PAUSE_MS = 140;
    const GAP_PAUSE_MS = 360;

    let rowIndex = 0;

    const typeRow = () => {
      if (rowIndex >= rows.length) return;
      const row = rows[rowIndex];
      const { html, text } = captured[rowIndex];
      const caret = document.createElement('span');
      caret.className = 't-caret';
      caret.textContent = '▋';

      let charIndex = 0;
      const tick = () => {
        charIndex++;
        row.textContent = text.slice(0, charIndex);
        row.appendChild(caret);
        if (charIndex < text.length) {
          setTimeout(tick, CHAR_MS);
          return;
        }
        // Done typing this row: restore the real markup (bold/checkmarks).
        row.innerHTML = html;
        rowIndex++;
        const pause = captured[rowIndex]?.gap ? GAP_PAUSE_MS : ROW_PAUSE_MS;
        if (rowIndex < rows.length) setTimeout(typeRow, pause);
      };
      setTimeout(tick, CHAR_MS);
    };

    typeRow();
  } catch {
    // Any failure: restore every row's original content and stop.
    rows.forEach((row, i) => {
      row.innerHTML = captured[i].html;
    });
  }
}
