const footer = function () {
    const theFooter = document.createElement("footer");

    const a1 = document.createElement("a");
    a1.href = "http://www.freepik.com";
    a1.textContent = "Hive icon made by Freepik - www.flaticon.com";
    theFooter.appendChild(a1);

    const a2 = document.createElement("a");
    a2.href = "https://www.flaticon.com/authors/smashicons";
    a2.textContent = "Bee icons made by Smashicons - www.flaticon.com";
    theFooter.appendChild(a2);

    const a3 = document.createElement("a");
    a3.href = "https://www.freepik.com/vectors/food";
    a3.textContent =
        "Background image created by dgim-studio - www.freepik.com";
    theFooter.appendChild(a3);

    const p = document.createElement("p");
    p.textContent = "design by Ben Eck";
    theFooter.appendChild(p);
    return theFooter;
};
export default footer;
