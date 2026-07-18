"use client";

import Plasma from "@/components/Plasma";

export default function Background() {
  return (
    <div className="fixed inset-0 z-0 overflow-hidden bg-[#05030a]" aria-hidden="true">
      <div className="absolute inset-0 motion-reduce:hidden">
        <Plasma
          color="#B497CF"
          speed={0.7}
          direction="forward"
          scale={1.1}
          opacity={0.85}
          mouseInteractive={false}
        />
      </div>

      <div className="absolute inset-0 hidden bg-[radial-gradient(circle_at_50%_35%,#5e3b78_0%,#181020_42%,#05030a_75%)] motion-reduce:block" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(5,3,10,0.18)_55%,rgba(5,3,10,0.72)_100%)]" />
      <div className="absolute inset-0 bg-black/10" />
    </div>
  );
}
