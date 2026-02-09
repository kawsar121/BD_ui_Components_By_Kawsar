export async function translateToBangla(text) {
  const res = await fetch("https://libretranslate.de/translate", {
    method: "POST",
    body: JSON.stringify({
      q: text,
      source: "en",
      target: "bn",
      format: "text"
    }),
    headers: {
      "Content-Type": "application/json"
    }
  });

  const data = await res.json();
  return data.translatedText;
}
