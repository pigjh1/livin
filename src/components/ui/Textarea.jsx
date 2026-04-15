export default function Textarea({
  label,
  name,
  value,
  onChange,
  placeholder,
  rows = 3,
}) {
  return (
    <div>
      {label && (
        <label
          htmlFor={name}
          className="text-sm font-medium dark:text-white block mb-2"
        >
          {label}
        </label>
      )}

      <textarea
        id={name}
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        rows={rows}
        className="w-full text-sm bg-gray-50 dark:bg-dark-card dark:text-white border border-gray-200 dark:border-gray-700 rounded-xl px-4 py-3 outline-none focus:border-black dark:focus:border-white transition-colors resize-none"
      />
    </div>
  );
}
