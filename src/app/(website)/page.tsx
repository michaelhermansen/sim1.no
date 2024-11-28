import { client } from "../../../sanity/lib/client";
import VideoSection from "./VideoSection";
import AudioSection from "./AudioSection";
import Container from "@/components/Container";
import {
  Settings,
  Video,
  Audio,
  settingsQuery,
  videoQuery,
  audioQuery,
} from "../../../sanity/queries";
import Image from "next/image";

export default async function Home() {
  const audioEntries = await client.fetch<Audio[]>(audioQuery);
  const videoEntries = await client.fetch<Video[]>(videoQuery);
  const settings = await client.fetch<Settings>(settingsQuery);

  console.log({ audioEntries, videoEntries });

  return (
    <div className="grid gap-8 pt-8">
      <Container>
        <h2 className="text-xl font-wide pb-4">Audio</h2>
        <AudioSection entries={audioEntries} />
      </Container>

      <div className="relative pt-14">
        <Image
          src="/assets/film.png"
          alt=""
          height={140}
          width={390}
          className="absolute top-0 left-1/2 -translate-x-1/2 -z-10"
        />
        <Container>
          <h2 className="text-xl font-wide pb-4 dark-stroke">Video</h2>
          <VideoSection entries={videoEntries} />
        </Container>
      </div>

      <footer className="py-16">
        <Container>
          <h2 className="font-wide pb-2 text-lg">Contact</h2>
          <div className="font-condensed">
            <a href={`tel:${settings.phoneNumber.replaceAll(/\s/g, "")}`}>
              {settings.phoneNumber}
            </a>
            <br />
            <a href={`mailto:${settings.emailAddress}`}>
              {settings.emailAddress}
            </a>
          </div>
        </Container>
      </footer>
    </div>
  );
}
