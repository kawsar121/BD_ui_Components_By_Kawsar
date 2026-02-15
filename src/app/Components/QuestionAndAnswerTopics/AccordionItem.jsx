"use client";
import { useEffect, useState } from "react";
import { translateToEnglish } from "./translate";

export default function AccordionItem({ question, answer, lang }) {
  const [open, setOpen] = useState(false);
  const [enQ, setEnQ] = useState("");
  const [enA, setEnA] = useState("");

  useEffect(() => {
    if (lang === "en") {
      translateToEnglish(question).then(setEnQ);
      translateToEnglish(answer).then(setEnA);
    }
  }, [lang, question, answer]);

  return (
    <div className="border rounded-lg mb-4">
      <button
        onClick={() => setOpen(!open)}
        className="w-full p-4 flex justify-between text-left"
      >
        {lang === "bn" ? question : enQ || "Loading..."}
        <span>▼</span>
      </button>

      {open && (
        <p className="p-4 text-gray-600">
          {lang === "bn" ? answer : enA || "Loading..."}
        </p>
      )}
    </div>
  );
}
