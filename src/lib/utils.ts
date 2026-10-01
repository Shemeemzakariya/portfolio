export const cn = (...classes: Array<string | false | null | undefined>) =>
  classes.filter(Boolean).join(" ");

export const isExternal = (href: string) => /^https?:\/\//.test(href);
