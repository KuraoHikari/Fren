const { Router } = require("express");
const {
 AuthController,
} = require("../controllers");
const upload = require("../lib/upload");

const router = Router();

router.get(
 "/login",
 AuthController.loginPage
);
router.get(
 "/register",
 AuthController.registerPage
);

router.post(
 "/register",
 upload.single("img"),
 AuthController.register
);

module.exports = router;
