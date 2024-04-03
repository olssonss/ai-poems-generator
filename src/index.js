function displayPoem(response) {
  new Typewriter("#poem-display", {
    strings: response.data.answer,
    autoStart: true,
    delay: 50,
    cursor: "",
  });
}

function generatePoem(event) {
  event.preventDefault();

  let poemInstructions = document.querySelector("#poem-instructions");
  let apiKey = "0t8731da5a2bb2381d3aa917c46ffb8o";
  let context =
    "You are an expert in poems and an excel at writing short beautiful nature poems. The poem should be 4-lines and written in basic HTML. Write the full poem in the SAME language as the word the user provides. ONLY answer with the poem. Never Include titles. The poems should always be about nature, but include the topic from the instructions. Always follow the user-istructions below.";
  let prompt = `user-instruction: Write a landscape poem about ${poemInstructions.value}`;
  let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

  let poemElement = document.querySelector("#poem-display");
  poemElement.classList.remove("hidden");
  poemElement.innerHTML = `<div class="generate">⏳Generating a poem about ${poemInstructions.value} for you :)</div>`;

  axios.get(apiUrl).then(displayPoem);
}

let poemFormElement = document.querySelector("#poem-generator-form");
poemFormElement.addEventListener("submit", generatePoem);
