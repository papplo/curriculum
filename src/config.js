export const SITE = {
  title:
    "Pablo Anttila — Frontend Developer specialized in JavaScript for Web and Mobile.",
  description:
    "Connect with Pablo Anttila, discover recent projects and blog posts. This portfolio site was build using Astro SSG and React deployed with CI tools to Github Pages.",
  defaultLanguage: "se-SV",
};

export const KNOWN_LANGUAGES = {
  sv: "Svenska",
  en: "English",
};

export const MAIN_NAV = {
  sv: [
    { text: "Uppdrag", link: "/sv/assignments" },
    { text: "Anteckningar", link: "/sv/devlog" },
    { text: "Switch to English", link: "/en/" },
  ],
  en: [
    { text: "Assignments", link: "/en/assignments" },
    { text: "Devlog", link: "/en/devlog" },
    { text: "På Svenska", link: "/sv/" },
  ],
};

// experimental feature -> get traduced strings, or return the term that was asked...
const TRADUCE = {
  common: {
    see_more: {
      en: "Read more about",
      sv: "Se mer om",
    },
    world: {
      en: "world",
      sv: null,
    },
  },
  assignment: {
    my_role: {
      en: "My role",
      sv: "Min roll",
    },
    tech_stack: {
      en: "Tech Stack",
      sv: "Teknik som används",
    },
  },
};

export const T = (page, term, lang) =>
  TRADUCE[page][term][lang] ? TRADUCE[page][term][lang] : TRADUCE[page][term];
