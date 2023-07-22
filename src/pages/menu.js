import createElement from "../functions/createElement";
import beeIcon from "../img/bee.svg";
import hiveIcon from "../img/honeycomb.svg";
import { menu } from "../config";
const menuPage = function () {
    const content = document.querySelector("#content");

    const main_heading = createElement({
        classes: ["heading"],
        father: content,
        style: "margin-bottom: 0 !important;",
    });

    createElement({
        type: "img",
        id: "bee-left",
        classes: ["decorations"],
        src: beeIcon,
        alt: "bee img",
        father: main_heading,
    });

    createElement({
        type: "img",
        id: "bee-right",
        classes: ["decorations"],
        src: beeIcon,
        alt: "bee img",
        father: main_heading,
    });

    const heading_text = createElement({
        classes: ["heading-text"],
        father: main_heading,
    });

    createElement({
        type: "h1",
        textContent: "Menu",
        father: heading_text,
    });
    const makeCategoryCard = function (name) {
        const container = createElement({
            classes: ["heading", "sub-container"],
            father: content,
        });
        const innerContainer = createElement({
            classes: ["heading-text", "sub-header"],
            father: container,
        });
        createElement({
            type: "h2",
            textContent: name,
            father: innerContainer,
        });
        createElement({
            type: "img",
            src: hiveIcon,
            father: container,
            classes: ["decorations", "menu-hive"],
        });
    };
    function importAll(r) {
        const key = r.keys();
        const values = r.keys().map(r);
        let coords = {};
        key.forEach((element, i) => {
            coords[element] = values[i];
        });
        return coords;
    }

    const images = importAll(
        require.context("../img/", false, /\.(png|jpe?g|jpg|svg)$/)
    );
    const makeCard = function (dish) {
        const hours_card = createElement({
            classes: ["crop-out", "menu-outer"],
            father: content,
        });

        const hours_card_in = createElement({
            classes: ["crop-in", "menu-outer"],
            father: hours_card,
        });

        createElement({
            type: "h3",
            textContent: dish["name"],
            father: hours_card_in,
        });

        createElement({
            type: "p",
            textContent: dish["description"],
            father: hours_card_in,
        });
        createElement({
            classes: ["item-price"],
            type: "p",
            textContent: `${dish["price"]}`,
            father: hours_card_in,
        });

        createElement({
            title: `Picture of ${dish["alt"]}`,
            classes: ["menu-pic"],
            style: `background-image: url(${images[dish["pic"]]});`,
            father: hours_card_in,
        });
    };

    for (let data of menu) {
        if (data["item"]) makeCard(data);
        else makeCategoryCard(data["subtitle"]);
    }
};
export default menuPage;
