import beeIcon from "../img/bee.svg";
import hiveIcon from "../img/honeycomb.svg";
import createElement from "../functions/createElement";

const home = function () {
    const content = document.querySelector("#content");

    const main_heading = createElement({
        classes: ["heading"],
        father: content,
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
        textContent: "Beary's Breakfast Bar",
        father: heading_text,
    });

    const review_card = createElement({
        id: "review-card",
        classes: ["crop-out"],
        father: content,
    });

    const review_card_in = createElement({
        classes: ["crop-in"],
        father: review_card,
    });

    createElement({
        type: "p",
        id: "review",
        textContent: `eary's has the best porridge! The atmosphere and customer service make you feel like you are
        sitting in
        the
        middle of
        the woods, eating like a bear! This is exactly the kind of place that I like to return to again and again.`,
        father: review_card_in,
    });
    createElement({
        type: "p",
        id: "customer",
        textContent: "MohammadMarmash",
        father: review_card_in,
    });

    const hours_card = createElement({
        classes: ["crop-out", "hours"],
        father: content,
    });

    const hours_card_in = createElement({
        classes: ["crop-in", "hours"],
        father: hours_card,
    });

    createElement({ type: "h3", textContent: "Hours", father: hours_card_in });

    let days = [
        ["sunday", "8am - 8pm"],
        ["monday", "6am - 6pm"],
        ["tuesday", "6am - 6pm"],
        ["wednesday", "6am - 6pm"],
        ["thursday", "6am - 10pm"],
        ["friday", "6am - 10pm"],
        ["saturday", "8am - 10pm"],
    ];
    for (let day of days) {
        createElement({
            type: "p",
            textContent: `${day[0]}: ${day[1]}`,
            id: day[0],
            father: hours_card_in,
        });
    }

    const location_card = createElement({
        classes: ["crop-out", "location"],
        father: content,
    });

    const location_card_in = createElement({
        classes: ["crop-in", "location"],
        father: location_card,
    });

    createElement({
        type: "h3",
        textContent: "Location",
        father: location_card_in,
    });

    createElement({
        type: "p",
        textContent: "123 Forest Drive, Forestville, Maine",
        father: location_card_in,
    });

    createElement({
        type: "img",
        father: content,
        classes: ["decorations"],
        id: "hive",
        src: hiveIcon,
        al: "hive img",
    });
};
export default home;
