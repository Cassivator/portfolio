const links = [
    ["cardinal.mistium.com", "https://cardinal.mistium.com/button.gif"],
    ["0stormy.xyz", "https://0stormy.xyz/assets/88x31.png"],
    ["pnk.wtf", "https://pnk.wtf/images/88x31.png"],
    ["rotur.dev", "https://rotur.dev/rotur-88x31.png"],
    [
        "roturassistant.com",
        "https://static.roturassistant.com/promo/RA_88x31.png",
    ],
];

const div = document.getElementById("buttons");

for (const [site, img] of links) {
    const a = document.createElement("a");
    a.href = "https://" + site;
    a.target = "_blank";

    const i = document.createElement("img");
    i.src = img;
    i.width = 88;
    i.height = 31;
    i.alt = site + " site button";

    a.appendChild(i);
    div.appendChild(a);
}
