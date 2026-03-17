const express = require("express");
const router = express.Router();

const { getTemperatureByZip } = require("../services/weatherService");
const { isValidZipCode, normalizeScale } = require("../utils/validation");

router.get("/:zipCode", async (req, res) => {
  const zipCode = req.params.zipCode;
  const scale = normalizeScale(req.query.scale);

  if (!isValidZipCode(zipCode)) {
    return res.status(400).json({
      error: "Invalid ZIP code"
    });
  }

  if (!scale) {
    return res.status(400).json({
      error: 'Invalid scale. Use "Fahrenheit" or "Celsius".'
    });
  }

  try {
    const result = await getTemperatureByZip(zipCode, scale);
    res.status(200).json(result);
  } catch (error) {
    res.status(error.statusCode || 500).json({
      error: error.message
    });
  }
});

module.exports = router;