import { defineField, defineType } from "sanity";
import { FiMusic } from "react-icons/fi";

export default defineType({
  icon: FiMusic,
  name: "music",
  title: "Music",
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
      name: "albumArt",
      title: "Album art",
      type: "image",
      options: {
        hotspot: false,
      },
      fields: [
        {
          name: "alt",
          type: "string",
          title: "Alternative text",
        },
      ],
    }),
    defineField({
      type: "file",
      name: "audioFile",
      title: "Audio file",
      options: {
        accept: "audio/*",
      },
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
