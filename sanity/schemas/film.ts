import { defineField, defineType } from "sanity";
import { FiFilm } from "react-icons/fi";

export default defineType({
  icon: FiFilm,
  name: "film",
  title: "Film",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Title",
      type: "string",
      validation: (Rule) => Rule.required().min(1).max(30),
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
      name: "description",
      title: "Description",
      type: "string",
      validation: (Rule) => Rule.required().min(10).max(60),
    }),
    defineField({
      type: "url",
      name: "youtubeUrl",
      title: "YouTube URL",
    }),
  ],

  preview: {
    select: {
      title: "title",
    },
    prepare(selection) {
      return { ...selection };
    },
  },
});
