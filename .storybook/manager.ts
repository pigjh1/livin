import { addons } from "storybook/manager-api";
import Theme from "./theme";

addons.setConfig({
  theme: Theme,
  toolbar: {
    title: { hidden: false },
    zoom: { hidden: false },
    eject: { hidden: false },
    copy: { hidden: false },
    fullscreen: { hidden: false },
  },
});
