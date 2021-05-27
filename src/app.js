/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = () => {
  document.querySelector("#btn").addEventListener("click", () => {
    document.querySelector("#restaurant").innerHTML = generateRestaurant();
  });
  console.log("Hello Rigo from the console!");
};

let generateRestaurant = () => {
  let restaurant = [
    "Chipotle",
    "Salsa Fiesta",
    "Chick-Fil-A",
    "Panera Bread",
    "Burger-Fi",
    "New York Grilled Cheese",
    "Olive Garden",
    "Chicken Guy",
    "Tropical Smoothie Cafe"
  ];

  let rIndex = Math.floor(Math.random() * restaurant.length);

  return restaurant[rIndex];
};
