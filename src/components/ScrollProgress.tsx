import { useState, useEffect } from "react";

export function ScrollProgress() {
  const [scrollPct, setScrollPct] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const el = document.documentElement;
      const pct = (el.scrollTop / (el.scrollHeight - el.clientHeight)) * 100;
      setScrollPct(Math.min(100, Math.max(0, pct)));
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div id="scroll-progress-container" className="fixed top-0 left-0 right-0 z-[100] h-[3px] bg-transparent">
      <div 
        id="scroll-progress-bar"
        className="h-full bg-gradient-to-r from-[#B8865F] via-[#C89565] to-[#D4A574] transition-all duration-100 ease-out" 
        style={{ width: `${scrollPct}%` }}
      />
    </div>
  );
}
