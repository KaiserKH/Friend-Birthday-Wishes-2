// script.js

// Auto-play music only when user clicks
function playMusic() {
  const audio = document.getElementById("bg-music");
  if (audio) {
    audio.play().catch(err => {
      console.log("User interaction required to play audio.");
    });
  }
}

// You can also auto-start animations or interactions here on load
window.addEventListener("load", () => {
  console.log("Welcome to Zaiddu's Birthday Gift!");
});