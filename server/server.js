const express = require("express");
const connectDB = require("./config/db");
const colors = require("colors");
const cors = require("cors");
const morgan = require("morgan");
const bodyParser = require("body-parser");

require("dotenv").config();

const userRoutes = require("./routes/userRoutes");

const app = express();
app.use(express.json()); // To accept json data

connectDB(); //connects to the db
if (process.env.NODE_ENV === "development") {
  app.use(
    cors({
      origin: process.env.CLIENT_URL,
    }),
  );
  app.use(morgan("dev"));
}

app.get("/", (req, res) => {
  res.send("You just hitted the API");
});
app.use("/api/user", userRoutes);

const PORT = process.env.PORT || 5001;

app.listen(PORT, console.log(`My app is running ${PORT}`.yellow.bold));
