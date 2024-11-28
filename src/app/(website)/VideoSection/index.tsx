import { Video } from "../../../../sanity/queries";
import VideoCard from "./VideoCard";
import Container from "@/components/Container";

function getVideoId(url: string) {
  // Regular expression to match YouTube video ID in various URL formats
  const regExp =
    /^(?:https?:\/\/)?(?:www\.)?(?:youtube\.com\/(?:[^\/\n\s]+\/\S+\/|(?:v|e(?:mbed)?)\/|\S*?[?&]v=)|youtu\.be\/)([a-zA-Z0-9_-]{11})/;
  const match = url.match(regExp);

  // If there is a match, return the video ID, otherwise return null
  return match ? match[1] : null;
}

type Props = {
  entries: Video[];
};

export default function VideoSection(props: Props) {
  return (
    <Container className="grid gap-12">
      {props.entries.map((entry) => {
        const youtubeVideoId = getVideoId(entry.youtubeUrl);
        if (!youtubeVideoId) return null;

        return (
          <VideoCard
            key={entry._id}
            title={entry.title}
            subtitle={entry.subtitle}
            embedUrl={`https://www.youtube.com/embed/${youtubeVideoId}`}
          />
        );
      })}
    </Container>
  );
}
