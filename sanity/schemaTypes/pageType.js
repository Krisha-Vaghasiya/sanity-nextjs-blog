export const pageType = {
  name: "page",
  title: "Page",
  type: "document",

  fields: [
    {
      name: "title",
      title: "Page Title",
      type: "string",
    },
    {
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: "title",
        maxLength: 96,
      },
    },
  ],
};