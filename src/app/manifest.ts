import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Aindrila Bhowmik — Travel & Lifestyle",
    short_name: "Aindrila",
    description:
      "Travel enthusiast, MBA from NIT Trichy, Business Team Lead at Accenture. Exploring the world one destination at a time.",
    start_url: "/",
    display: "standalone",
    background_color: "#faf9f7",
    theme_color: "#352520",
    icons: [
      {
        src: "/icon.svg",
        sizes: "any",
        type: "image/svg+xml",
      },
    ],
  };
}
