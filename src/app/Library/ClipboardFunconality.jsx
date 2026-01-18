"use client";
import { useState } from "react";

export default function ClipboardFunconality({ text }) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);

      setTimeout(() => {
        setCopied(false);
      }, 2000);
    } catch (err) {
      console.error("Copy failed", err);
    }
  };

  return (
    <div className="flex items-center gap-3 bg-gray-100 p-4 rounded-lg border max-w-xl">
      {/* Text Area */}
      <span className="flex-1 text-sm text-gray-800 truncate">
        {text}
      </span>

      {/* Copy Button */}
      <button
        onClick={handleCopy}
        className={`px-4 py-2 text-sm rounded transition
          ${
            copied
              ? "bg-green-500 text-white"
              : "bg-blue-500 text-white hover:bg-blue-600"
          }`}
      >
        {copied ? "Copied!" : "Copy"}
      </button>
    </div>
  );
}
