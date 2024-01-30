import path from "path";
import { getMDXData } from "./content";

type Subject = "front-end" | "back-end" | "full-stack" | "devops";

export const getAllSections = ({
  subject,
  includeContent = false,
}: {
  subject: Subject;
  includeContent?: boolean;
}) => {
  const sections = getMDXData(path.join(process.cwd(), "content", subject), {
    content: includeContent,
  });
  return sections
    .sort((a, b) => (a.slug > b.slug ? 1 : -1))
    .map((section) => ({ ...section, slug: section.slug.split("_")[1] }));
};

export const getSectionBySlug = ({
  slug,
  subject,
}: {
  slug: string;
  subject: Subject;
}) => {
  const sections = getMDXData(path.join(process.cwd(), "content", subject), {
    content: true,
  });
  return sections.find((section) => section.slug.split("_")[1] === slug);
};
