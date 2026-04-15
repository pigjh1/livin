import { Minus, Plus } from "lucide-react";

type Props = {
  quantity: number;
  onDecrease: () => void;
  onIncrease: () => void;
  min?: number;
  max?: number;
};

function QuantityStepper({
  quantity,
  onDecrease,
  onIncrease,
  min = 1,
  max,
}: Props) {
  return (
    <div className="flex items-center gap-3">
      <button
        onClick={onDecrease}
        aria-label="수량 감소"
        disabled={quantity <= min}
        className="
          w-7 h-7
          border border-gray-200 dark:border-gray-700
          rounded-lg
          hover:border-black dark:hover:border-white
          transition-colors
          disabled:opacity-30 disabled:cursor-not-allowed
          flex items-center justify-center
        "
      >
        <Minus size={14} aria-hidden="true" />
      </button>

      <span
        className="text-md w-4 text-center dark:text-white"
        aria-live="polite"
      >
        {quantity}
      </span>

      <button
        onClick={onIncrease}
        aria-label="수량 증가"
        disabled={max !== undefined ? quantity >= max : false}
        className="
          w-7 h-7
          border border-gray-200 dark:border-gray-700
          rounded-lg
          hover:border-black dark:hover:border-white
          transition-colors
          disabled:opacity-30 disabled:cursor-not-allowed
          flex items-center justify-center
        "
      >
        <Plus size={14} aria-hidden="true" />
      </button>
    </div>
  );
}

export default QuantityStepper;
