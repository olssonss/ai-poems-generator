function generatePoem(event) {
  event.preventDefault();

  new Typewriter("#poem-display", {
    strings:
      "Whose woods these are I think I know. His house is in the village though; He will not see me stopping here To watch his woods fill up with snow.",
    autoStart: true,
    delay: 2,
    cursor: "",
  });
}

let poemFormElement = document.querySelector("#poem-generator-form");
poemFormElement.addEventListener("submit", generatePoem);
