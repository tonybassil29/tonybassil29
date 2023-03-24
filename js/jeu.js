console.log('Jeu démarré');
let chrono = 60;
let score = 0;

let scoreElement = document.querySelector("#score");
let chronoElement = document.querySelector("#chrono");

scoreElement.innerHTML = `Score: ${score}`;
chronoElement.innerHTML = `Temps restant: ${chrono}`;

let intervalId = setInterval(() => {
  chrono--;
  chronoElement.innerHTML = `Temps restant: ${chrono}`;

  if (chrono === 0) {
    clearInterval(intervalId);
    alert(`Votre score final est ${score} !`);
  }
}, 1000);

let box = document.querySelector(".box");

box.addEventListener("click", () => {
  score++;
  scoreElement.innerHTML = `Score: ${score}`;

  let top = Math.floor(Math.random() * window.innerHeight);
  let left = Math.floor(Math.random() * window.innerWidth);

  box.style.top = `${top}px`;
  box.style.left = `${left}px`;
});
