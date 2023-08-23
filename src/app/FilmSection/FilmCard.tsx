interface Props {
  title: string;
  description: string;
  embedUrl: string;
}

export default function FilmCard(props: Props) {
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
        <p className="font-condensed">{props.description}</p>
      </div>
    </div>
  );
}
