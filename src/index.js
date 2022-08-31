import express from "express";
import { engine } from "express-handlebars";
import path from "path";

const app = express();
const port = 3001;
const __dirname = path.resolve();

app.use(express.static(path.join(__dirname, "src\\public")));

// Template engines
app.engine(
  "hbs",
  engine({
    extname: ".hbs",
  })
);

app.set("view engine", "hbs");
app.set("views", path.join(__dirname, "src\\resources\\views"));

app.get("/", (req, res) => {
  res.render("home");
});

app.get("/news", (req, res) => {
  console.log(req.query.q);

  res.render("news");
});

app.get("/search", (req, res) => {
  res.render("search");
});

app.listen(port, () => {
  console.log(`Example app listening on port http://localhost:${port}`);
});
