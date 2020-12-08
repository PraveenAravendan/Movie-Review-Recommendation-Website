const express = require("express");
const app = express();

const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");

const config = require("./config/key");

const mongoose = require("mongoose");
const connect = mongoose.connect(config.mongoURI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB Connected...'))
  .catch(err => console.log(err));

app.use(bodyParser.urlencoded({ extended: true }));

app.use(bodyParser.json());

app.use(cookieParser());

app.use('/api/users', require('./routes/users'));

app.use('/api/comment', require('./routes/comment'));

app.use('/api/like', require('./routes/like'));

app.use('/api/favorite', require('./routes/favorite'));


app.use('/uploads', express.static('uploads'));


if (process.env.NODE_ENV === "production") {

  app.use(express.static("client/build"));

  
  app.get("*", (req, res) => {
    
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
  
  });
}

const port = process.env.PORT || 5000

app.listen(port, () => {
  console.log(`Server Running at ${port}`)
});