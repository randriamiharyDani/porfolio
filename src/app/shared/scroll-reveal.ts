export function initScrollReveal(): () => void {
  if (
    typeof window === 'undefined' ||
    typeof document === 'undefined' ||
    typeof IntersectionObserver === 'undefined'
  ) {
    return () => {};
  }

  const elements = Array.from(
    document.querySelectorAll<HTMLElement>('[data-reveal]')
  );

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        const el = entry.target as HTMLElement;
        el.classList.add('reveal');
        const delay = Number(el.dataset['delay'] || 0);
        window.setTimeout(() => el.classList.add('visible'), delay);
        observer.unobserve(el);
      });
    },
    { threshold: 0.12 }
  );

  elements.forEach((el) => observer.observe(el));

  return () => observer.disconnect();
}