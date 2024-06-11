export type SiteConfig = {
  name: string;
  author: string;
  description: string;
  links: {
    github: string;
    discord: string;
    instagram: string;
    gmail: string;
  };
};

export interface ArticleMetadata {
  title: string;
  date: string;
  subtitle: string;
  slug: string;
}

type Languages = {
  name: string;
  usage: number;
  color: string;
};
