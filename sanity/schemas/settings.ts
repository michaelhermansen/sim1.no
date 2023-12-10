import { defineField, defineType } from "sanity";

export default defineType({
  name: "settings",
  title: "Settings",
  type: "document",
  fields: [
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
