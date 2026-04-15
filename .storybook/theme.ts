import { create } from "@storybook/theming";

const Theme = create({
  base: "light", // 또는 'dark'

  colorPrimary: "#9A450C",
  colorSecondary: "#BCAAA4",

  // UI
  // appBg: '#f4f7fc', // 앱 배경
  // appContentBg: '#f7f7f7', // 앱 콘텐츠 배경
  // appBorderColor: '#E3E3E3', // 앱 테두리 색상
  // appBorderRadius: 0, // 앱 테두리 반경

  // Typography
  // fontBase: "Pretendard, 'Malgun Gothic', '맑은 고딕', sans-serif",
  // fontCode: "monospace",

  // Text colors
  // textColor: '#000000',
  // textInverseColor: '#ffffff',

  // Toolbar
  // barTextColor: '#FFFFFF',
  // barSelectedColor: '#1EA7FD',
  // barBg: '#1EA7FD',

  // Form colors
  // inputBg: '#FFFFFF',
  // inputBorder: '#E3E3E3',
  // inputTextColor: '#000000',
  // inputBorderRadius: 4,

  // Brand Info
  brandTitle: "LIVN",
  brandUrl: "https://livn-rose.vercel.app/",
  brandImage: "https://livn-rose.vercel.app/images/logo.svg",
  brandTarget: "_blank",
});

export default Theme;
