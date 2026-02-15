// translate.js
export async function translateToEnglish(text) {
  const res = await fetch("https://libretranslate.de/translate", {
    method: "POST",
    body: JSON.stringify({
      q: text,
      source: "bn",   // তোমার Bangla text
      target: "en",   // English translation
      format: "text"
    }),
    headers: { "Content-Type": "application/json" }
  });

  const data = await res.json();
  return data.translatedText;
}
