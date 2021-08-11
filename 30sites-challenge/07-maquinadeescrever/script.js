function typeWriter(elemento) {
  const textArray = elemento.innerHTML.split("");
  elemento.innerHTML = "";

  textArray.forEach((letter, i) => {
    setTimeout(() => (elemento.innerHTML += letter), 75 * i);
  });
}

const title = document.querySelector("h1");
typeWriter(title);

typeWriter(document.querySelector("p"));
