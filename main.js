async function myId() {
  let id = localStorage.getItem("sdisk_id")
  if (!id) {
    id = (await fetch("https://wbst-api.sdisk.us/make/id").then(r => r.json())).generated_id
    localStorage.setItem("sdisk_id", id)
  }
  return id
}

async function setcount() {
    document.getElementById("count").textContent = await fetch("https://wbst-api.sdisk.us/count/" + myId())
}