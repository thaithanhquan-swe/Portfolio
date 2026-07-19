"use client";

import Plasma from "@/components/Plasma";

export default function Background() {
  return (
      <div className="pointer-events-none fixed inset-0 motion-reduce:hidden">
        <Plasma
          color="#B497CF"
          speed={0.7}
          direction="forward"
          scale={1.1}
          opacity={0.85}
          mouseInteractive={false}
        />
      </div>
  );
}
