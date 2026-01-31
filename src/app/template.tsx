"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function Template({ children }: { children: React.ReactNode }) {
  const [isExiting, setIsExiting] = useState(false);

  useEffect(() => {
    const handleExit = () => {
      setIsExiting(true);
    };

    window.addEventListener("page-exit-start", handleExit);
    return () => window.removeEventListener("page-exit-start", handleExit);
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: isExiting ? 0 : 1 }}
      transition={{
        duration: isExiting ? 0.3 : 0.25,
        delay: isExiting ? 0 : 0.1,
        ease: [0.4, 0, 0.2, 1],
      }}
    >
      {children}
    </motion.div>
  );
}
