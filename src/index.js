import express from "express";
import { engine } from "express-handlebars";
import path from "path";
import route from "./routes";

const app = express();
const port = 3001;
const __dirname = path.resolve();

app.use(express.static(path.join(__dirname, "src/public")));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Template engines
app.engine(
  "hbs",
  engine({
    extname: ".hbs",
  })
);

app.set("view engine", "hbs");
app.set("views", path.join(__dirname, "src/resources/views"));

// Route init
route(app);

app.listen(port, () => {
  console.log(`Example app listening on port http://localhost:${port}`);
});
