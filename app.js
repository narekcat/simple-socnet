const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const port = 3000;

app.set("view engine", "pug");

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

app.get("/", (req, res) =>
  res.render("index.pug", { title: "Home page", message: "Home page" })
);

app.get("/signin", (req, res) => {
  res.render("signin.pug", {
    title: "Signin page",
    message: "Enter you email and password to Signin",
    data: {},
    errors: {}
  })
});

app.post("/signin", (req, res) => {
  console.log(req.body);
  res.render("signin.pug", {
    title: "Signin page",
    message: "Enter you email and password to Signin",
    data: {},
    errors: {}
  })
});

app.get("/signup", (req, res) => {
  res.render("signup.pug", {
    title: "Signup page",
    message: "Enter you email and password to Signup",
    data: {},
    errors: {}
  });
});

app.post("/signup", (req, res) => {
  console.log(req.body);
  res.render("signup.pug", {
    title: "Signup page",
    message: "Enter you email and password to Signup",
    data: {},
    errors: {}
  });
});

app.listen(port, () => console.log(`Application is listening on port ${port}`));
