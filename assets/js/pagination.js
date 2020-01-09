const btn1 = document.getElementById("btn1");
const pag1 = document.getElementById("pag1");

const btn2 = document.getElementById("btn2");
const pag2 = document.getElementById("pag2");

const btn3 = document.getElementById("btn3");
const pag3 = document.getElementById("pag3");

const btn4 = document.getElementById("btn4");
const pag4 = document.getElementById("pag4");

btn1.addEventListener("click", function() {
      pag1.style.display = "block";
      pag2.style.display = "none";
      pag3.style.display = "none";
      pag4.style.display = "none";
});

btn2.addEventListener("click", function() {
      pag1.style.display = "none";
      pag2.style.display = "block";
      pag3.style.display = "none";
      pag4.style.display = "none";
});

btn3.addEventListener("click", function() {
      pag1.style.display = "none";
      pag2.style.display = "none";
      pag3.style.display = "block";
      pag4.style.display = "none";
});

btn4.addEventListener("click", function() {
      pag1.style.display = "none";
      pag2.style.display = "none";
      pag3.style.display = "none";
      pag4.style.display = "block";
});