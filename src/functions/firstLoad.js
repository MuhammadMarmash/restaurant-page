// preps site the first time it's opened by making a header and loading home page
import headerDiv from "../pages/header";
import home from "../pages/home";
import footer from "../pages/footer";
import createElement from "./createElement";
const firstLoad = function () {
    const body = document.querySelector("body");
    body.appendChild(headerDiv());
    document.querySelector("#home").classList.add("disabled");
    const main = document.createElement("main");
    createElement({ id: "content", father: main });
    body.appendChild(main);
    home();
    body.appendChild(footer());
};

export default firstLoad;
