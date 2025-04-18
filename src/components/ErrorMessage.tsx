import React from 'react';

export default function ErrorMessage({ message }: { message: string }) {
  return (
    <div
      className="bg-red-100 border border-red-400 text-red-700 px-3 py-2 sm:px-4 sm:py-3 rounded mb-4 text-sm sm:text-base"
      role="alert"
    >
      <span className="block font-semibold">{message}</span>
    </div>
  );
}
