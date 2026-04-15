import type { Meta, StoryObj } from "@storybook/react";
import { useState } from "react";
import Input from "../components/ui/Input";

const meta: Meta<typeof Input> = {
  title: "UI/Input",
  component: Input,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof Input>;

export const Default: Story = {
  render: () => {
    const [value, setValue] = useState("");

    return (
      <div className="w-80">
        <Input
          label="이름"
          name="name"
          value={value}
          placeholder="이름을 입력하세요"
          onChange={(e) => setValue(e.target.value)}
        />
      </div>
    );
  },
};

export const Required: Story = {
  render: () => {
    const [value, setValue] = useState("");

    return (
      <div className="w-80">
        <Input
          label="이메일"
          name="email"
          required
          value={value}
          placeholder="이메일을 입력하세요"
          onChange={(e) => setValue(e.target.value)}
        />
      </div>
    );
  },
};

export const Error: Story = {
  render: () => {
    const [value, setValue] = useState("");

    return (
      <div className="w-80">
        <Input
          label="전화번호"
          name="phone"
          value={value}
          placeholder="전화번호를 입력하세요"
          error="전화번호 형식이 올바르지 않습니다"
          onChange={(e) => setValue(e.target.value)}
        />
      </div>
    );
  },
};

export const Password: Story = {
  render: () => {
    const [value, setValue] = useState("");

    return (
      <div className="w-80">
        <Input
          label="비밀번호"
          name="password"
          type="password"
          value={value}
          placeholder="비밀번호를 입력하세요"
          onChange={(e) => setValue(e.target.value)}
        />
      </div>
    );
  },
};
