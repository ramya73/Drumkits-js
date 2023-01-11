const kits = ["snare", "kick", "crash", "tom"];

const containerElement = document.querySelector(".container");

kits.forEach((kit) => {
  const btnElement = document.createElement("buttton");

  btnElement.classList.add("btn");

  btnElement.innerText = kit;

  btnElement.style.backgroundImage = "url(images/" + kit + ".png)";

  containerElement.appendChild(btnElement);

  const audioElement = document.createElement("audio");

  containerElement.appendChild(audioElement);

  audioElement.src = "sounds/" + kit + ".mp3";

  btnElement.addEventListener("click", () => {
    audioElement.play();
  });
});
