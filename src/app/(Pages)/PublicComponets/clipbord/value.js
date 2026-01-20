export const ClipboardValue = `

              Make Component Clipboard.jsx
___________________________________________________________________________

import { useState } from "react";

export default function Clipboard({ text }) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);

      setTimeout(() => {
        setCopied(false);
      }, 2000);
    } catch (error) {
      console.error("Copy failed", error);
    }
  };

  return (
    <div className="flex items-center gap-3 p-4 border rounded-lg bg-gray-100 max-w-md">
      <p className="flex-1 text-gray-700 truncate">{text}</p>

      <button
        onClick={handleCopy}
        className={\`absolute top-3 right-3 px-3 py-1 text-xs rounded transition
          \${copied
            ? "bg-green-500 text-white"
            : "bg-blue-500 text-white hover:bg-blue-600"}
        \`}
      >
        {copied ? "Copied!" : "Copy"}
      </button>
    </div>
  );
}



                          App.jsx
________________________________________________________________________________________________
            
import Clipboard from "./Clipboard";

export default function App() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <Clipboard text="https://example.com/my-link" />
    </div>
  );
}



`;
