window.addEventListener('DOMContentLoaded', () => {
  const container = document.createElement('div');
  container.className = 'floating-svg';
  document.body.appendChild(container);

  const NUM_FLOATERS = 30;

  for (let i = 0; i < NUM_FLOATERS; i++) {
    const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
    const left = Math.random() * 100;
    const delay = Math.random() * 10;
    const duration = 8 + Math.random() * 6; // 8–14 seconds

    svg.setAttribute("viewBox", "0 0 32 29.6");
    svg.style.left = `${left}%`;
    svg.style.animationDelay = `${delay}s`;
    svg.style.animationDuration = `${duration}s`;

    const colorOptions = ['#f7accf', '#fbd2e0', '#ffcce0', '#ffd9e6'];
    const fill = colorOptions[Math.floor(Math.random() * colorOptions.length)];

    const path = document.createElementNS("http://www.w3.org/2000/svg", "path");
    path.setAttribute("fill", fill);
    path.setAttribute("d", "M23.6,0c-3.4,0-6.4,2.1-7.6,5.1C14.8,2.1,11.8,0,8.4,0C3.8,0,0,3.8,0,8.4c0,9.1,16,21.2,16,21.2s16-12.1,16-21.2C32,3.8,28.2,0,23.6,0z");

    svg.appendChild(path);
    container.appendChild(svg);
  }
});
window.addEventListener('DOMContentLoaded', () => {
  const left = document.createElement('div');
  const right = document.createElement('div');
  left.className = 'side-decor left';
  right.className = 'side-decor right';
  document.body.appendChild(left);
  document.body.appendChild(right);
});
document.addEventListener('mousemove', e => {
  const sparkle = document.createElement('div');
  sparkle.className = 'sparkle';
  sparkle.style.left = `${e.clientX}px`;
  sparkle.style.top = `${e.clientY}px`;
  document.body.appendChild(sparkle);
  setTimeout(() => sparkle.remove(), 1000);
});
const loveQuotes = [
  "You are my home.",
  "Forever starts with you.",
  "Even silence with you is poetry.",
  "Every heartbeat is yours.",
  "You live in every letter I write.",
  "You're my favorite place.",
  "Loving you feels like breathing.",
    "I wish I was better."
];

for (let i = 0; i < loveQuotes.length; i++) {
  const note = document.createElement('div');
  note.className = 'love-note';
  note.textContent = loveQuotes[i];

  // Only place notes near left or right edge (10–20% and 80–90%)
  const side = Math.random() < 0.5
    ? Math.random() * 10 + 5     // Left: 5%–15%
    : Math.random() * 10 + 80;   // Right: 80%–90%
  note.style.left = `${side}%`;

  // Place them vertically at random height
  note.style.bottom = `${Math.random() * 50 + 20}%`;
  note.style.animationDelay = `${Math.random() * 10}s`;

  document.body.appendChild(note);
}

/*butterflies*/
const butterflyCount = 8;

for (let i = 0; i < butterflyCount; i++) {
  const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
  svg.classList.add('butterfly');
  svg.setAttribute("viewBox", "0 0 64 64");
  svg.style.top = `${Math.random() * 80 + 10}%`;

  const sideX = Math.random() < 0.5
    ? 140 + Math.random() * 40 // left side gap (between vine and content)
    : window.innerWidth - (140 + Math.random() * 40); // right side gap

  svg.style.left = `${sideX}px`;
  svg.style.animationDelay = `${Math.random() * 10}s`;

  const path = document.createElementNS("http://www.w3.org/2000/svg", "path");
  path.setAttribute("fill", "#f7accf");
  path.setAttribute("d", `M32 12 C24 0, 0 20, 16 32 C0 44, 24 64, 32 52 C40 64, 64 44, 48 32 C64 20, 40 0, 32 12Z`);
  svg.appendChild(path);
  document.body.appendChild(svg);
}

/*decorative*/ 
['left', 'right'].forEach(side => {
  const deco = document.createElement('div');
  deco.className = `side-deco ${side}`;
  document.body.appendChild(deco);
});
