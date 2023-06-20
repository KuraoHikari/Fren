const { Router } = require("express");
const {
 PostController,
} = require("../controllers");

const router = Router();

router.get(
 "/",
 PostController.homePage
);

router.post("/", PostController.create);

module.exports = router;
