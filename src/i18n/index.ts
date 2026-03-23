import { en } from "./en";
import { bg } from "./bg";
import { ru } from "./ru";
import { de } from "./de";
import type { Locale, Translations } from "./types";

export type { Locale, Translations };

export const translations: Record<Locale, Translations> = { en, bg, ru, de };

export const localeLabels: Record<Locale, string> = {
  en: "EN",
  bg: "BG",
  ru: "RU",
  de: "DE",
};

export const localeFlagLabels: Record<Locale, string> = {
  en: "🇬🇧 English",
  bg: "🇧🇬 Български",
  ru: "🇷🇺 Русский",
  de: "🇩🇪 Deutsch",
};
