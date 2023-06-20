const { Router } = require("express");
const {
 AuthController,
} = require("../controllers");

const router = Router();

router.get(
 "/login",
 AuthController.loginPage
);
router.get(
 "/register",
 AuthController.registerPage
);

module.exports = router;
