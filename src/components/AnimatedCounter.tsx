import React, { useEffect, useRef } from "react";
import { animate, useInView } from "framer-motion";

// Step 1: Props ke liye ek type define karein
interface AnimatedCounterProps {
  from?: number;
  to: number;
  duration?: number;
  suffix?: string;
}

const AnimatedCounter: React.FC<AnimatedCounterProps> = ({
  from = 0,
  to,
  duration = 2,
  suffix = "",
}) => {
  // Step 2: useRef ko batayein ki yeh ek HTMLSpanElement ko refer karega
  const nodeRef = useRef<HTMLSpanElement>(null);
  const isInView = useInView(nodeRef, { once: true, margin: "-100px" });

  useEffect(() => {
    const node = nodeRef.current;

    // Step 3: Ensure karein ki node null nahi hai (TypeScript safety)
    if (!isInView || !node) return;

    const controls = animate(from, to, {
      duration: duration,
      ease: "easeOut",
      onUpdate(value) {
        // TypeScript ab jaanta hai ki 'node' ek HTML element hai
        node.textContent = Math.round(value).toLocaleString("en-IN") + suffix;
      },
    });

    return () => controls.stop();
  }, [from, to, duration, suffix, isInView]);

  return (
    <span ref={nodeRef}>
      {from}
      {suffix}
    </span>
  );
};

export default AnimatedCounter;
