"use client";
import { useState } from "react";
import cmsData from "./cmsData";
import AccordionItem from "../../../Components/QuestionAndAnswerTopics/AccordionItem";

export default function CmsFaq() {
  const [lang, setLang] = useState("en");

  return (
    <div className="max-w-5xl mx-auto bg-red-400">
      {/* Language Switch */}
      <div className="flex justify-end mb-4">
        <button
          onClick={() => setLang(lang === "en" ? "bn" : "en")}
          className="px-4 py-1 rounded bg-blue-500 text-white"
        >
          {lang === "en" ? "বাংলা" : "English"}
        </button>
      </div>

      {/* FAQ List */}
      {cmsData.map((item) => (
        <AccordionItem
          key={item.id}
          question={item.question}
          answer={item.answer}
          lang={lang}
        />
      ))}
    </div>
  );
}