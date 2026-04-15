import type { Preview } from "@storybook/react";
import "../src/index.css";

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    backgrounds: {
      default: "light",
      values: [
        { name: "light", value: "#FFFFFF" },
        { name: "dark", value: "#191a1b" },
      ],
    },
    viewport: {
      viewports: {
        mobile: {
          name: "Mobile",
          styles: {
            width: "360px",
            height: "640px",
          },
        },
        tablet: {
          name: "Tablet",
          styles: {
            width: "768px",
            height: "1040px",
          },
        },
        laptop: {
          name: "Laptop",
          styles: {
            width: "1366px",
            height: "768px",
          },
        },
        desktop: {
          name: "Desktop",
          styles: {
            width: "1600px",
            height: "1200px",
          },
        },
        desktopFHD: {
          name: "DesktopFHD",
          styles: {
            width: "1920px",
            height: "1080px",
          },
        },
      },
    },
    html: {
      prettier: {
        tabWidth: 2,
        bracketSameLine: true,
      },
    },
    options: {
      storySort: {
        order: [
          "Intro",
          "Foundation",
          "Layout",
          "UI",
          "Component",
          "Element",
          "Animation",
          "Page",
          "Guideline",
        ],
      },
    },
  },
};

export default preview;
