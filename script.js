// Array of quotes
const quotes = [
  { content: "The best way to predict the future is to create it.", author: "Peter Drucker" },
  { content: "Life is what happens when you're busy making other plans.", author: "John Lennon" },
  { content: "Be yourself; everyone else is already taken.", author: "Oscar Wilde" },
  { content: "Happiness depends upon ourselves.", author: "Aristotle" },
  { content: "You miss 100% of the shots you don’t take.", author: "Wayne Gretzky" },
  { content: "Success is not final, failure is not fatal: It is the courage to continue that counts.", author: "Winston Churchill" },
  { content: "Do what you can, with what you have, where you are.", author: "Theodore Roosevelt" }
];

let currentQuote = "";

// Show random quote
function getQuote() {
  const q = quotes[Math.floor(Math.random() * quotes.length)];
  currentQuote = `${q.content} — ${q.author}`;
  document.getElementById("quoteText").innerText = q.content;
  document.getElementById("quoteAuthor").innerText = `— ${q.author}`;
}

// Copy quote to clipboard
function copyQuote() {
  if(!currentQuote) return;
  navigator.clipboard.writeText(currentQuote)
    .then(() => alert("Quote copied to clipboard! ✅"))
    .catch(() => alert("Failed to copy 😕"));
}
