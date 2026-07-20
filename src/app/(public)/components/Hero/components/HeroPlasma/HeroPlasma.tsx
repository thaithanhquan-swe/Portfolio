"use client";

import { images } from "@/assets/images";
import Lanyard from "@/components/Lanyard";

export default function HeroPlasma() {
  return (
    <div className="pointer-events-none absolute -top-20 -right-4 h-90 w-[20%] lg:-top-25 lg:right-0 lg:left-auto lg:h-full lg:w-1/2">
      <Lanyard
        position={[0, 0, 20]}
        gravity={[0, -40, 0]}
        frontImage={images.main}
        backImage={images.main}
        imageFit="contain"
        lanyardWidth={2}
      />
    </div>
  );
}
