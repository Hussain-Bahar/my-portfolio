import React from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
import { motion } from "framer-motion";

type Props = {
  hasPrev: boolean;
  hasNext: boolean;
  onPrev: () => void;
  onNext: () => void;
};

const float = {
  animate: {
    y: [0, 6, 0],
    transition: { duration: 1.6, repeat: Infinity, ease: "easeInOut" },
  },
};

export default function ArrowHint({ hasPrev, hasNext, onPrev, onNext }: Props) {
  return (
    <div className="pointer-events-none fixed inset-x-0 bottom-6 z-40 flex items-center justify-center gap-6">
      {hasPrev && (
        <motion.button
          variants={float}
          animate="animate"
          onClick={onPrev}
          aria-label="Previous section"
          className="pointer-events-auto flex items-center gap-2 rounded-full border border-white/10 bg-[color:var(--surface)]/70 px-3 py-2 text-xs backdrop-blur hover:brightness-110 transition"
        >
          <ChevronUp className="h-4 w-4" />
          <span className="opacity-80">Up</span>
        </motion.button>
      )}
      {hasNext && (
        <motion.button
          variants={float}
          animate="animate"
          onClick={onNext}
          aria-label="Next section"
          className="pointer-events-auto flex items-center gap-2 rounded-full border border-white/10 bg-[color:var(--surface)]/70 px-3 py-2 text-xs backdrop-blur hover:brightness-110 transition"
        >
          <span className="opacity-80">Down</span>
          <ChevronDown className="h-4 w-4" />
        </motion.button>
      )}
    </div>
  );
}
