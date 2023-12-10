"use client";

import { useEffect, useRef, useState } from "react";
import MusicCard from "./MusicCard";
import clsx from "clsx";
import { MdClose } from "react-icons/md";
import { IconContext } from "react-icons";
import Container from "@/components/Container";
import { Music } from "../../../../sanity/queries";

let prevAudioId: string | undefined;

export default function MusicSection(props: { entries: Music[] }) {
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

  return (
    <IconContext.Provider value={{ size: "2.5rem", className: "fill-white" }}>
      <div className="grid gap-4">
        {props.entries.map((entry) => (
          <MusicCard
            key={entry._id}
            title={entry.title}
            description={entry.description}
            imageSrc={entry.albumArt.asset.url}
            isPlaying={currentAudioId === entry._id}
            onPlay={() => handlePlayPause(entry.audioFile.asset.url, entry._id)}
          />
        ))}
      </div>

      <audio className="hidden" ref={audioRef} />

      <div
        className={clsx("fixed z-50 bottom-0 left-0 right-0 transition-all", {
          "translate-y-full opacity-0": !currentAudioId,
        })}
      >
        <Container className="bg-black py-4 border-t border-white/10">
          <div className="flex gap-2">
            <input
              ref={audioTimelineRef}
              type="range"
              max="100"
              className="flex-1 bg-white"
              onChange={(e) => {
                if (!audioRef.current) return;
                audioRef.current.currentTime = Number(e.target.value);
              }}
            />
            <button
              onClick={() => {
                audioRef.current?.pause();
                setCurrentAudioId(null);
              }}
            >
              <MdClose />
            </button>
          </div>
        </Container>
      </div>
    </IconContext.Provider>
  );
}
