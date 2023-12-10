import Container from "@/components/Container";
import FilmSection from "./FilmSection";
import MusicSection from "./MusicSection";
import Image from "next/image";
import { client } from "../../../sanity/lib/client";
import {
  Film,
  Music,
  Settings,
  filmQuery,
  musicQuery,
  settingsQuery,
} from "../../../sanity/queries";

export default async function Home() {
  const musicEntries = await client.fetch<Music[]>(musicQuery);
  const filmEntries = await client.fetch<Film[]>(filmQuery);
  const settings = await client.fetch<Settings>(settingsQuery);

  return (
    <div className="grid gap-8 pt-8">
      <Container>
        <h2 className="text-xl font-wide pb-4">Music</h2>
        <MusicSection entries={musicEntries} />
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
          <h2 className="text-xl font-wide pb-4 dark-stroke">Film</h2>
          <FilmSection entries={filmEntries} />
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
