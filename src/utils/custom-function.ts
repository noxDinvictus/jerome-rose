export async function goToId(id: string) {
  const targetElement = document.getElementById(id);
  if (!targetElement) return;

  const targetPosition =
    targetElement.getBoundingClientRect().top + window.scrollY;
  const startPosition = window.scrollY;
  const distance = targetPosition - startPosition;
  const duration = 1000;
  let startTime: number | null = null;

  function animation(currentTime: number) {
    if (startTime === null) startTime = currentTime;
    const timeElapsed = currentTime - startTime;
    const progress = Math.min(timeElapsed / duration, 1);
    const ease = easeInOutQuad(progress);
    window.scrollTo(0, startPosition + distance * ease);

    if (timeElapsed < duration) {
      window.requestAnimationFrame(animation);
    }
  }

  function easeInOutQuad(t: number) {
    return t < 0.5 ? 2 * t * t : 1 - Math.pow(-2 * t + 2, 2) / 2;
  }

  window.requestAnimationFrame(animation);
}

export function delay(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}
