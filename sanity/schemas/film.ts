import { defineField, defineType } from "sanity";
import { FiFilm } from "react-icons/fi";

export default defineType({
  // @ts-ignore
  icon: FiFilm,
  name: "film",
  title: "Film",
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
      name: "youtubeUrl",
      title: "YouTube URL",
      type: "url",
    }),
  ],
});
