import type { Meta, StoryObj } from "@storybook/react";
import { useState } from "react";
import Textarea from "../components/ui/Textarea";

const meta: Meta<typeof Textarea> = {
  title: "UI/Textarea",
  component: Textarea,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof Textarea>;

export const Default: Story = {
  render: () => {
    const [value, setValue] = useState("");

    return (
      <div className="w-80">
        <Textarea
          label="메시지"
          name="message"
          value={value}
          placeholder="내용을 입력하세요"
          onChange={(e) => setValue(e.target.value)}
        />
      </div>
    );
  },
};

export const Rows: Story = {
  render: () => {
    const [value, setValue] = useState("");

    return (
      <div className="w-80">
        <Textarea
          label="리뷰"
          name="review"
          rows={5}
          value={value}
          placeholder="리뷰를 작성하세요"
          onChange={(e) => setValue(e.target.value)}
        />
      </div>
    );
  },
};
