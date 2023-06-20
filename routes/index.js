const { Router } = require("express");
const authRouter = require("./auth.router");
const postRouter = require("./post.router");
const responseRouter = require("./response.router");

const router = Router();

router.use(authRouter);

router.use(postRouter);

router.use(responseRouter);

// router.use((req, res, next) => {
//  res.status(404).render("pages/404");
// });
module.exports = router;
