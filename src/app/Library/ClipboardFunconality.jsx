"use client";
import { useState } from "react";

export default function ClipboardFunconality({ text }) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error("Copy failed", err);
    }
  };

  return (
    <div className="bg-gray-900 text-gray-100 p-6 rounded-lg border max-w-2xl relative">

      {/* Code Block */}
      <pre className="text-sm font-mono whitespace-pre overflow-x-auto">
        <code>{text}</code>
      </pre>

      {/* Copy Button */}
      <button
        onClick={handleCopy}
        className={`absolute top-3 right-3 px-3 py-1 text-xs rounded transition
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
