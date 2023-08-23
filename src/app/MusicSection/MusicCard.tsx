import Image from "next/image";
import { MdPause, MdPlayArrow } from "react-icons/md";

interface Props {
  title: string;
  description: string;
  imageSrc: string;
  isPlaying: boolean;
  onPlay: () => void;
}

export default function MusicCard(props: Props) {
  return (
    <div className="grid grid-cols-3 gap-4">
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
        <p className="font-condensed">{props.description}</p>
      </div>
    </div>
  );
}
