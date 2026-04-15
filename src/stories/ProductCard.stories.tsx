import type { Meta, StoryObj } from "@storybook/react";
import { MemoryRouter } from "react-router-dom";
import ProductCard from "../components/product/ProductCard";
import products from "../../src/data/products.json";

const meta: Meta<typeof ProductCard> = {
  title: "Components/ProductCard",
  component: ProductCard,
  decorators: [
    (Story) => (
      <MemoryRouter>
        <div className="w-full max-w-sm">
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

type Story = StoryObj<typeof ProductCard>;

export const Default: Story = {
  render: () => <ProductCard product={products[0]} />,
};

export const Grid: Story = {
  render: () => (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  ),
};
