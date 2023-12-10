import { Film } from "../../../../sanity/queries";
import FilmCard from "./FilmCard";

function getVideoId(url: string) {
  // Regular expression to match YouTube video ID in various URL formats
  const regExp =
    /^(?:https?:\/\/)?(?:www\.)?(?:youtube\.com\/(?:[^\/\n\s]+\/\S+\/|(?:v|e(?:mbed)?)\/|\S*?[?&]v=)|youtu\.be\/)([a-zA-Z0-9_-]{11})/;
  const match = url.match(regExp);

  // If there is a match, return the video ID, otherwise return null
  return match ? match[1] : null;
}

export default function FilmSection(props: { entries: Film[] }) {
  return (
    <div className="grid gap-12">
      {props.entries.map((entry) => {
        const youtubeVideoId = getVideoId(entry.youtubeUrl);
        if (!youtubeVideoId) return null;

        return (
          <FilmCard
            key={entry._id}
            title={entry.title}
            description={entry.description}
            embedUrl={`https://www.youtube.com/embed/${youtubeVideoId}`}
          />
        );
      })}
    </div>
  );
}
