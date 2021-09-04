import { KNOWN_LANGUAGES } from "./config";

export const KNOWN_LANGUAGE_CODES = Object.keys(KNOWN_LANGUAGES);

const stripSlashes = (path) => path.match(/\/([a-z]{2}-?[A-Z]{0,2})\//);

export function getLanguageFromUrl(pathname) {
  const langCodeMatch = stripSlashes(pathname);
  return langCodeMatch ? langCodeMatch[1] : "sv";
}

export function getAlternateLanguages(currentLang) {
  if (!currentLang) return undefined;
  const filterKnownLanguages = Object.keys(KNOWN_LANGUAGES).filter(
    (langCode) => {
      return langCode !== currentLang ? true : false;
    }
  );

  return filterKnownLanguages;
}
