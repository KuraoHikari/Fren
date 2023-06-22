const {
 PrismaClient,
} = require("@prisma/client");

const prisma = new PrismaClient();

class ResponseController {
 static async like(req, res) {
  try {
   const userLike =
    await prisma.response.findFirst({
     where: {
      userId: Number(
       req.session.passport.user
      ),
      postId: Number(req.params.id),
     },
    });

   if (userLike === null) {
    await prisma.response.create({
     data: {
      userId: Number(
       req.session.passport.user
      ),
      postId: Number(req.params.id),
      like: true,
      dislike: false,
     },
    });
   } else if (
    userLike &&
    userLike.dislike === true
   ) {
    await prisma.response.update({
     where: {
      id: userLike.id,
     },
     data: {
      like: true,
      dislike: false,
     },
    });
   } else if (
    userLike &&
    userLike.like === true
   ) {
    await prisma.response.delete({
     where: {
      id: userLike.id,
     },
    });
   }
   res.redirect("/");
  } catch (err) {
   console.log(
    "🚀 ~ file: response.controller.js:49 ~ ResponseController ~ like ~ err:",
    err
   );

   req.flash("error", err.message);
   res.redirect("/");
  }
 }
 static async dislike(req, res) {
  try {
   const userDislike =
    await prisma.response.findFirst({
     where: {
      userId: Number(
       req.session.passport.user
      ),
      postId: Number(req.params.id),
     },
    });

   if (userDislike === null) {
    await prisma.response.create({
     data: {
      userId: Number(
       req.session.passport.user
      ),
      postId: Number(req.params.id),
      like: false,
      dislike: true,
     },
    });
   } else if (
    userDislike &&
    userDislike.like === true
   ) {
    await prisma.response.update({
     where: {
      id: userDislike.id,
     },
     data: {
      like: false,
      dislike: true,
     },
    });
   } else if (
    userDislike &&
    userDislike.dislike === true
   ) {
    await prisma.response.delete({
     where: {
      id: userDislike.id,
     },
    });
   }
   res.redirect("/");
  } catch (err) {
   console.log(
    "🚀 ~ file: response.controller.js:99 ~ ResponseController ~ dislike ~ err:",
    err
   );
   req.flash("error", err.message);
   res.redirect("/");
  }
 }
}

module.exports = ResponseController;
