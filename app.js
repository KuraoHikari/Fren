const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const router = require("./routes");
const path = require("path");

const app = express();

app.set("view engine", "ejs");

app.use(
 express.urlencoded({ extended: true })
);
app.use(express.json());
app.use(cors());
app.use(morgan("dev"));
app.use(
 express.static(
  path.join(__dirname, "public")
 )
);

app.use(router);

app.listen(3000, () => {
 console.log(
  "Running on localhost:3000"
 );
});
