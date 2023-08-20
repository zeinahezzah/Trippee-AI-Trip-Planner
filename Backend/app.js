var createError = require("http-errors");
var express = require("express");
const mongoose = require("mongoose");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");
const cors = require("cors");
const jwt = require("jsonwebtoken");
// const signupRouter = require("./routes/signup");
const loginRouter = require("./routes/login");
const personalizationRouter = require("./routes/personalization");
const recognitionRouter = require("./routes/recognition");
const explorationRouter = require("./routes/exploration");
const bodyParser = require("body-parser");

var app = express();
const uri =
  "mongodb+srv://seifborhan0:FdgFcUQAxuTQUoLw@trippee.czj7bsi.mongodb.net/?retryWrites=true&w=majority";
const PORT = process.env.PORT || "8000";

mongoose.connect(uri).then(() => {
  console.log("MongoDB is now connected!");
  // Starting server
  app.listen(PORT, () => {
    console.log(`Listening to requests on http://localhost:${PORT}`);
  });
});

// view engine setup
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");
app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "public")));
app.use(cookieParser());
app.use(bodyParser.json());
app.use(cors());

// Routes
// app.use("/signup", signupRouter);
app.use("/", loginRouter);
app.use("/", personalizationRouter);
app.use("/", recognitionRouter);
app.use("/", explorationRouter);


// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  // render the error page
  res.status(err.status || 500);
  //res.render("error");
});

// Middleware

// Protected route example using JWT authentication middleware
// app.get("/authorize", authenticateToken, (req, res) => {
//   res.json({ message: "This is a protected route", user: req.user });
// });

module.exports = app;
