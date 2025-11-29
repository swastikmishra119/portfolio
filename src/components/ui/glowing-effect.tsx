"use client";

import { memo, useCallback, useEffect, useRef, useState } from "react";
import { cn } from "../../lib/utils";
import { useSpring, useMotionValue, useMotionValueEvent } from "framer-motion";

interface GlowingEffectProps {
  blur?: number;
  inactiveZone?: number;
  proximity?: number;
  spread?: number;
  variant?: "default" | "white";
  glow?: boolean;
  className?: string;
  disabled?: boolean;
  movementDuration?: number;
  borderWidth?: number;
}

const GlowingEffect = memo(
  ({
    blur = 0,
    inactiveZone = 0.7,
    proximity = 0,
    spread = 20,
    variant = "default",
    glow = false,
    className,
    borderWidth = 1,
    disabled = false,
  }: GlowingEffectProps) => {
    const containerRef = useRef<HTMLDivElement>(null);
    const lastPosition = useRef({ x: 0, y: 0 });
    const rectRef = useRef<{ top: number; left: number; width: number; height: number } | null>(null);
    const [isVisible, setIsVisible] = useState(false);

    const angle = useMotionValue(0);
    const smoothAngle = useSpring(angle, {
      damping: 20,
      stiffness: 100,
      mass: 0.5
    });

    useMotionValueEvent(smoothAngle, "change", (latest) => {
      if (containerRef.current) {
        containerRef.current.style.setProperty("--start", String(latest));
      }
    });

    const updateRect = useCallback(() => {
      if (!containerRef.current) return;
      const r = containerRef.current.getBoundingClientRect();
      rectRef.current = {
        top: r.top + window.scrollY,
        left: r.left + window.scrollX,
        width: r.width,
        height: r.height
      };
    }, []);

    useEffect(() => {
      if (!containerRef.current) return;

      const observer = new IntersectionObserver(([entry]) => {
        setIsVisible(entry.isIntersecting);
        if (entry.isIntersecting) {
          updateRect();
        }
      }, { threshold: 0 });

      observer.observe(containerRef.current);
      return () => observer.disconnect();
    }, [updateRect]);

    useEffect(() => {
      updateRect();
      window.addEventListener("resize", updateRect);
      return () => window.removeEventListener("resize", updateRect);
    }, [updateRect]);

    const handleMove = useCallback(
      (e?: MouseEvent | { x: number; y: number }) => {
        if (!containerRef.current || !rectRef.current) return;

        // If it's a real mouse event, update last position
        if (e && 'clientX' in e) {
          lastPosition.current = { x: e.clientX, y: e.clientY };
        }

        const mouseX = lastPosition.current.x;
        const mouseY = lastPosition.current.y;

        const scrollX = window.scrollX;
        const scrollY = window.scrollY;
        const left = rectRef.current.left - scrollX;
        const top = rectRef.current.top - scrollY;
        const width = rectRef.current.width;
        const height = rectRef.current.height;

        const center = [left + width * 0.5, top + height * 0.5];
        const distanceFromCenter = Math.hypot(
          mouseX - center[0],
          mouseY - center[1]
        );
        const inactiveRadius = 0.5 * Math.min(width, height) * inactiveZone;

        if (distanceFromCenter < inactiveRadius) {
          containerRef.current.style.setProperty("--active", "0");
          return;
        }

        const isActive =
          mouseX > left - proximity &&
          mouseX < left + width + proximity &&
          mouseY > top - proximity &&
          mouseY < top + height + proximity;

        containerRef.current.style.setProperty("--active", isActive ? "1" : "0");

        if (!isActive) return;

        const currentAngle = smoothAngle.get();
        let targetAngle =
          (180 * Math.atan2(mouseY - center[1], mouseX - center[0])) /
          Math.PI +
          90;

        const angleDiff = ((targetAngle - currentAngle + 180) % 360) - 180;
        const newAngle = currentAngle + angleDiff;

        angle.set(newAngle);
      },
      [inactiveZone, proximity, angle, smoothAngle]
    );

    useEffect(() => {
      if (disabled || !isVisible) return;

      let rafId: number;

      const handleScroll = () => {
        cancelAnimationFrame(rafId);
        rafId = requestAnimationFrame(() => handleMove());
      };

      const handlePointerMove = (e: PointerEvent) => {
        cancelAnimationFrame(rafId);
        rafId = requestAnimationFrame(() => handleMove(e));
      };

      window.addEventListener("scroll", handleScroll, { passive: true });
      document.body.addEventListener("pointermove", handlePointerMove, {
        passive: true,
      });

      return () => {
        cancelAnimationFrame(rafId);
        window.removeEventListener("scroll", handleScroll);
        document.body.removeEventListener("pointermove", handlePointerMove);
      };
    }, [handleMove, disabled, isVisible]);

    return (
      <>
        <div
          className={cn(
            "pointer-events-none absolute -inset-px hidden rounded-[inherit] border opacity-0 transition-opacity",
            glow && "opacity-100",
            variant === "white" && "border-white",
            disabled && "!block"
          )}
        />
        <div
          ref={containerRef}
          style={
            {
              "--blur": `${blur}px`,
              "--spread": spread,
              "--start": "0",
              "--active": "0",
              "--glowingeffect-border-width": `${borderWidth}px`,
              "--repeating-conic-gradient-times": "5",
              "--gradient":
                variant === "white"
                  ? `repeating-conic-gradient(
                  from 236.84deg at 50% 50%,
                  var(--black),
                  var(--black) calc(25% / var(--repeating-conic-gradient-times))
                )`
                  : `radial-gradient(circle, #dd7bbb 10%, #dd7bbb00 20%),
                radial-gradient(circle at 40% 40%, #d79f1e 5%, #d79f1e00 15%),
                radial-gradient(circle at 60% 60%, #5a922c 10%, #5a922c00 20%), 
                radial-gradient(circle at 40% 60%, #4c7894 10%, #4c789400 20%),
                repeating-conic-gradient(
                  from 236.84deg at 50% 50%,
                  #dd7bbb 0%,
                  #d79f1e calc(25% / var(--repeating-conic-gradient-times)),
                  #5a922c calc(50% / var(--repeating-conic-gradient-times)), 
                  #4c7894 calc(75% / var(--repeating-conic-gradient-times)),
                  #dd7bbb calc(100% / var(--repeating-conic-gradient-times))
                )`,
            } as React.CSSProperties
          }
          className={cn(
            "pointer-events-none absolute inset-0 rounded-[inherit] opacity-100 transition-opacity will-change-transform",
            glow && "opacity-100",
            blur > 0 && "blur-[var(--blur)] ",
            className,
            disabled && "!hidden"
          )}
        >
          <div
            className={cn(
              "glow",
              "rounded-[inherit]",
              'after:content-[""] after:rounded-[inherit] after:absolute after:inset-[calc(-1*var(--glowingeffect-border-width))]',
              "after:[border:var(--glowingeffect-border-width)_solid_transparent]",
              "after:[background:var(--gradient)] after:[background-attachment:fixed]",
              "after:opacity-[var(--active)] after:transition-opacity after:duration-300",
              "after:[mask-clip:padding-box,border-box]",
              "after:[mask-composite:intersect]",
              "after:[mask-image:linear-gradient(#0000,#0000),conic-gradient(from_calc((var(--start)-var(--spread))*1deg),#00000000_0deg,#fff,#00000000_calc(var(--spread)*2deg))]"
            )}
          />
        </div>
      </>
    );
  }
);

GlowingEffect.displayName = "GlowingEffect";

export { GlowingEffect };
