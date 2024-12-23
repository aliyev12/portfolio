export const HOMEPAGE_PROJECTS_LIMIT = 7;
export const PROJECTS_PER_PAGE = 6;

export enum ETemplate {
  contactFollowUp = "contact-follow-up",
  contactNotification = "contact-notification",
}

export interface IDynamicVal {
  placeholder: string;
  value: string;
}

export const NON_CAPITALIZABLE_WORDS = [
  "and",
  "or",
  "the",
  "a",
  "an",
  "of",
  "for",
  "in",
  "is",
  "it",
  "to",
  "at",
  "by",
  "from",
  "on",
  "with",
  "but",
  "so,",
  "yet",
];
