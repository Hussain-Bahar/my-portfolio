import { useEffect } from "react";

/**
 * Magnetic hover effect for any HTMLElement ref.
 * Accepts refs that may be null during initial render.
 */
export default function useMagnetic(
  ref: React.RefObject<HTMLElement | null>,
  strength = 20
) {
  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const onMove = (e: MouseEvent) => {
      const rect = el.getBoundingClientRect();
      const relX = e.clientX - (rect.left + rect.width / 2);
      const relY = e.clientY - (rect.top + rect.height / 2);
      el.style.transform = `translate(${(relX / rect.width) * strength}px, ${(relY / rect.height) * strength}px)`;
    };
    const onLeave = () => {
      el.style.transform = `translate(0,0)`;
    };

    el.addEventListener("mousemove", onMove);
    el.addEventListener("mouseleave", onLeave);
    return () => {
      el.removeEventListener("mousemove", onMove);
      el.removeEventListener("mouseleave", onLeave);
    };
  }, [ref, strength]);
}
