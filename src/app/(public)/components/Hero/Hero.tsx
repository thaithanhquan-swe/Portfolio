"use client";

import { images } from "@/app/assets/images";
import Lanyard from "@/components/Lanyard";

export default function Hero() {
  return (
    <section className="relative h-screen overflow-hidden">
      <div className="absolute top-0 right-0 h-full w-1/2">
        <Lanyard
          position={[0, 0, 20]}
          gravity={[0, -40, 0]}
          frontImage={images.main}
          backImage={images.main}
          imageFit="contain"
          lanyardWidth={1}
        />
      </div>
    </section>
  );
}