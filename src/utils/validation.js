function isValidZipCode(zipCode) {
  return /^\d{5}$/.test(zipCode);
}

function normalizeScale(scale) {
  if (!scale) {
    return "Fahrenheit";
  }

  if (scale === "Fahrenheit" || scale === "Celsius") {
    return scale;
  }

  return null;
}

module.exports = {
  isValidZipCode,
  normalizeScale
};