import { fn } from "storybook/test";
import Button from "../components/ui/Button";

export default {
  title: "UI/Button",
  component: Button,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    variant: {
      control: "select",
      options: [
        "primary",
        "secondary",
        "outline",
        "ghost",
        "danger",
        "disabled",
      ],
    },
    size: {
      control: "select",
      options: ["sm", "md", "lg"],
    },
    disabled: { control: "boolean" },
    children: { control: "text" },
    onClick: { action: "clicked" },
  },
};

export const Primary = {
  args: {
    variant: "primary",
    size: "md",
    children: "Primary Button",
    onClick: fn(),
  },
};

export const Secondary = {
  args: {
    variant: "secondary",
    size: "md",
    children: "Secondary Button",
    onClick: fn(),
  },
};

export const Outline = {
  args: {
    variant: "outline",
    size: "md",
    children: "Outline Button",
    onClick: fn(),
  },
};

export const Danger = {
  args: {
    variant: "danger",
    size: "md",
    children: "Danger Button",
    onClick: fn(),
  },
};

export const Disabled = {
  args: {
    variant: "disabled",
    size: "md",
    disabled: true,
    children: "Disabled Button",
  },
};

export const Sizes = {
  render: (args) => (
    <div className="flex flex-col gap-3 w-[300px]">
      <Button {...args} size="sm">
        Small Button
      </Button>
      <Button {...args} size="md">
        Medium Button
      </Button>
      <Button {...args} size="lg">
        Large Button
      </Button>
    </div>
  ),
  args: {
    variant: "primary",
    onClick: fn(),
  },
};
