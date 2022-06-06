const url = "https://api.adviceslip.com/advice";

// dom objects
const advice_id = document.querySelector(".advice-id");
const advice_text = document.querySelector(".advice-text");
const refresh_button = document.querySelector(".refresh-button");

// api call

/**
 *
 * fetch(url) => returns a promise
 * handle promise using await
 *
 * then api returns a json => we cannot access the direct
 * json eg - response.slip.advice etc
 *
 * we need to convert the response to json
 * response.json() - returns a promise again..
 *
 * store that into message or body variable and access the api keys accordingly
 *
 * see the below example -
 *
 */
async function getAdvice() {
  let response = await fetch(url);
  let message = await response.json();

  advice_id.textContent = `advice #${message.slip.id}`;
  advice_text.textContent = `"${message.slip.advice}."`;
}

getAdvice();

refresh_button.addEventListener("click", () => {
  getAdvice();
});
