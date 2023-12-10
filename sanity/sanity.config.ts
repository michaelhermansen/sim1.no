/**
 * This configuration is used to for the Sanity Studio that’s mounted on the `/app/studio/[[...index]]/page.tsx` route
 */

import { visionTool } from "@sanity/vision";
import { defineConfig } from "sanity";
import { deskTool } from "sanity/desk";

// Go to https://www.sanity.io/docs/api-versioning to learn how API versioning works
import { apiVersion, dataset, projectId } from "./env";
import { schema } from "./schema";
import { FiSettings } from "react-icons/fi";

export default defineConfig({
  title: "SIM1",
  basePath: "/admin",
  projectId,
  dataset,
  // Add and edit the content schema in the './sanity/schema' folder
  schema,
  plugins: [
    deskTool({
      structure: (S) =>
        S.list()
          .title("Content")
          .items([
            // Settings singleton
            S.listItem()
              .title("Settings")
              .id("settings")
              .icon(FiSettings)
              .child(
                S.document().schemaType("settings").documentId("settings")
              ),
            // Rest
            S.documentTypeListItem("music").title("Music"),
            S.documentTypeListItem("film").title("Film"),
          ]),
    }),
    // Vision is a tool that lets you query your content with GROQ in the studio
    // https://www.sanity.io/docs/the-vision-plugin
    visionTool({ defaultApiVersion: apiVersion }),
  ],
});
