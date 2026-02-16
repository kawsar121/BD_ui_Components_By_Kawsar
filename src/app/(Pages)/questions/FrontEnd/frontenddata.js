const faqData = [
  {
    id: 1,
    question: "HTML, CSS এবং JavaScript এর পার্থক্য কী?",
    answer: "HTML ওয়েবসাইটের কাঠামো তৈরি করে (যেমন: heading, paragraph, image)। CSS ওয়েবসাইটের ডিজাইন ও স্টাইল নিয়ন্ত্রণ করে (color, size, layout)। JavaScript ওয়েবসাইটে ইন্টারঅ্যাকশন ও ডাইনামিক কাজ করে (button click, form validation)।"
  },
  {
    id: 2,
    question: "Inline, Internal এবং External CSS এর পার্থক্য কী?",
    answer: "Inline CSS সরাসরি HTML ট্যাগের ভিতরে লেখা হয়। Internal CSS HTML ফাইলের <style> ট্যাগের ভিতরে লেখা হয়। External CSS আলাদা .css ফাইলে লেখা হয় এবং <link> দিয়ে যুক্ত করা হয়।"
  },
  {
    id: 3,
    question: "CSS Flexbox এবং Grid এর পার্থক্য কী?",
    answer: "Flexbox এক দিক (row বা column) ভিত্তিক layout এর জন্য ব্যবহার হয়। Grid দুই দিক (row এবং column) ভিত্তিক layout এর জন্য ব্যবহার হয়। Flex one-dimensional layout model | Grid Two-dimensional layout model"
  },
  {
    id: 4,
    question: "var, let এবং const এর পার্থক্য কী?",
    answer: "var পুরোনো পদ্ধতি, function scoped। let block scoped এবং মান পরিবর্তন করা যায়। const block scoped কিন্তু মান পরিবর্তন করা যায় না।"
  },
  {
    id: 5,
    question: "Responsive Design কী এবং কিভাবে ওয়েবসাইট responsive করা যায়?",
    answer: "Responsive Design হলো এমন ডিজাইন যা মোবাইল, ট্যাব, ডেস্কটপ সব ডিভাইসে ঠিকমতো দেখায়। Responsive করার উপায়: Media Query ব্যবহার করা | Flexbox বা Grid ব্যবহার করা | Mobile-first design করা"
  },
  {
    id: 6,
    question: "CSS Position এর ধরনগুলো কী কী?",
    answer: "static: default, normal flow। relative: নিজ অবস্থান থেকে slight পরিবর্তন সম্ভব। absolute: nearest positioned parent অনুযায়ী position নির্ধারিত। fixed: page scroll এ স্থির থাকে। sticky: scroll করলে static থেকে fixed এ চলে যায়।"
  },
  {
    id: 7,
    question: "Difference between inline-block এবং block elements?",
    answer: "block: নতুন line নিয়ে full width নেয়। inline-block: content অনুযায়ী width নেয়, কিন্তু height/width set করা যায়।"
  },
  {
    id: 8,
    question: "== এবং === এর পার্থক্য কী?",
    answer: "== শুধু মান (value) তুলনা করে। === মান এবং ডেটা টাইপ দুটোই তুলনা করে।"
  },
  {
    id: 9,
    question: "DOM (Document Object Model) কী?",
    answer: "DOM হলো HTML ডকুমেন্টের একটি অবজেক্ট স্ট্রাকচার। JavaScript DOM ব্যবহার করে ওয়েব পেজের কনটেন্ট পরিবর্তন করতে পারে (যেমন: লেখা পরিবর্তন, নতুন element যোগ করা)।"
  },
  {
    id: 10,
    question: "Functional Component এবং Class Component এর পার্থক্য কী?",
    answer: "Functional Component সহজ ও ছোট component, Hooks ব্যবহার করা যায়। Class Component পুরোনো পদ্ধতি, lifecycle method থাকে।"
  },
  {
    id: 11,
    question: "Difference between null and undefined in JavaScript?",
    answer: "null: মান deliberately খালি করা হয়েছে। undefined: variable declare হয়েছে কিন্তু value assign হয়নি।"
  },
  {
    id: 12,
    question: "What is CORS and why it happens?",
    answer: "CORS (Cross-Origin Resource Sharing) হলো security feature, যা অন্য domain থেকে API request restrict করে। যদি frontend ও backend আলাদা domain এ থাকে, সেক্ষেত্রে server থেকে permission না থাকলে request fail হয়।"
  },
  {
    id: 13,
    question: "Difference between localStorage, sessionStorage, and cookies?",
    answer: "localStorage: data permanent save হয়, browser close হলেও থাকে। sessionStorage: session শেষ হলে data মুছে যায়। cookies: small data save হয়, server ও access করতে পারে, expire date আছে।"
  },
  {
    id: 14,
    question: "What is the difference between controlled and uncontrolled components in React?",
    answer: "Controlled Component: input value state দিয়ে control হয়। Uncontrolled Component: input নিজেই internal state maintain করে।"
  },
  {
    id: 15,
    question: "React এ Props এবং State কী?",
    answer: "Props হলো parent component থেকে child component এ ডাটা পাঠানোর উপায়। State হলো component এর নিজস্ব ডাটা, যা পরিবর্তন হলে UI আপডেট হয়।"
  }
];

export default faqData;
