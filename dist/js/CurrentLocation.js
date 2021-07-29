export default class CurrentLocation {
  constructor() {
    this._name = "Local Atual";
    this._lat = null;
    this._lon = null;
    this._unit = "metric";
  }
  //Localização Atual
  getName() {
    return this._name;
  }
  setName(name) {
    this._name = name;
  }

  // Posição Latitude
  getLat() {
    return this._lat;
  }
  setLat(lat) {
    this._lat = lat;
  }

  // Posição Longitude
  getLon() {
    return this._lon;
  }
  setLon(lon) {
    this._lon = lon;
  }

  // Unidade de Medida da Temperatura
  getUnit() {
    return this._unit;
  }
  setUnit(unit) {
    this._unit = unit;
  }
  toggleUnit() {
    this._unit = this._unit === "imperial" ? "metric" : "imperial";
  }
}
