const express = require("express");
const mongoose = require("mongoose");

const artistRoute = require("./routes/artist.route");
const albumRoute = require("./routes/albums.route");
const trackRoute = require("./routes/tracks.route");

const app = express();
const PORT = 8000;

app.use(express.json());
app.use("/artists", artistRoute);
app.use("/albums", albumRoute);
app.use("/tracks", trackRoute);

const start = async () => {
  await mongoose.connect("mongodb://localhost/lastFm", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true
  });

  app.listen(PORT, () => {
    console.log(`Server started on port ${PORT}`);
  });
};

start();
