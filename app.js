if (process.env.NODE_ENV !== "production") {
  require("dotenv").config();
}

const express = require("express");
const app = express();

const path = require("path");
const mongoose = require("mongoose");
const ejsMate = require("ejs-mate");
const methodOverride = require("method-override");

const User = require("./models/user");

const dbUrl = process.env.DB_URL;
//"mongodb://localhost:27017/user-list"
mongoose.connect(dbUrl, {
  useNewUrlParser: true,
});

const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error:"));
db.once("open", () => {
  console.log("Database Connected!!!");
});

app.engine("ejs", ejsMate);
app.set("view engine", "ejs");
app.set("path", path.join(__dirname, "views"));

app.use(express.urlencoded({ extended: true }));
app.use(methodOverride("_method"));

app.get("/", (req, res) => {
  res.render("home");
});

app.get("/users", async (req, res) => {
  const usrs = await User.find({});
  res.render("users/allUser", { usrs });
});

app.get("/users/new", (req, res) => {
  res.render("users/new");
});

app.post("/users", async (req, res) => {
  const user = new User(req.body.user);
  await user.save();
  res.redirect(`/users/${user._id}`);
});

app.get("/users/:id", async (req, res) => {
  const user = await User.findById(req.params.id);
  res.render("users/user1", { user });
  //res.send(user);
});
app.delete("/users/:id", async (req, res) => {
  const { id } = req.params;
  await User.findByIdAndDelete(id);

  res.redirect("/users");
  //res.send("Deleted!!!");
  //res.send(req.body);
});

app.get("/users/:id/edit", async (req, res) => {
  const user = await User.findById(req.params.id);
  res.render("users/edit", { user });
});

app.put("/users/:id", async (req, res) => {
  const { id } = req.params;
  const user = await User.findByIdAndUpdate(id, { ...req.body.user });
  res.redirect(`/users/${user._id}`);
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log("Serving on port 3000");
});
