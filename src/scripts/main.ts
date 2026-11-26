/**
 * Minimal progressive enhancement: one mobile-menu controller and one
 * active-section indicator. No scroll reveals, no transforms, no extra class
 * on <html> — the page is fully visible and styled without this module.
 */

const nav = document.querySelector<HTMLElement>('[data-nav]');
const toggle = document.querySelector<HTMLButtonElement>('[data-nav-toggle]');
const mobilePanel = document.querySelector<HTMLElement>('[data-nav-mobile]');

function setNavOpen(open: boolean): void {
  if (!nav || !toggle || !mobilePanel) return;
  mobilePanel.hidden = !open;
  mobilePanel.setAttribute('aria-hidden', String(!open));
  toggle.setAttribute('aria-expanded', String(open));
  toggle.setAttribute('aria-label', open ? 'Close menu' : 'Open menu');
}

toggle?.addEventListener('click', () => {
  const current = toggle.getAttribute('aria-expanded') === 'true';
  setNavOpen(!current);
});

mobilePanel?.addEventListener('click', (event) => {
  const target = event.target as HTMLElement | null;
  if (target?.closest('a')) setNavOpen(false);
});

// Escape returns focus to the button that owns the panel, so the next Tab does
// not start again at the top of the document (WCAG 2.4.3 focus order).
document.addEventListener('keydown', (event) => {
  if (event.key !== 'Escape') return;
  if (!toggle || toggle.getAttribute('aria-expanded') !== 'true') return;
  setNavOpen(false);
  toggle.focus();
});

window.addEventListener('resize', () => {
  if (window.innerWidth > 820) setNavOpen(false);
});

/* ---------- Active section ---------- */
const navLinks = Array.from(
  document.querySelectorAll<HTMLAnchorElement>('nav[aria-label="Primary"] a[href^="#"]'),
);
const sections = Array.from(document.querySelectorAll<HTMLElement>('main section[id]'));

function setCurrentSection(id: string): void {
  for (const link of navLinks) {
    if (link.getAttribute('href') === `#${id}`) {
      link.setAttribute('aria-current', 'true');
    } else {
      link.removeAttribute('aria-current');
    }
  }
}

if ('IntersectionObserver' in window && sections.length > 0) {
  const observer = new IntersectionObserver(
    (entries) => {
      const visible = entries
        .filter((entry) => entry.isIntersecting)
        .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);
      if (visible[0]) setCurrentSection(visible[0].target.id);
    },
    { rootMargin: '-28% 0px -62% 0px' },
  );
  for (const section of sections) observer.observe(section);
}
