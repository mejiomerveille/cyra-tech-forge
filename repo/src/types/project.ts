export type ProjectCategory = "Software" | "Connected hardware" | "Design";

export type Project = {
  id: number;
  name: string;
  description: string;
  category: ProjectCategory;
  image: string;
  slug: string;
  imageAlt: string;

};
