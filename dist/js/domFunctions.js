// ------- Main Functions ----------

export const addSpinner = (element) => {
  animateButton(element); //Chama helper function
  setTimeout(animateButton, 1000, element); //Depois de animar, ele chama novamente a
  // função de animar com o elemento, dessa vez para parar a animação baseado no código
  // da helper function que anima.
};

export const displayError = (headerMsg, srMsg) => {
  updateWeatherLocationHeader(headerMsg);
  updateScreenReaderConfirmation(srMsg);
};

// ------ Helper Functions ---------

const animateButton = (element) => {
  element.classList.toggle("none"); //Adicionar ou remove classe None para o elemento
  element.nextElementSibling.classList.toggle("block"); //elemento irmão recebe ou perde classe Block
  element.nextElementSibling.classList.toggle("none"); //elemento irmão perde ou recebe classe none
};

const updateWeatherLocationHeader = (message) => {
  const h2 = document.getElementById("currentForecast__location");
  h2.textContent = message;
};

const updateScreenReaderConfirmation = (message) => {
  document.getElementById("confirmation").textContent = message;
};
