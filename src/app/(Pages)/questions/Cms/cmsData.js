const CmsData = [
  {
    id: 1,
    question: "CMS কী? CMS কেন ব্যবহার করা হয়?",
    answer: "CMS (Content Management System) হলো এমন একটি সফটওয়্যার যা দিয়ে কোড না লিখেও ওয়েবসাইটের কনটেন্ট ম্যানেজ করা যায়।"
  },
  {
    id: 2,
    question: "জনপ্রিয় CMS গুলোর নাম বলো।",
    answer: "উদাহরণ: WordPress, Joomla, Drupal, Shopify"
  },
  {
    id: 3,
    question: "WordPress কীভাবে কাজ করে?",
    answer: "WordPress PHP ও MySQL ভিত্তিক একটি CMS। এতে Theme ও Plugin ব্যবহার করে ওয়েবসাইট কাস্টমাইজ করা যায়।"
  },
  {
    id: 4,
    question: "Static Website এবং CMS Website এর মধ্যে পার্থক্য কী",
    answer: "Theme → ওয়েবসাইটের ডিজাইন ও লে-আউট নিয়ন্ত্রণ করে Plugin → অতিরিক্ত ফিচার যোগ করে (যেমন: Contact Form, SEO, Security"
  },
  {
    id: 5,
    question: "Static Website এবং CMS Website এর মধ্যে পার্থক্য কী?",
    answer: "Static → কোড পরিবর্তন না করলে কনটেন্ট পরিবর্তন সম্ভব নয়, CMS → Admin Panel থেকে সহজে কনটেন্ট আপডেট করা যায়"
  },
  {
    id: 6,
    question: "SEO (Search Engine Optimization) হলো সার্চ ইঞ্জিনে ওয়েবসাইটকে উপরের দিকে আনার প্রক্রিয়া। CMS-এ SEO করা যায়:",
    answer: "SEO Plugin ব্যবহার করে (যেমন Yoast SEO) Meta Title, Description সেট করে Friendly URL ব্যবহার করে"
  },
  {
    id: 7,
    question: "Database কেন গুরুত্বপূর্ণ CMS-এ?",
    answer: "CMS ডেটাবেসে সব পোস্ট, পেজ, ইউজার তথ্য সংরক্ষণ করে। যেমন WordPress MySQL ব্যবহার করে।"
  },
  {
    id: 8,
    question: "CMS-এ User Role কী কী হতে পারে?",
    answer: "উদাহরণ (WordPress): Admin, Editor, Author, Contributor, Subscriber"
  },
  {
    id: 9,
    question: "Security কীভাবে নিশ্চিত করা যায় CMS-এ?",
    answer: "Strong Password ব্যবহার, Regular Update করা, Security Plugin ব্যবহার, Backup রাখা"
  },
  {
    id: 10,
    question: "Headless CMS কী?",
    answer: "Headless CMS হলো এমন CMS যেখানে Backend আলাদা এবং Frontend আলাদা থাকে। API এর মাধ্যমে ডেটা নেয়া হয় (যেমন React দিয়ে Frontend তৈরি করা যায়)।"
  }
];

export default CmsData;