import Icon from "../img/dripping.png";
import createElement from "../functions/createElement";

const headerDiv = function () {
    const header = document.createElement("header");

    const nav = createElement({ type: "nav", father: header });

    const cover = createElement({
        id: "cover",
        classes: ["home-tab"],
        father: nav,
    });

    createElement({
        type: "img",
        id: "dripping",
        src: Icon,
        alt: "honey dripping img",
        father: cover,
    });

    const tab_list = createElement({ type: "ul", id: "tab-list", father: nav });

    for (let text of ["Home", "Menu", "Contact"])
        createElement({ type: "li", textContent: text, father: tab_list });

    return header;
};

export default headerDiv;
