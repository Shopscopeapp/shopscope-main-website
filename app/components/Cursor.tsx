"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

interface CursorProps {
  mousePosition: { x: number; y: number };
}

export default function Cursor({ mousePosition }: CursorProps) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  if (!isVisible) return null;

  return (
    <>
      <motion.div
        className="fixed w-4 h-4 bg-black rounded-full pointer-events-none z-[100] mix-blend-difference hidden md:block"
        animate={{
          x: mousePosition.x - 8,
          y: mousePosition.y - 8,
        }}
        transition={{
          type: "spring",
          damping: 30,
          stiffness: 200,
          mass: 0.5,
        }}
      />
      <motion.div
        className="fixed w-8 h-8 border-2 border-black rounded-full pointer-events-none z-[99] hidden md:block"
        animate={{
          x: mousePosition.x - 16,
          y: mousePosition.y - 16,
        }}
        transition={{
          type: "spring",
          damping: 20,
          stiffness: 100,
          mass: 0.8,
        }}
      />
    </>
  );
}

