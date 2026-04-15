import React from "react";

type InputProps = {
  label?: string;
  name: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
  type?: string;
  required?: boolean;
  error?: string;
};

export default function Input({
  label,
  name,
  value,
  onChange,
  placeholder,
  type = "text",
  required = false,
  error,
}: InputProps) {
  return (
    <div>
      {label && (
        <label
          htmlFor={name}
          className="text-sm font-medium dark:text-white block mb-2"
        >
          {label}
          {required && <span className="text-brand ml-1">*</span>}
        </label>
      )}

      <input
        id={name}
        name={name}
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className={`w-full text-sm bg-gray-50 dark:bg-dark-card dark:text-white border rounded-xl px-4 py-3 outline-none transition-colors
          ${
            error
              ? "border-red-400"
              : "border-gray-200 dark:border-gray-700 focus:border-black dark:focus:border-white"
          }`}
      />

      {error && <p className="text-red-400 text-xs mt-1">{error}</p>}
    </div>
  );
}
