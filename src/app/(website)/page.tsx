import Container from "@/components/Container";
import { client } from "../../../sanity/lib/client";
import {
  Audio,
  audioQuery,
  Settings,
  settingsQuery,
  Video,
  videoQuery,
} from "../../../sanity/queries";
import Entries from "./Entries";
import { sections } from "@/lib/sections";
import { Suspense } from "react";

export default async function Home() {
  const audioEntries = await client.fetch<Audio[]>(audioQuery);
  const videoEntries = await client.fetch<Video[]>(videoQuery);
  const settings = await client.fetch<Settings>(settingsQuery);
  const allEntries = [...audioEntries, ...videoEntries];

  const groupedEntries = sections.map((section) => ({
    category: { title: section.title, slug: section.slug },
    entries: categoryGroup(section.slug, allEntries),
  }));

  return (
    <div className="grid gap-8 pt-8">
      <Container>
        <Entries groupedEntries={groupedEntries} />
      </Container>

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

function categoryGroup(categorySlug: string, entries: (Audio | Video)[]) {
  return entries
    .filter((entry) => entry.category.slug.current === categorySlug)
    .toSorted(
      (a, b) =>
        new Date(b._updatedAt).getTime() - new Date(a._updatedAt).getTime()
    );
}
