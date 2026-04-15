import { MemoryRouter } from "react-router-dom";
import Header from "../components/layout/Header";

export default {
  title: "Layout/Header",
  component: Header,
  decorators: [
    (Story) => (
      <MemoryRouter>
        <Story />
      </MemoryRouter>
    ),
  ],
};

export const Default = {
  args: {
    back: false,
    totalCount: 0,
  },
};
