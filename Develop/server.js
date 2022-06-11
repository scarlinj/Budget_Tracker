const express = require("express");
const logger = require("morgan");
const mongoose = require("mongoose");
const compression = require("compression");

const PORT = process.env.PORT || 3001;
const MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost/budget_tracker";

const app = express();

app.use(logger("dev"));

app.use(compression());
app.use(express.urlencoded({
  extended: true
}));
app.use(express.json());

app.use(express.static("public"));

// is 27017 for Mongoose?
// mongoose.connect(MONGODB_URI || 'mongodb://localhost:27017/budget_tracker', {
  process.env.MONGODB_URI || 'mongodb://localhost:27017/budget_tracker', {
  useNewUrlParser: true,
  useFindAndModify: false,
};

// removed from process.env above: useUnifiedTopology: true
// routes
// app.use(require("./routes/api.js"));
// app.use("./routes/api");
app.use('/api', require('./routes/api'));


app.listen(PORT, () => {
  console.log(`App running on port ${PORT}!`);
});
