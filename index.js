const express = require("express");
const cors = require("cors");
const app = express();
const data = require("./data.json");
const dotenv = require("dotenv");
dotenv.config();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send(data);
});

app.get("/:id", (req, res) => {
  const id = req.params.id;
  const food = data.find((food) => food.id === Number(id));
  res.send(food);
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server started on port http://localhost:${PORT}`);
});
