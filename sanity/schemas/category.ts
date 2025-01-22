import { defineField, defineType } from "sanity";
import { FiTag } from "react-icons/fi";

export default defineType({
  // @ts-ignore
  icon: FiTag,
  name: "category",
  title: "Category",
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
  ],
  preview: {
    select: {
      title: "title",
    },
  },
});
