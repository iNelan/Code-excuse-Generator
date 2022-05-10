/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here

  let who = ["The dog", "My grandma", "His turtle", "My bird"];
  let where = ["ate", "peed", "crushed", "broke"];
  let what = ["my homework", "the keys", "the car"];
  let when = [
    "before the class",
    "right on time",
    "when I finished",
    "during my lunch",
    "while I was praying"
  ];

  let random1 = Math.floor(Math.random() * (who.length - 0)) + 0;
  let random2 = Math.floor(Math.random() * (where.length - 0)) + 0;
  let random3 = Math.floor(Math.random() * (what.length - 0)) + 0;
  let random4 = Math.floor(Math.random() * (when.length - 0)) + 0;

  document.querySelector("#excuse").innerHTML = `${who[random1]} 
    ${where[random2]}
    ${what[random3]}
    ${when[random4]}`;
};
