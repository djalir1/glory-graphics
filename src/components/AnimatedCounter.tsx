import { useEffect, useRef, useState } from "react";
import { useInView } from "framer-motion";

interface AnimatedCounterProps {
  target: string;
  duration?: number;
}

const AnimatedCounter = ({ target, duration = 2000 }: AnimatedCounterProps) => {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true });
  const [display, setDisplay] = useState("0");

  useEffect(() => {
    if (!isInView) return;

    const numericMatch = target.match(/[\d.]+/);
    if (!numericMatch) {
      setDisplay(target);
      return;
    }

    const end = parseFloat(numericMatch[0]);
    const prefix = target.slice(0, target.indexOf(numericMatch[0]));
    const suffix = target.slice(target.indexOf(numericMatch[0]) + numericMatch[0].length);
    const isDecimal = numericMatch[0].includes(".");
    const startTime = performance.now();

    const animate = (now: number) => {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      const current = eased * end;

      setDisplay(
        `${prefix}${isDecimal ? current.toFixed(1) : Math.floor(current)}${suffix}`
      );

      if (progress < 1) requestAnimationFrame(animate);
    };

    requestAnimationFrame(animate);
  }, [isInView, target, duration]);

  return <span ref={ref}>{display}</span>;
};

export default AnimatedCounter;
