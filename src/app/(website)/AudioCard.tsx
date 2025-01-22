"use client";

import { PortableText } from "@portabletext/react";
import Image from "next/image";
import { MdInfoOutline, MdPause, MdPlayArrow } from "react-icons/md";

interface Props {
  title: string;
  subtitle: string;
  content: any;
  imageSrc: string;
  isPlaying: boolean;
  onPlay: () => void;
}

export default function AudioCard(props: Props) {
  return (
    <div className="grid grid-cols-3 gap-4 items-start">
      <div className="border border-white/10 relative">
        <button onClick={props.onPlay} className="block">
          <div className="absolute z-20 inset-0 grid place-items-center">
            {props.isPlaying ? (
              <MdPause size="3rem" />
            ) : (
              <MdPlayArrow size="3rem" />
            )}
          </div>

          <Image
            priority
            alt="Dagen er din cover"
            src={props.imageSrc}
            width={300}
            height={300}
          />
        </button>
      </div>

      <div className="col-span-2 pt-2">
        <h3 className="font-wide text-lg leading-tight pb-1">{props.title}</h3>
        <p className="font-condensed">{props.subtitle}</p>
        {props.content && props.content.length !== 0 && (
          <div className="flex gap-1.5 pt-1">
            <MdInfoOutline size={"1.3em"} className="shrink-0" />
            <div className="prose prose-invert prose-p:mb-0.5 prose-p:first-of-type:mt-0 font-condensed leading-snug">
              <PortableText value={props.content} />
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
