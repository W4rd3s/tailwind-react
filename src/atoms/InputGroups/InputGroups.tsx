import React from 'react';
import { ExclamationCircleIcon } from '@heroicons/react/20/solid';

export type Props = {
  className?: string;
  label?: string;
  placeholder?: string;
  type?: React.HTMLInputTypeAttribute;
  error?: boolean | string;
};

export default function InputGroups({
  className,
  label: labelStr,
  placeholder,
  type,
  error,
}: Props) {
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
          className={`block w-full rounded-md border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm ${
            error &&
            'border-red-300 pr-10 text-red-900 placeholder-red-300 focus:border-red-500 focus:ring-red-500'
          }`}
          placeholder={placeholder}
          aria-invalid={error ? 'true' : 'false'}
        />
        {error && (
          <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3">
            <ExclamationCircleIcon className="h-5 w-5 text-red-500" aria-hidden="true" />
          </div>
        )}
      </div>
      {error && typeof error === 'string' ? (
        <p className="mt-2 text-sm text-red-600" id="email-error">
          {error}
        </p>
      ) : null}
    </div>
  );
}

InputGroups.defaultProps = {
  className: '',
  label: undefined,
  placeholder: undefined,
  type: 'text',
  error: false,
};
