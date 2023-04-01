import React from "react";

interface TextAreaFieldProps {
  label: string;
  id: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
}

const TextAreaField: React.FC<TextAreaFieldProps> = ({
  label,
  id,
  value,
  onChange,
}) => {
  return (
    <div>
      <label htmlFor={id} className="block font-medium mb-2">
        {label}
      </label>
      <textarea
        id={id}
        value={value}
        className="w-full px-3 py-2 border border-gray-600 rounded shadow-sm focus:outline-none focus:border-blue-500 bg-gray-700 text-white overflow-auto"
        onChange={onChange}
      />
    </div>
  );
};

export default TextAreaField;
