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
router.post(
 "/login",
 AuthController.login
);
router.post(
 "/logout",
 AuthController.logout
);

module.exports = router;
