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
    const WHO = [
      "El perro",
      "Mi gato",
      "El cartero",
      "Mi pájaro",
      "El vecino",
      "Un extraterrestre",
      "Mi abuela",
      "El fantasma",
      "Un payaso",
      "Mi hermano",
      "La policía",
      "Un ladrón",
      "El presidente",
      "Un mago",
      "Mi profesor",
      "El jardinero",
      "Un dragón",
      "La televisión",
      "El chef",
      "El mecánico",
      "Un robot",
      "El electricista",
      "Un conejo",
      "Mi tío",
      "Una cabra",
      "El fontanero",
      "El bombero",
      "El cocodrilo",
      "Un oso",
      "El ratón"
    ];

    const ACTION = [
      "comió",
      "orinó en",
      "aplastó",
      "rompió",
      "robó",
      "quemó",
      "escondió",
      "perdió",
      "destruyó",
      "pintó",
      "mordió",
      "escupió",
      "rayó",
      "arrancó",
      "ensució",
      "sabotajeó",
      "se deshizo de",
      "vandalizó",
      "perforó",
      "voló",
      "manchó",
      "echó a perder",
      "derrumbó",
      "aplastó",
      "reventó",
      "tritó",
      "rasgó",
      "empapó",
      "desconfiguró",
      "zumbó"
    ];

    const WHAT = [
      "mi tarea",
      "mi teléfono",
      "el coche",
      "mi computadora",
      "el libro",
      "la ropa",
      "los deberes",
      "la bicicleta",
      "el proyecto",
      "la pizza",
      "el informe",
      "el ensayo",
      "la cámara",
      "el pastel",
      "los zapatos",
      "el reloj",
      "la televisión",
      "el regalo",
      "el juguete",
      "la planta",
      "el sofá",
      "la lámpara",
      "la puerta",
      "la ventana",
      "el teclado",
      "el ratón",
      "el escritorio",
      "la mochila",
      "la guitarra",
      "el piano"
    ];

    const WHEN = [
      "después de clases",
      "cuando iba a dormir",
      "mientras hacía ejercicio",
      "durante el almuerzo",
      "mientras estaba orando",
      "en la madrugada",
      "en medio de la noche",
      "cuando estaba en el baño",
      "en la fiesta",
      "durante el examen",
      "en el cumpleaños de mi amigo",
      "cuando jugaba videojuegos",
      "mientras cocinaba",
      "cuando paseaba al perro",
      "en el parque",
      "cuando estaba estudiando",
      "en la biblioteca",
      "durante el viaje",
      "mientras estaba en el trabajo",
      "cuando limpiaba la casa",
      "en la piscina",
      "cuando estaba nadando",
      "durante la lluvia",
      "mientras hablaba por teléfono",
      "cuando estaba comprando",
      "durante la película",
      "cuando estaba en clase",
      "mientras conducía",
      "en la boda",
      "durante la siesta"
    ];

    let whoindex = Math.floor(Math.random() * WHO.length);
    let actionindex = Math.floor(Math.random() * ACTION.length);
    let whatindex = Math.floor(Math.random() * WHAT.length);
    let whenindex = Math.floor(Math.random() * WHEN.length);

    return (
      WHO[whoindex] +
      " " +
      ACTION[actionindex] +
      " " +
      WHAT[whatindex] +
      " " +
      WHEN[whenindex]
    );
  };
};
