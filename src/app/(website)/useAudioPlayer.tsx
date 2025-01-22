"use client";

import { useEffect, useRef, useState } from "react";

let prevAudioId: string | undefined;

export function useAudioPlayer() {
  const [currentAudioId, setCurrentAudioId] = useState<string | null>(null);
  const animationRef = useRef<number | null>(null);
  const audioRef = useRef<HTMLAudioElement>(null);
  const audioTimelineRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    const audio = audioRef.current;
    const audioTimeline = audioTimelineRef.current;

    function updateTime() {
      if (!currentAudioId || !audio || !audioTimeline) {
        return;
      }

      audioTimeline.max = String(audioRef.current.duration);
      audioTimeline.value = String(audioRef.current.currentTime);
      animationRef.current = requestAnimationFrame(updateTime);
    }
    animationRef.current = requestAnimationFrame(updateTime);

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [currentAudioId]);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    function resume() {
      if (prevAudioId) setCurrentAudioId(prevAudioId);
    }
    function pause() {
      setCurrentAudioId(null);
    }

    audio.addEventListener("play", resume);
    audio.addEventListener("pause", pause);

    return () => {
      audio.removeEventListener("play", resume);
      audio.removeEventListener("pause", pause);
    };
  }, []);

  function handlePlayPause(audioSrc: string, id: string) {
    const audio = audioRef.current;
    if (!audio) return;

    if (id === prevAudioId && !audio.paused) {
      audio.pause();
      setCurrentAudioId(null);
      return;
    }

    if (id !== prevAudioId) {
      audio.src = audioSrc;
    }

    if (audio?.paused) {
      audio.play();
      setCurrentAudioId(id);
    } else {
      audio.pause();
      setCurrentAudioId(null);
    }

    prevAudioId = id;
  }

  function handleStop() {
    const audio = audioRef.current;
    if (!audio) return;

    audio.pause();
    audio.currentTime = 0;
    setCurrentAudioId(null);
    prevAudioId = undefined;
  }

  return {
    handlePlayPause,
    handleStop,
    currentAudioId,
    audioRef,
    audioTimelineRef,
    setCurrentAudioId,
  };
}
