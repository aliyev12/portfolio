export const SITE_TITLE = "Abdul Aliyev Portfolio";
export const SITE_DESCRIPTION =
  "Portfolio of Abdul Aliyev - Full-Stack Developer and Problem Solver";
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
