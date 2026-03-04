"use client";
import { useState } from "react";
import AccordionItem from "../../../Components/QuestionAndAnswerTopics/AccordionItem";
import CmsData from "./cmsData";

export default function CmsFAQ() {
  const [lang, setLang] = useState("bn"); // Default Bangla

  return (
    <div className="max-w-2xl mx-auto p-6">
      {/* Language Switch */}
      <div className="flex justify-end mb-4">
        <button
          onClick={() => setLang(lang === "bn" ? "en" : "bn")}
          className="px-4 py-2 rounded bg-blue-500 text-white"
        >
          {lang === "bn" ? "English" : "বাংলা"}
        </button>
      </div>

      {/* FAQ List */}
      {CmsData.map((item) => (
        <AccordionItem
          key={item.id}
          question={item.question} // তুমি নিজে Bangla লিখবে
          answer={item.answer}     // তুমি নিজে Bangla লিখবে
          lang={lang}
        />
      ))}
    </div>
  );
}
