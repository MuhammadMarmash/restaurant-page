// preps site the first time it's opened by making a header and loading home page
import headerDiv from "../pages/header";
import home from "../pages/home";
import footer from "../pages/footer";

const firstLoad = function () {
    const body = document.querySelector("body");
    const header = headerDiv();
    body.appendChild(header);
    const main = document.createElement("main");
    const content = document.createElement("div");
    content.id = "content";
    main.appendChild(content);
    body.appendChild(main);
    home();
    body.appendChild(footer());
};

export default firstLoad;
