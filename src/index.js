import nav from "./../components/navbar.js";
console.log(nav);
let navbar_div = document.querySelector("#navbar_div");
navbar_div.innerHTML = nav();
import "./../styles/navbar.css";
