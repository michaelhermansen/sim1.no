"use client";

import Container from "@/components/Container";
import clsx from "clsx";
import { AnimatePresence, motion } from "motion/react";
import { useSearchParams } from "next/navigation";
import { MdClose } from "react-icons/md";
import { Audio, Video } from "../../../sanity/queries";
import AudioCard from "./AudioCard";
import { useAudioPlayer } from "./useAudioPlayer";
import VideoCard from "./VideoCard";
import { useEffect } from "react";

interface Props {
  groupedEntries: {
    category: { title: string; slug: string };
    entries: (Audio | Video)[];
  }[];
}

export default function Entries({ groupedEntries }: Props) {
  const {
    handlePlayPause,
    currentAudioId,
    audioRef,
    audioTimelineRef,
    setCurrentAudioId,
    handleStop,
  } = useAudioPlayer();

  const searchParams = useSearchParams();
  const filter = searchParams.get("filter");

  let filtered = groupedEntries.filter(
    (group) => group.category.slug === filter
  );

  if (!filter) filtered = groupedEntries;

  useEffect(() => {
    handleStop();
  }, [handleStop, filter]); // 🤫

  return (
    <AnimatePresence mode="wait">
      <motion.div
        className="grid gap-12"
        key={filter}
        initial={{ opacity: 0, x: 16 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: -16 }}
        transition={{ type: "tween", duration: 0.15 }}
      >
        {filtered.map((group) => {
          if (group.entries.length === 0) return null;
          return (
            <div key={group.category.slug}>
              <h2 className="font-wide text-xl mb-4" id={group.category.slug}>
                {group.category.title}
              </h2>
              <div className="grid gap-8">
                {group.entries.map((entry) => (
                  <div key={entry._id}>
                    {entry._type === "audio" ? (
                      <AudioCard
                        title={entry.title}
                        subtitle={entry.subtitle}
                        content={entry.content}
                        imageSrc={entry.albumArt.asset.url}
                        isPlaying={currentAudioId === entry._id}
                        onPlay={() => {
                          console.log("play");
                          handlePlayPause(entry.audioFile.asset.url, entry._id);
                        }}
                      />
                    ) : (
                      <VideoCard
                        title={entry.title}
                        subtitle={entry.subtitle}
                        content={entry.content}
                        embedUrl={`https://www.youtube.com/embed/${getVideoId(
                          entry.youtubeUrl
                        )}`}
                      />
                    )}
                  </div>
                ))}
              </div>
            </div>
          );
        })}
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
      </motion.div>
    </AnimatePresence>
  );
}

function getVideoId(url: string) {
  // Regular expression to match YouTube video ID in various URL formats
  const regExp =
    /^(?:https?:\/\/)?(?:www\.)?(?:youtube\.com\/(?:[^\/\n\s]+\/\S+\/|(?:v|e(?:mbed)?)\/|\S*?[?&]v=)|youtu\.be\/)([a-zA-Z0-9_-]{11})/;
  const match = url.match(regExp);

  // If there is a match, return the video ID, otherwise return null
  return match ? match[1] : null;
}
