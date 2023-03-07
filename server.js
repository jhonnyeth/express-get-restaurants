const express = require("express");
const app = express();
const { Restaurant } = require("./models/index");
const { sequelize } = require("./db");

const port = 3500;

//TODO: Create your GET Request Route Below:
app.get("/restaurants", async (request, response) => {
  response.json(await Restaurant.findAll());
});

//Part 2
app.get("/restaurants/:id", async (request, response) => {
  const restaurant = await Restaurant.findByPk(request.params.id);
  response.json(restaurant);
});

app.listen(port, () => {
  sequelize.sync();
  console.log("Your server is listening on port " + port);
});
