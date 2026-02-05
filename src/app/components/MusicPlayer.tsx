import React, { useEffect, useRef, useState } from "react";
import { Volume, VolumeX } from "lucide-react";
import backsound from "../../assets/backsound.mp3";

export function MusicPlayer() {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [userMuted, setUserMuted] = useState<boolean>(() => {
    try {
      return localStorage.getItem("music-muted") === "true";
    } catch {
      return false;
    }
  });
  const [autoplayBlocked, setAutoplayBlocked] = useState(false);

  // effective muted state: either user explicitly muted, or autoplay fallback enforced muted
  const effectiveMuted = userMuted || autoplayBlocked;

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    // If user explicitly muted, pause playback
    if (userMuted) {
      audio.muted = true;
      audio.pause();
      return;
    }

    // Try to autoplay unmuted. If browser blocks autoplay, fallback to muted autoplay and mark blocked.
    audio.muted = false;
    audio.play()
      .then(() => {
        setAutoplayBlocked(false);
      })
      .catch(() => {
        // Autoplay with sound blocked — start muted autoplay and remember it's blocked so we can unmute on gesture
        audio.muted = true;
        audio.play().catch(() => {});
        setAutoplayBlocked(true);
      });
  }, [userMuted]);

  useEffect(() => {
    // If autoplay was blocked, unmute on first user gesture (click/keydown/touch)
    if (!autoplayBlocked) return;
    const onFirstInteraction = () => {
      const audio = audioRef.current;
      if (!audio) return;
      audio.muted = false;
      audio.play().catch(() => {});
      setAutoplayBlocked(false);
      window.removeEventListener("click", onFirstInteraction);
      window.removeEventListener("keydown", onFirstInteraction);
      window.removeEventListener("touchstart", onFirstInteraction);
    };

    window.addEventListener("click", onFirstInteraction, { once: true });
    window.addEventListener("keydown", onFirstInteraction, { once: true });
    window.addEventListener("touchstart", onFirstInteraction, { once: true });

    return () => {
      window.removeEventListener("click", onFirstInteraction);
      window.removeEventListener("keydown", onFirstInteraction);
      window.removeEventListener("touchstart", onFirstInteraction);
    };
  }, [autoplayBlocked]);

  const toggle = () => {
    const next = !userMuted;
    setUserMuted(next);
    try {
      localStorage.setItem("music-muted", String(next));
    } catch {}

    // If user toggles to unmute, allow immediate unmute and play (user gesture)
    const audio = audioRef.current;
    if (audio) {
      audio.muted = next ? true : false;
      if (!next) audio.play().catch(() => {});
      else audio.pause();
    }
  };

  return (
    <>
      <div className="fixed left-4 bottom-4 z-50">
        <button
          onClick={toggle}
          aria-pressed={!effectiveMuted}
          title={effectiveMuted ? "Enable music" : "Disable music"}
          className="flex items-center justify-center w-12 h-12 rounded-full bg-purple-700/90 hover:bg-purple-600 transition-shadow shadow-lg text-white"
        >
          {effectiveMuted ? <VolumeX size={20} /> : <Volume size={20} />}
        </button>
      </div>

      <audio ref={audioRef} src={backsound} loop preload="auto" />
    </>
  );
}

export default MusicPlayer;
