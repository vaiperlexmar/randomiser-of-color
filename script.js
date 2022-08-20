"use strict";

let colors = [
  "red",
  "green",
  "blue",
  "purple",
  "yellow",
  "wheat",
  "aquamarine",
  "chocolate",
  "blueviolet",
  "coral",
  "cyan",
  "brown",
  "crimson",
  "darkmagenta",
  "cadetblue",
  "#f1c232",
  "#93c47d",
  "#3c78d8",
  "#e69138",
  "#199661",
  "#6e57ff",
  "rgb(128,128,0)",
  "rgb(175,238,238)",
  "rgb(30,144,255)",
  "rgb(221,160,221)",
  "rgb(75,0,130)",
  "rgb(72,61,139)",
];

function randomiseColor() {
  let min = 0;
  let max = colors.length - 1;
  let random = Math.floor(min + Math.random() * (max - min + 1));
  document.body.style.background = `${colors[random]}`;
  document.getElementById("colorname").textContent =
    `${colors[random]}`.slice(0, 1).toUpperCase() +
    `${colors[random]}`.slice(1);
}
