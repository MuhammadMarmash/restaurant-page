export default function setNav(current) {
    const cover = document.querySelector("#cover");
    cover.className = "";
    cover.classList.add(`${current}-tab`);

    const nodes = document.querySelector("#tab-list").childNodes;
    for (let node of nodes) node.classList.remove("disabled");
    document.getElementById(current).classList.add("disabled");
}
