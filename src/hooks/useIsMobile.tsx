import { useState, useEffect } from "react";

const useIsMobile = () => {
  // Initialize isMobile based on the current window width
  // This runs once during the initial render
  const [isMobile, setIsMobile] = useState(
    typeof window !== "undefined" ? window.innerWidth < 640 : false
  );

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 640); // Tailwind `sm` breakpoint
    };

    // No need to call checkMobile() here again, as it's already set initially
    // Unless you want to ensure it re-evaluates on mount for some edge cases,
    // but the resize listener will handle subsequent changes.

    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []); // Empty dependency array means this effect runs once on mount and cleans up on unmount

  return isMobile;
};

export default useIsMobile;
