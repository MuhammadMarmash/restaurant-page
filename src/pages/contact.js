import createElement from "../functions/createElement";
import beeIcon from "../img/bee.svg";
import mamaBear from "../img/mamabear.png";
import papaBear from "../img/papabear.jpeg";
import babyBear from "../img/babybear.jpeg";

const contact = function () {
    const content = document.querySelector("#content");

    const main_heading = createElement({
        father: content,
        classes: ["contact-header", "heading"],
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
        father: main_heading,
        classes: ["contact-header", "heading-text"],
    });

    createElement({
        type: "h1",
        textContent: "Contact Us",
        father: heading_text,
    });

    const makeCard = function (worker) {
        const hours_card = createElement({
            classes: ["crop-out", "contact-outer"],
            father: content,
        });

        const hours_card_in = createElement({
            classes: ["crop-in", "contact-inner"],
            father: hours_card,
        });

        createElement({
            type: "h3",
            textContent: worker["name"],
            father: hours_card_in,
        });

        let days = [worker["role"], worker["number"], worker["email"]];
        for (let day of days) {
            createElement({
                type: "p",
                textContent: day,
                father: hours_card_in,
            });
        }
        createElement({
            title: `${worker["name"]}'s Photo`,
            classes: ["contact-pic"],
            style: `background-image: url(${worker["photo"]});`,
            father: hours_card_in,
        });
    };

    for (let worker of [
        {
            name: "Mama Bear",
            role: "Chef",
            number: "555-555-5554",
            email: "totallyRealEmail@notFake.com",
            photo: mamaBear,
        },
        {
            name: "Papa Bear",
            role: "Manager",
            number: "555-555-5555",
            email: "perfectlyRealEmail@notFake.com",
            photo: papaBear,
        },
        {
            name: "Baby Bear",
            role: "Waiter",
            number: "555-555-5556",
            email: "totallyRealEmail@notFake.com",
            photo: babyBear,
        },
    ]) {
        makeCard(worker);
    }
};
export default contact;
