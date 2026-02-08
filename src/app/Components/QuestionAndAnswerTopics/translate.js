export function translateToBangla(text) {
  const dictionary = {
    "What is React?": "React কী?",
    "React is a JavaScript library for building user interfaces.":
      "React হলো একটি JavaScript লাইব্রেরি যা ইউজার ইন্টারফেস তৈরি করতে ব্যবহৃত হয়।",

    "What is Tailwind CSS?": "Tailwind CSS কী?",
    "Tailwind CSS is a utility-first CSS framework.":
      "Tailwind CSS হলো একটি utility-first CSS framework।",

    "Is React good for beginners?":
      "React কি নতুনদের জন্য ভালো?",
    "Yes, React is beginner-friendly and has a large community.":
      "হ্যাঁ, React নতুনদের জন্য উপযোগী এবং এর একটি বড় কমিউনিটি রয়েছে।",

    "Can I use React with Tailwind CSS?":
      "আমি কি Tailwind CSS এর সাথে React ব্যবহার করতে পারি?",
    "Yes, React works perfectly with Tailwind CSS.":
      "হ্যাঁ, React Tailwind CSS এর সাথে খুব ভালোভাবে কাজ করে।"
  };

  return dictionary[text] || "বাংলা অনুবাদ শীঘ্রই আসছে…";
}
