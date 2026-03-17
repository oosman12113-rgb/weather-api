const express = require("express");
const locationsRouter = require("./routes/locations");

const app = express();

app.use(express.json());

//main route
app.use("/locations", locationsRouter);

// fallback route
app.use((req, res) => {     
    res.status(404).json({ error: "Route not found" });
});

module.exports = app;
