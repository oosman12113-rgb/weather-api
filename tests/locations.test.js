process.env.OPENWEATHER_API_KEY = "test_api_key";

const request = require("supertest");

jest.mock("../src/services/weatherService", () => ({
  getTemperatureByZip: jest.fn()
}));

const app = require("../src/app");
const { getTemperatureByZip } = require("../src/services/weatherService");

describe("GET /locations/:zipCode", () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  test("returns Fahrenheit by default", async () => {
    getTemperatureByZip.mockResolvedValue({
      temperature: 43,
      scale: "Fahrenheit"
    });

    const response = await request(app).get("/locations/24060");

    expect(response.statusCode).toBe(200);
    expect(response.body).toEqual({
      temperature: 43,
      scale: "Fahrenheit"
    });
  });

  test("returns Celsius when requested", async () => {
    getTemperatureByZip.mockResolvedValue({
      temperature: 25,
      scale: "Celsius"
    });

    const response = await request(app).get("/locations/90210?scale=Celsius");

    expect(response.statusCode).toBe(200);
    expect(response.body).toEqual({
      temperature: 25,
      scale: "Celsius"
    });
  });

  test("returns 400 for invalid zip code", async () => {
    const response = await request(app).get("/locations/24A60");

    expect(response.statusCode).toBe(400);
  });

  test("returns 400 for invalid scale", async () => {
    const response = await request(app).get("/locations/24060?scale=Kelvin");

    expect(response.statusCode).toBe(400);
  });
});