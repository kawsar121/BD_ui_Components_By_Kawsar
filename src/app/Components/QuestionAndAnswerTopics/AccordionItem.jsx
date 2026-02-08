"use client";
import { useState } from "react";
import { translateToBangla } from "./translate";

export default function AccordionItem({ question, answer, lang }) {
  const [open, setOpen] = useState(false);

  const qText = lang === "en" ? question : translateToBangla(question);
  const aText = lang === "en" ? answer : translateToBangla(answer);

  return (
    <div className="border rounded-lg shadow-sm mb-4">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex justify-between items-center p-4 text-left font-medium hover:bg-gray-100"
      >
        {qText}
        <span className={`transition ${open ? "rotate-180" : ""}`}>
          ▼
        </span>
      </button>

      <div
        className={`overflow-hidden transition-all duration-300 ${
          open ? "max-h-40 p-4" : "max-h-0 px-4"
        }`}
      >
        <p className="text-gray-600">{aText}</p>
      </div>
    </div>
  );
}
