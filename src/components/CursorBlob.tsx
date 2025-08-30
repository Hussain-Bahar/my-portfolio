import React from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export default function CursorBlob() {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const xs = useSpring(x, { stiffness: 120, damping: 20, mass: 0.4 });
  const ys = useSpring(y, { stiffness: 120, damping: 20, mass: 0.4 });

  React.useEffect(() => {
    const move = (e: MouseEvent) => {
      x.set(e.clientX - 120);
      y.set(e.clientY - 120);
    };
    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, [x, y]);

  return (
    <motion.div
      style={{ left: xs, top: ys }}
      className="pointer-events-none fixed z-0 h-[240px] w-[240px] rounded-full bg-white/6 blur-2xl dark:bg-white/4"
    />
  );
}
