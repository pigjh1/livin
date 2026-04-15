import React from "react";

type ButtonProps = {
  children: React.ReactNode;
  onClick?: () => void;
  variant?: "primary" | "secondary" | "outline" | "danger" | "disabled";
  size?: "sm" | "md" | "lg";
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
  className?: string;
};

export default function Button({
  children,
  onClick,
  variant = "primary",
  size = "md",
  type = "button",
  disabled = false,
  className = "",
}: ButtonProps) {
  const base =
    "w-full rounded-xl border transition-colors duration-200 font-medium flex items-center justify-center";

  const variants = {
    primary:
      "bg-black text-white hover:bg-gray-800 dark:bg-white dark:text-black dark:hover:bg-gray-200 border-black dark:border-white",
    secondary: "bg-secondary text-black border-secondary",
    outline:
      "border-black dark:border-white dark:text-white hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black",
    danger: "bg-red-500 text-white hover:bg-red-600 border-red-500",
    disabled: "bg-gray-200 text-gray-400 border-gray-200 cursor-not-allowed",
  };

  const sizes = {
    sm: "text-sm px-3 py-2",
    md: "text-md px-4 py-3",
    lg: "text-lg px-6 py-4",
  };

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled || variant === "disabled"}
      className={`
        ${base}
        ${variants[disabled ? "disabled" : variant]}
        ${sizes[size]}
        ${className}
      `}
    >
      {children}
    </button>
  );
}
