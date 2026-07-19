"use client";

import { images } from "@/assets/images";
import Lanyard from "@/components/Lanyard";

export default function HeroPlasma() {
  return (
    <div className="pointer-events-none h-90 w-full lg:absolute lg:top-0 lg:right-0 lg:h-full lg:w-1/2">
      <Lanyard
        position={[0, 0, 20]}
        gravity={[0, -40, 0]}
        frontImage={images.main}
        backImage={images.main}
        imageFit="contain"
        lanyardWidth={1}
      />
    </div>
  );
}
