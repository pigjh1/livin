import type { Meta, StoryObj } from "@storybook/react";
import { useState } from "react";
import QuantityStepper from "../components/product/QuantityStepper";

const meta: Meta<typeof QuantityStepper> = {
  title: "Components/QuantityStepper",
  component: QuantityStepper,
  parameters: {
    layout: "centered",
  },
};

export default meta;

type Story = StoryObj<typeof QuantityStepper>;

export const Default: Story = {
  render: () => {
    const [quantity, setQuantity] = useState(1);

    return (
      <QuantityStepper
        quantity={quantity}
        onDecrease={() => setQuantity((q) => q - 1)}
        onIncrease={() => setQuantity((q) => q + 1)}
      />
    );
  },
};

export const WithMax: Story = {
  render: () => {
    const [quantity, setQuantity] = useState(1);

    return (
      <QuantityStepper
        quantity={quantity}
        min={1}
        max={5}
        onDecrease={() => setQuantity((q) => q - 1)}
        onIncrease={() => setQuantity((q) => q + 1)}
      />
    );
  },
};
