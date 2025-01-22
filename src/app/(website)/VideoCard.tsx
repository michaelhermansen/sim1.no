import { PortableText } from "@portabletext/react";
import { MdInfoOutline } from "react-icons/md";

interface Props {
  title: string;
  subtitle: string;
  content: any;
  embedUrl: string;
}

export default function VideoCard(props: Props) {
  return (
    <div className="grid gap-3">
      <iframe
        className="w-full border border-white/10"
        width="800"
        height="200"
        src={props.embedUrl}
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen={true}
      />
      <div>
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
