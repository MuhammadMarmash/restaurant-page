import home from "./pages/home";
import firstLoad from "./functions/firstLoad";
import clearContent from "./functions/clearContent";
import "./css/style.css";
import contact from "./pages/contact";
import menuPage from "./pages/menu";
import setNav from "./functions/setNav";
import {
    contacts,
    info,
    menu,
    reviews,
    homeTitle,
    menuTitle,
    contactTitle,
} from "./config";

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
    menuPage();
});

contactButton.addEventListener("click", function () {
    console.log("contact");
    setNav("contact");
    clearContent();
    contact();
});
