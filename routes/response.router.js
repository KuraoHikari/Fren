const { Router } = require("express");

const {
 ResponseController,
} = require("../controllers");
const router = Router();

router.post(
 "/like/:id",
 ResponseController.like
);
router.post(
 "/dislike/:id",
 ResponseController.dislike
);

module.exports = router;
