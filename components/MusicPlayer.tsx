"use client";
import { Pause, Play, Volume2, VolumeX } from "lucide-react";
import { useRef, useState } from "react";
export function MusicPlayer({ src }: { src: string }) {
  const audio = useRef<HTMLAudioElement>(null);
  const [playing, setPlaying] = useState(false);
  const [muted, setMuted] = useState(false);
  const toggle = async () => {
    if (!audio.current) return;
    if (playing) { audio.current.pause(); setPlaying(false); return; }
    try { await audio.current.play(); setPlaying(true); } catch { setPlaying(false); }
  };
  const mute = () => { if (audio.current) { audio.current.muted = !muted; setMuted(!muted); } };
  return (
    <div className="music-player">
      <audio ref={audio} src={src} loop preload="none" onEnded={() => setPlaying(false)} />
      <button aria-label={playing ? "Müziği duraklat" : "Müziği başlat"} onClick={toggle}>{playing ? <Pause size={14} fill="currentColor" /> : <Play size={14} fill="currentColor" />}</button>
      <button aria-label={muted ? "Sesi aç" : "Sesi kapat"} onClick={mute}>{muted ? <VolumeX size={14} /> : <Volume2 size={14} />}</button>
    </div>
  );
}
