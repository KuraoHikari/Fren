const {
 Router,
 application,
} = require("express");
const authRouter = require("./auth.router");
const postRouter = require("./post.router");
const responseRouter = require("./response.router");
const {
 AuthMiddleware,
} = require("../middleware");

const router = Router();

router.use(authRouter);

router.use(AuthMiddleware.routeGuard);

router.use(postRouter);

router.use(responseRouter);

// router.use((req, res, next) => {
//  res.status(404).render("pages/404");
// });
module.exports = router;
