"use client";

import { useEffect, useRef } from "react";

export function HeroVideo({ className = "" }: { className?: string }) {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    video.muted = true;
    video.defaultMuted = true;

    const play = () => {
      void video.play().catch(() => undefined);
    };

    play();

    if (video.readyState < 2) {
      video.addEventListener("loadeddata", play, { once: true });
    }

    document.addEventListener("visibilitychange", () => {
      if (document.visibilityState === "visible") play();
    });

    return () => {
      video.removeEventListener("loadeddata", play);
    };
  }, []);

  return (
    <video
      ref={videoRef}
      autoPlay
      loop
      muted
      playsInline
      preload="auto"
      controls={false}
      disablePictureInPicture
      className={`block h-full w-full ${className}`}
      aria-label="Non-Alcoholic Beer product film"
    >
      <source src="/video/hero.mp4" type="video/mp4" />
    </video>
  );
}
