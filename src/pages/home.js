import beeIcon from "../img/bee.svg";
import hiveIcon from "../img/honeycomb.svg";
const home = function () {
    const content = document.querySelector("#content");

    const main_heading = document.createElement("div");
    main_heading.id = "main-heading";
    content.appendChild(main_heading);

    const bee1 = new Image();
    bee1.id = "bee-left";
    bee1.classList.add("decorations");
    bee1.src = beeIcon;
    bee1.alt = "bee img";
    main_heading.appendChild(bee1);

    const bee2 = new Image();
    bee2.id = "bee-right";
    bee2.classList.add("decorations");
    bee2.src = beeIcon;
    bee2.alt = "bee img";
    main_heading.appendChild(bee2);

    const heading_text = document.createElement("div");
    heading_text.id = "heading-text";
    main_heading.appendChild(heading_text);

    const heading_text_text = document.createElement("h1");
    heading_text_text.textContent = "Beary's Breakfast Bar";
    heading_text.appendChild(heading_text_text);
};
export default home;

//   <div class="crop-out" id="review-card">
//     <div class="crop-in">
//       <p id="review">Beary's has the best porridge! The atmosphere and customer service make you feel like you are
//         sitting in
//         the
//         middle of
//         the woods, eating like a bear! This is exactly the kind of place that I like to return to again and again.
//       </p>
//       <p id="customer">Mohammad Marmash</p>
//     </div>
//   </div>
//   <div class="crop-out hours">
//     <div class="crop-in hours">
//       <h3>Hours</h3>
//       <p id="sunday">Sunday: 8am - 8pm</p>
//       <p id="monday">Monday: 6am - 6pm</p>
//       <p id="tuesday">Tuesday: 6am - 6pm</p>
//       <p id="wednesday">Wednesday: 6am - 6pm</p>
//       <p id="thursday">Thursday: 6am - 10pm</p>
//       <p id="friday">Friday: 6am - 10pm</p>
//       <p id="saturday">Saturday: 8am - 10pm</p>
//     </div>
//   </div>
//   <div class="crop-out location">
//     <div class="crop-in location">
//       <h3>Location</h3>
//       <p>123 Forest Drive, Forestville, Maine</p>
//     </div>
//   </div>
//   <img class="decorations" id="hive" src="9f6b40b263827ecffca7.svg" alt="hive"></img>
