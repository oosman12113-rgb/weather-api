require("dotenv").config();

async function getTemperatureByZip(zipCode, scale = "Fahrenheit") {
  const apiKey = process.env.OPENWEATHER_API_KEY;
  console.log("API key value:", process.env.OPENWEATHER_API_KEY);

  if (!apiKey) {
    const error = new Error("Missing API key");
    error.statusCode = 500;
    throw error;
  }

  const units = scale === "Celsius" ? "metric" : "imperial";
  const url = `https://api.openweathermap.org/data/2.5/weather?zip=${zipCode},us&appid=${apiKey}&units=${units}`;

  console.log("Request URL:", url);

  const response = await fetch(url);

  if (response.status === 404) {
    const error = new Error("ZIP code not found");
    error.statusCode = 404;
    throw error;
  }

  if (!response.ok) {
    const errorText = await response.text();
    console.log("OpenWeather error response:", response.status, errorText);

    const error = new Error(`Failed to fetch weather data: ${response.status}`);
    error.statusCode = 502;
    throw error;
  }

  const data = await response.json();

  return {
    temperature: Math.round(data.main.temp),
    scale: scale
  };
}

module.exports = {
  getTemperatureByZip
};