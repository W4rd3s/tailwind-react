import React from 'react';

export type Props = {
  className?: string;
  label?: string;
  placeholder?: string;
  type?: React.HTMLInputTypeAttribute;
};

export default function InputGroups({ className, label: labelStr, placeholder, type }: Props) {
  return (
    <div className={className}>
      {labelStr && (
        <label
          htmlFor={`InputLabel-${labelStr}`}
          className="block text-sm font-medium text-gray-700"
        >
          {labelStr}
        </label>
      )}

      <div className="relative mt-1 rounded-md shadow-sm">
        <input
          type={type}
          name="price"
          id={`InputLabel-${labelStr}`}
          className="block w-full rounded-md border-gray-300 pr-12 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
          placeholder={placeholder}
        />
      </div>
    </div>
  );
}

InputGroups.defaultProps = {
  className: '',
  label: undefined,
  placeholder: undefined,
  type: 'text',
};
