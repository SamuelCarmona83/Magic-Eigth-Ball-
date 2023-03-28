/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

let destiny = "";
let inputElement = document.querySelector("#destinyInput");
let textInput = document.querySelector("#textInput");
let shakeButton = document.querySelector("#shake");

window.onload = function() {
  // evento que se ejecuta al cargar la ventana
  //write your code here

  shakeButton.addEventListener("click", shakeEigthBall);

  inputElement.addEventListener("keyup", event => {
    destiny = event.target.value;
  });
};

function shakeEigthBall() {
  let contorno = document.querySelector(".contorno"); // class
  contorno.classList = "contorno front";
  let element = document.querySelector("#prediction"); // id
  element.innerHTML = "8";
  element.style.color = "black"; // style
  element.style.fontSize = "48px";
  setTimeout(() => {
    //explicacion luego -> Promises
    contorno.classList = "contorno back"; // class="front back bg-success"
    element.innerHTML = MagicEigthBall.randomPrediction(); //content
    element.style.color = "white"; // style
    element.style.fontSize = "12px";
    textInput.textContent = destiny;
    inputElement.style.opacity = 0;
    shakeButton.style.opacity = 0;
  }, 2 * 1000);
}

const MagicEigthBall = {
  answers: [
    `It is certain`,
    `It is decidedly so`,
    `Without a doubt`,
    `Yes definitely`,
    `You may rely on it`,
    `As I see it, yes`,
    `Most likely`,
    `Outlook good`,
    `Yes`,
    `Signs point to yes`,
    `Reply hazy, try again`,
    `Ask again later`,
    `Better not tell you now`,
    `Cannot predict now`,
    `Concentrate and ask again`,
    `Don't count on it`,
    `My reply is no`,
    `My sources say no`,
    `Outlook not so good`,
    `Very doubtful`,
    `Ni un brillo pelao`
  ],

  type: "Toy", // properties
  age: 1, // properties
  randomPrediction: function() {
    return this.answers[Math.floor(Math.random() * this.answers.length)];
    // this -> Cambia segun el contexto de ejecucion
  }
};
