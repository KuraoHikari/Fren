const { Router } = require("express");
const {
 AuthController,
} = require("../controllers");
const upload = require("../lib/upload");
const {
 UploadMiddleware,
} = require("../middleware");

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
 UploadMiddleware.handle,
 AuthController.register
);

module.exports = router;
