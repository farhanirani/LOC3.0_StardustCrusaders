const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();
const PORT = process.env.PORT || 4000;
const path = require("path");

const app = express();

app.use(express.json());
app.use(cors());

const routes = require("./routes");
app.use("/api", routes);

if (process.env.NODE_ENV === "production") {
  // Serve any static files
  app.use(express.static(path.join(__dirname, "client/build")));

  // Handle React routing, return all requests to React app
  app.get("*", function (req, res) {
    res.sendFile(path.join(__dirname, "client/build/index.html"));
  });
}

// mongoDB connection
mongoose
  .connect(process.env.MONGODB_CONNECTION_STRING, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
  })
  .then(() => console.log("MongoDB Connected!"))
  .catch((err) => console.log(err));

// start server
app.listen(PORT, () => console.log(`The server has started on port: ${PORT}`));
