"use client";
/* eslint-disable @next/next/no-img-element -- Photos are user-replaceable and need a graceful native error fallback. */
import { useState } from "react";
export function MemoryImage({ src, alt, className = "" }: { src: string; alt: string; className?: string }) {
  const [missing, setMissing] = useState(false);
  if (missing) return <div aria-label={`${alt} için fotoğraf alanı`} className={`photo-placeholder ${className}`}><span>fotoğrafını buraya ekle</span></div>;
  return <img className={className} src={src} alt={alt} loading="lazy" onError={() => setMissing(true)} />;
}
