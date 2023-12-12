import type { Template } from "tinacms";

const introduction: Template = {
  name: "introduction",
  label: "Introduction",
  fields: [
    {
      type: "string",
      name: "title",
      required: true,
      label: "Titre",
    },
    {
      type: "string",
      name: "description",
      label: "Paragraphe d'introduction",
    },
    {
      type: "image",
      name: "banner",
      label: "Bannière",
    },
    {
      type: "string",
      name: "bannerAlt",
      label: "Texte alternatif pour la bannière",
      ui: {
        description: "Obligatoire si une bannière est ajoutée",
      },
    },
    {
      type: "rich-text",
      name: "quotation",
      label: "Citation",
      ui: {
        description:
          "Séparer la citation de l'auteur avec un point pour générer un retour à la ligne",
      },
    },
  ],
};

export default introduction;
