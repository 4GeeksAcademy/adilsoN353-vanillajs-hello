/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  document.querySelector("#boton").addEventListener("click", () => {
    document.querySelector("#the-excuse").innerHTML = generatorexcuse();
    //write your code here
  });
  let randomnumber = Math.random() * 10;

  let generatorexcuse = () => {
    let who = ["El perro", "Mi ", "El cartero", "Mi pajaro"];
    let action = ["comio", "orinar", "aplastada", "rompio"];
    let what = ["mi tarea", "mi telefono", "el coche"];
    let when = [
      "despues de clases",
      "cuando iba a dormir",
      "mientras hacia ejercicio",
      "durante el ealmuerzo",
      "mientras estaba orando"
    ];

    let whoindex = Math.floor(Math.random() * who.length);
    let actionindex = Math.floor(Math.random() * action.length);
    let whatindex = Math.floor(Math.random() * what.length);
    let whenindex = Math.floor(Math.random() * when.length);

    return (
      who[whoindex] +
      " " +
      action[actionindex] +
      " " +
      what[whatindex] +
      " " +
      when[whenindex]
    );
  };
};
