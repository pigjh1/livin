import type { Meta, StoryObj } from "@storybook/react";
import { MemoryRouter } from "react-router-dom";
import ProductRow from "../components/product/ProductRow";
import products from "../../src/data/products.json";

const meta: Meta<typeof ProductRow> = {
  title: "Components/ProductRow",
  component: ProductRow,
  decorators: [
    (Story) => (
      <MemoryRouter>
        <div className="w-full max-w-2xl">
          <Story />
        </div>
      </MemoryRouter>
    ),
  ],
  parameters: {
    layout: "centered",
  },
};

export default meta;

type Story = StoryObj<typeof ProductRow>;

export const OneItem: Story = {
  render: () => (
    <div className="space-y-2">
      <ProductRow product={products[0]} />
    </div>
  ),
};

export const TwoItems: Story = {
  render: () => (
    <div className="space-y-2">
      {products.slice(0, 2).map((product) => (
        <ProductRow key={product.id} product={product} />
      ))}
    </div>
  ),
};

export const ThreeItems: Story = {
  render: () => (
    <div className="space-y-2">
      {products.slice(0, 3).map((product) => (
        <ProductRow key={product.id} product={product} />
      ))}
    </div>
  ),
};
