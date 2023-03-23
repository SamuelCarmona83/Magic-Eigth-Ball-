/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  // evento que se ejecuta al cargar la ventana
  //write your code here

  setTimeout(() => {
    //explicacion luego -> Promises

    let element = document.querySelector("#prediction"); // id
    let contorno = document.querySelector(".front"); // class
    contorno.classList = "back"; // class="front back bg-success"

    element.innerHTML = MagicEigthBall.randomPrediction(); //content
    element.style.color = "white"; // style
    element.style.fontSize = "18px";
  }, 8 * 1000); // espera 8 segundos antes de mostrar la prediccion
};

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
