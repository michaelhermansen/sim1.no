import { defineField, defineType } from "sanity";
import { FiMusic } from "react-icons/fi";

export default defineType({
  // @ts-expect-error
  icon: FiMusic,
  name: "music",
  title: "Music",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Title",
      type: "string",
    }),
    defineField({
      name: "description",
      title: "Description",
      type: "text",
    }),
    defineField({
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: "title",
        maxLength: 96,
      },
    }),
    defineField({
      name: "audioFile",
      title: "Audio File",
      type: "file",
    }),
    defineField({
      name: "albumArt",
      title: "Album Art",
      type: "image",
    }),
  ],
});
