import type { Meta, StoryObj } from "@storybook/react";
import { MemoryRouter } from "react-router-dom";
import SkeletonCard from "../components/SkeletonCard";

const meta: Meta<typeof SkeletonCard> = {
  title: "Components/SkeletonCard",
  component: SkeletonCard,

  decorators: [
    (Story) => (
      <MemoryRouter>
        <div className="w-full max-w-lg">
          <Story />
        </div>
      </MemoryRouter>
    ),
  ],
};

export default meta;

type Story = StoryObj<typeof SkeletonCard>;

export const Default: Story = {};
