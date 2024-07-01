/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";
// FUNCION
window.onload = function() {
  // VARIABLES DE LA FUNCION
  const pronouns = ["the", "our", "col"];

  const adjs = ["great", "big", "geeks"];

  const nouns = ["jogger", "racoon", "rigo"];

  const complements = [".com", ".es", ".net", ".us", ".ios"];

  const getRandomNumber = arr => arr[Math.floor(Math.random() * arr.length)];

  const generarDominio = () => {
    const pronoun = getRandomNumber(pronouns);
    const adj = getRandomNumber(adjs);
    const noun = getRandomNumber(nouns);
    const complement = getRandomNumber(complements);

    let dominio;
    if (noun.endsWith(complement.slice(1))) {
      dominio = `${pronoun}${adj}${pronoun.slice(
        0,
        -complement.length + 1
      )}${complement}`;
      document.querySelector("#placeholderDominio").innerHTML = [
        "<strong>",
        dominio,
        "</strong>"
      ];
    } else {
      dominio = `${pronoun}${adj}${noun}${complement}`;
      document.querySelector("#generated").innerHTML = dominio;
      document.querySelector("#Tittle").innerHTML = [
        "EH AQUI TU NUEVO DOMINIO:"
      ];
      document.querySelector("#image").src =
        "https://i.imgflip.com/rltaf.jpg?a477264";
    }
  };

  document.querySelector("#tryAgain").addEventListener("click", generarDominio);
};
