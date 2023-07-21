import Icon from "../img/dripping.png";
const headerDiv = function () {
    const header = document.createElement("header");

    const nav = document.createElement("nav");
    header.appendChild(nav);

    const cover = document.createElement("div");
    cover.id = "cover";
    cover.classList.add("home-tab");
    nav.appendChild(cover);

    const dripping = new Image();
    dripping.id = "dripping";
    dripping.src = Icon;
    dripping.alt = "honey dripping img";
    cover.appendChild(dripping);

    const tab_list = document.createElement("ul");
    tab_list.id = "tab-list";
    nav.appendChild(tab_list);

    const home = document.createElement("li");
    home.textContent = "Home";
    tab_list.appendChild(home);

    const menu = document.createElement("li");
    menu.textContent = "Menu";
    tab_list.appendChild(menu);

    const contact = document.createElement("li");
    contact.textContent = "contact";
    tab_list.appendChild(contact);

    return header;
};
export default headerDiv;
