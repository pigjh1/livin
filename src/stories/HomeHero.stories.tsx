import type { Meta, StoryObj } from "@storybook/react";
import HomeHero from "../components/home/HomeHero";

const slides = [
  {
    tag: "NEW COLLECTION",
    title: "Live Your Style",
    desc: "트렌디한 라이프스타일을 위한 컬렉션",
    video: {
      sm: "/images/hero-video-sm.mp4",
      md: "/images/hero-video-md.mp4",
      lg: "/images/hero-video-lg.mp4",
    },
  },
  {
    tag: "SPRING SALE",
    title: "Fresh Start",
    desc: "봄 시즌 특별 할인",
    img: {
      sm: "/images/hero-01-sm.avif",
      md: "/images/hero-01-md.avif",
      lg: "/images/hero-01-lg.avif",
    },
  },
  {
    tag: "LIMITED",
    title: "Only Today",
    desc: "오늘만 만나볼 수 있는 아이템",
    img: {
      sm: "/images/hero-02-sm.avif",
      md: "/images/hero-02-md.avif",
      lg: "/images/hero-02-lg.avif",
    },
  },
  {
    tag: "COMING",
    title: "New Arrival",
    desc: "곧 공개됩니다",
  },
];

const meta: Meta<typeof HomeHero> = {
  title: "Components/HomeHero",
  component: HomeHero,
  parameters: {
    layout: "fullscreen",
  },
};

export default meta;

type Story = StoryObj<typeof HomeHero>;

export const Default: Story = {
  args: {
    slides,
  },
};

export const ImageSlides: Story = {
  args: {
    slides: slides.filter((s) => s.img),
  },
};

export const VideoSlide: Story = {
  args: {
    slides: [slides[0]],
  },
};
