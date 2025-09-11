import { config, fields, collection, singleton } from "@keystatic/core";

export default config({
  storage: import.meta.env.DEV
    ? { kind: "local" }
    : {
      kind: "github",
      repo: {
        owner: "crichgriffin",
        name: "crg_website",
      },
    },
  collections: {
    events: collection({
      label: "Events",
      slugField: "title",
      path: "src/content/events/*",
      schema: {
        title: fields.slug({ name: { label: "Event name" } }),
        startDate: fields.date({
          label: "Date",
          validation: { isRequired: true },
        }),
        endDate: fields.date({
          label: "End Date",
          validation: { isRequired: false },
          description:
            "If the event has multiple days, add the end date here, otherwise leave blank",
        }),
        link: fields.url({
          label: "Link",
          description:
            "Link to the event website, including protocol (https://)",
        }),
        band: fields.slug({
          name: {
            label: "Band",
            validation: { isRequired: false },
          }
        }),
        note: fields.text({ label: "Note" }),
      },
    }),
  },

});
