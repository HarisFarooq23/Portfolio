import { useEffect, useRef } from "react";

declare global {
  interface Window {
    UnicornStudio?: { isInitialized: boolean; init: () => void };
  }
}

export function UnicornSection() {
  const loaded = useRef(false);

  useEffect(() => {
    if (loaded.current) return;
    loaded.current = true;

    const script = document.createElement("script");
    script.type = "text/javascript";
    script.textContent = `
      !function(){
        if(!window.UnicornStudio){
          window.UnicornStudio={isInitialized:!1};
          var i=document.createElement("script");
          i.src="https://cdn.jsdelivr.net/gh/hiunicornstudio/unicornstudio.js@v1.4.33/dist/unicornStudio.umd.js";
          i.onload=function(){
            window.UnicornStudio.isInitialized||(UnicornStudio.init(),window.UnicornStudio.isInitialized=!0)
          };
          (document.head || document.body).appendChild(i)
        }
      }();
    `;
    document.head.appendChild(script);

    const style = document.createElement("style");
    style.textContent = `
      [data-us-project] { position: relative !important; overflow: hidden !important; }
      [data-us-project] canvas { clip-path: inset(0 0 8% 0) !important; }
      [data-us-project] * { pointer-events: none !important; }
      [data-us-project] a[href*="unicorn"],
      [data-us-project] [class*="brand"],
      [data-us-project] [class*="watermark"] { display: none !important; }
    `;
    document.head.appendChild(style);

    return () => {
      try { document.head.removeChild(script); document.head.removeChild(style); } catch {}
    };
  }, []);

  return (
    <section className="relative w-full overflow-hidden" style={{ height: "60vh", background: "#0a0907" }}>
      <div className="absolute inset-0 hidden lg:block">
        <div
          data-us-project="whwOGlfJ5Rz2rHaEUgHl"
          style={{ width: "100%", height: "100%", minHeight: "60vh" }}
        />
      </div>

      <div className="absolute inset-0 pointer-events-none">
        <div style={{ background: "linear-gradient(to bottom, #0a0907 0%, transparent 15%, transparent 85%, #0a0907 100%)" }} className="absolute inset-0" />
        <div style={{ background: "linear-gradient(to right, #0a0907 0%, transparent 30%, transparent 70%, #0a0907 100%)" }} className="absolute inset-0" />
      </div>

      <div className="relative z-10 h-full flex items-center justify-end px-12 lg:px-24">
        <div className="text-right max-w-md">
          <div className="font-mono text-xs tracking-[0.3em] text-[rgba(201,176,140,0.4)] mb-4">PHILOSOPHY</div>
          <blockquote className="text-2xl lg:text-4xl font-bold text-[#ede0cc] leading-tight mb-6" style={{ fontWeight: 900 }}>
            "Where geometry
            <br />
            <span style={{ color: "#c9b08c" }}>meets</span> intelligence"
          </blockquote>
          <p className="font-mono text-sm text-[rgba(201,176,140,0.5)]">
            Da Vinci mapped human proportion.<br />I map data to understanding.
          </p>
        </div>
      </div>
    </section>
  );
}
