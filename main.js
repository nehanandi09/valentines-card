const messages = [
  "I love you ❤️",
  "You are the best part of my life 💖",
  "You deserve all the best things in the world 🌍",
  "You're the best!",
  "My heart is yours 💕",
  "My love for you grows stronger every day 💪",
  "You make me smile 😊",
  "Thinking of you 😘",
  "I cherish every moment we spend together 💑",
  "You're a dream 😍",
  "You're my world 🌍",
  "Can't stop loving you!",
  "You light up my life 💡",
  "Hugs and kisses 😘",
  "Always with you ❤️",
  "You complete me 💑",
  "You love makes me glow 🌟",
  "I adore everything about you 💖",
  "I am excited to see you again 😍",
  "I love you more than words can say ❤️",
  "I am the luckiest woman in the world",
  "I am inspired by you and learn how to be a better human in so many ways",
  "You are a true inspiration to me",
  "You are my rock and my best friend",
  "Your dreams are worth pursuing, and I am your biggest cheerleader",
  "You are the love of my life",
  "You have the purest heart. I am so lucky to be with you",
  "You are the song that plays in my heart",
  "You are a gift to this world",
  "Your support means the world to me.",
];

// Shuffle the messages array
function shuffle(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

// Select the first 16 messages from the shuffled array
const selectedMessages = shuffle(messages).slice(0, 16);

const grid = document.querySelector(".grid");

// Create 4x4 envelopes
for (let i = 0; i < 16; i++) {
  const envelope = document.createElement("div");
  envelope.classList.add("envelope");
  envelope.innerHTML =
    '<img class="envelope-image" src="assets/envelope.png" alt="Envelope">';

  const message = document.createElement("p");
  message.classList.add("message");
  message.innerText = selectedMessages[i];

  envelope.appendChild(message);
  grid.appendChild(envelope);

  envelope.addEventListener("click", function () {
    envelope.classList.toggle("opened");
    if (envelope.classList.contains("opened")) {
      createHearts(envelope);
      setTimeout(() => {
        envelope.classList.remove("opened");
      }, 3000); // Adjust the time (3000ms = 3 seconds) as needed
    }
  });
}

function createHearts(element) {
  const envelopeWidth = element.offsetWidth;
  const envelopeHeight = element.offsetHeight;

  for (let i = 0; i < 6; i++) {
    let heart = document.createElement("div");
    heart.classList.add("heart");
    heart.innerHTML = "❤️";
    heart.style.left = `${Math.random() * envelopeWidth}px`;
    heart.style.top = `${Math.random() * envelopeHeight}px`;

    element.appendChild(heart);

    setTimeout(() => {
      heart.remove();
    }, 1000);
  }
}
