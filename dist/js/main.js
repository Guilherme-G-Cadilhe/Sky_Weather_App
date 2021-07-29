import { addSpinner, displayError } from "./domFunctions.js";
import CurrentLocation from "./CurrentLocation.js";
const currentLoc = new CurrentLocation();

// ----- Main --------
const initApp = () => {
  const geoButton = document.getElementById("getLocation");
  geoButton.addEventListener("click", getGeoWeather);
  // add listeners
  // set up
  // load weather
};
document.addEventListener("DOMContentLoaded", initApp);

//  --- Functions ---
const getGeoWeather = (event) => {
  if (event) {
    if (event.type === "click") {
      // add  and remove spinner loading effect
      const mapIcon = document.querySelector(".fa-map-marker-alt");
      addSpinner(mapIcon);
    }
  }
  if (!navigator.geolocation) return geoError();
  navigator.geolocation.getCurrentPosition(geoSuccess, geoError);
};

const geoError = (errObj) => {
  const errMsg = errObj ? errObj.message : "Geolocation not Supported";
  displayError(errMsg, errMsg); // Mostra Header Error e Screen Reader Error
};

const geoSucess = (position) => {
  const myCoordsObj = {
    lat: position.coords.latitude,
    lon: position.coords.longitude,
    name: `Lat:${position.coords.latitude} Long:${position.coords.longitude}`
  }
  setLocationObject(currentLoc, myCoordsObj)
  // update data and display
}

//   <div class="icon" id="icon" style="color: yellow">
//   <i class="fas fa-sun" aria-hidden="true" title="clear sky"></i>
// </div>
// <div class="temp">
//   59°
//   <div class="unit">F</div>
// </div>
// <div class="desc">Clear Sky</div>
// <div class="feels">Feels Like 53°</div>
// <div class="maxtemp">High 62°</div>
// <div class="mintemp">Low 39°</div>
// <div class="humidity">Humidity 44%</div>
// <div class="wind">Wind 7 mph</div>
