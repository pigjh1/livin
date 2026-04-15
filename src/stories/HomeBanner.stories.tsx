import type { Meta, StoryObj } from "@storybook/react";
import HomeBanner from "../components/home/HomeBanner";

const meta: Meta<typeof HomeBanner> = {
  title: "Components/HomeBanner",
  component: HomeBanner,
  parameters: {
    layout: "fullscreen",
  },
};

export default meta;

type Story = StoryObj<typeof HomeBanner>;

export const Default: Story = {
  args: {
    title: "A Calm Living Space",
    description: "자연스러운 소재와 따뜻한 분위기의 공간",
    image: "/images/banner-01.webp",
    caption: "LIVN Spring Collection",
  },
};

export const WithoutCaption: Story = {
  args: {
    title: "Minimal Lifestyle",
    image: "/images/banner-02.webp",
  },
};
