import { defineField, defineType } from "sanity";

export default defineType({
  name: "settings",
  title: "Settings",
  type: "document",
  fields: [
    defineField({
      name: "seoTitle",
      title: "SEO title",
      type: "string",
      validation: (Rule) => Rule.required().min(1).max(30),
    }),
    defineField({
      name: "seoDescription",
      title: "SEO description",
      type: "string",
      validation: (Rule) => Rule.required().min(10).max(60),
    }),
    defineField({
      name: "phoneNumber",
      title: "Phone number",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "emailAddress",
      title: "Email address",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
  ],

  preview: {
    prepare() {
      return { title: "Settings" };
    },
  },
});
