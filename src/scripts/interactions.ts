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

export function initCarousel(): void {
  const viewport = document.querySelector<HTMLElement>('.embla__viewport');
  if (!viewport) return;

  const plugins = prefersReducedMotion()
    ? []
    : [Autoplay({ delay: 4500, stopOnInteraction: true, stopOnMouseEnter: true })];
  const embla = EmblaCarousel(viewport, { loop: true }, plugins);

  const prevBtn = document.querySelector<HTMLButtonElement>('.embla__btn--prev');
  const nextBtn = document.querySelector<HTMLButtonElement>('.embla__btn--next');
  prevBtn?.addEventListener('click', () => embla.scrollPrev());
  nextBtn?.addEventListener('click', () => embla.scrollNext());

  const dots = Array.from(document.querySelectorAll<HTMLButtonElement>('.embla__dot'));
  dots.forEach((dot, i) => dot.addEventListener('click', () => embla.scrollTo(i)));

  const updateDots = () => {
    const selected = embla.selectedScrollSnap();
    dots.forEach((dot, i) => dot.classList.toggle('embla__dot--selected', i === selected));
  };
  embla.on('select', updateDots);
  updateDots();
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
