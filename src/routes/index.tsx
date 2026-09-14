import { createFileRoute } from "@tanstack/react-router";
import { HomePage } from "@/components/cyra/HomePage";

const title = "Cyra Tech — Digital Solutions & Engineering";
const description = "Cyra Tech combines software development, hardware engineering and IoT to build reliable technology solutions for the real world.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: HomePage,
});