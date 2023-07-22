import createElement from "../functions/createElement";
const footer = function () {
    const theFooter = document.createElement("footer");

    createElement({
        type: "a",
        href: "http://www.freepik.com",
        textContent: "Hive icon made by Freepik - www.flaticon.com",
        father: theFooter,
    });

    createElement({
        type: "a",
        href: "https://www.flaticon.com/authors/smashicons",
        textContent: "Bee icons made by Smashicons - www.flaticon.com",
        father: theFooter,
    });

    createElement({
        type: "a",
        href: "https://www.freepik.com/vectors/food",
        textContent:
            "Background image created by dgim-studio - www.freepik.com",
        father: theFooter,
    });

    createElement({
        type: "p",
        textContent: "design by Ben Eck",
        father: theFooter,
    });
    return theFooter;
};
export default footer;
