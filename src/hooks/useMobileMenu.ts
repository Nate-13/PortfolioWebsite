"use client";

import { useState, useCallback } from "react";

export function useMobileMenu() {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggle = useCallback(() => {
    setIsExpanded((prev) => !prev);
  }, []);

  const close = useCallback(() => {
    setIsExpanded(false);
  }, []);

  return { isExpanded, toggle, close };
}
