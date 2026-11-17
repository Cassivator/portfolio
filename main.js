async function myId() {
  let id = localStorage.getItem("sdisk_id")
  if (!id) {
    id = (await fetch("https://wbst-api.sdisk.us/make/id").then(r => r.json())).generated_id
    localStorage.setItem("sdisk_id", id)
  }
  return id
}

async function setcount() {
  const res = await fetch("https://wbst-api.sdisk.us/count/" + await myId())
  const data = await res.json()
  document.getElementById("count").textContent =  "visitors: " + data.visitors
}

fetch('footer.html')
  .then(r => r.text())
  .then(html => document.body.insertAdjacentHTML('beforeend', html));

setcount()
