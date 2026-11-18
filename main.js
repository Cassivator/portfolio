async function myId() {
  let id = localStorage.getItem("sdisk_id");
  if (!id) {
    id = (
      await fetch("https://wbst-api.sdisk.us/make/id").then((r) => r.json())
    ).generated_id;
    localStorage.setItem("sdisk_id", id);
  }
  return id;
}

async function setcount() {
  const res = await fetch("https://wbst-api.sdisk.us/count/" + (await myId()));
  const data = await res.json();
  document.getElementById("count").textContent = "visitors: " + data.visitors;
}

fetch("/footer.html")
  .then((r) => r.text())
  .then((html) => document.body.insertAdjacentHTML("beforeend", html));

setcount()
  .then(

    const songs = [
      "01-intro.mp3",
      "02-faster.mp3",
      "03-witches.mp3",
      "04-tell-me-you-know.mp3",
      "05-nomu.mp3",
      "06-alchemist.mp3",
      "07-atlas.mp3",
      "08-ghost-king-appears.mp3",
      "09-ghost-gang-theme.mp3",
      "10-ghost-dance.mp3",
      "11-octochet-theme.mp3",
      "12-mecha-raccoon-theme.mp3",
      "13-ghost-king-theme.mp3",
      "14-final-battle.mp3",
      "15-slingshot.mp3",
      "16-drifting.mp3",
      "17-everything-everything.mp3",
      "18-down-with-the-king.mp3",
      "19-aloe-lite.mp3",
      "20-pox.mp3",
      "21-outro.mp3",
    ];
    let i = 0;
    const audio = new Audio("/assets/music/" + songs[0]);
    audio.addEventListener("ended", () => {
      i = (i + 1) % songs.length;
      audio.src = "/assets/music/" + songs[i];
      audio.play();
    });
    btn.onclick = () => (audio.paused ? audio.play() : audio.pause());
    document.getElementById("play").addEventListener("click", () => {
      audio.play();
    });

  );
