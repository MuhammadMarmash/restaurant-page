import home from "./pages/home";
import headerDiv from "./pages/header";
import firstLoad from "./functions/firstLoad";
import createElement from "./functions/createElement";
import footer from "./pages/footer";
import clearContent from "./functions/clearContent";
import "./css/style.css";
import contact from "./pages/contact";
import menu from "./pages/menu";
import setNav from "./functions/setNav";

firstLoad();

const homeButton = document.querySelector("#home");
const menuButton = document.querySelector("#menu");
const contactButton = document.querySelector("#contact");

homeButton.addEventListener("click", function () {
    console.log("home");
    setNav("home");
    clearContent();
    home();
});

menuButton.addEventListener("click", function () {
    console.log("menu");
    setNav("menu");
    clearContent();
    menu();
});

contactButton.addEventListener("click", function () {
    console.log("contact");
    setNav("contact");
    clearContent();
    contact();
});
