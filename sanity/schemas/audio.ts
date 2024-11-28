import { defineField, defineType } from "sanity";
import { FiMusic } from "react-icons/fi";

export default defineType({
  // @ts-expect-error
  icon: FiMusic,
  name: "audio",
  title: "Audio",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Title",
      type: "string",
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
      name: "subtitle",
      title: "Subtitle",
      type: "string",
    }),
    defineField({
      name: "category",
      title: "Category",
      type: "reference",
      to: [{ type: "category" }],
      validation: (Rule) => Rule.required(),
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

  preview: {
    select: {
      title: "title",
      media: "albumArt",
    },
    prepare(selection) {
      return { ...selection };
    },
  },
});
