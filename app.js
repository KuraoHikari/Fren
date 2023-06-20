const express = require("express");
const morgan = require("morgan");
const cors = require("cors");

const { Router } = require("express");
const app = express();

app.set("view engine", "ejs");

app.use(
 express.urlencoded({ extended: true })
);
app.use(express.json());
app.use(cors());
app.use(morgan("dev"));

const router = Router();

router.get("/", (req, res) => {
 res.send("masukk");
});
app.use(router);

app.listen(3000, () => {
 console.log(
  "Running on localhost:3000"
 );
});
