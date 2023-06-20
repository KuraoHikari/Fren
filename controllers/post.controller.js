const {
 PrismaClient,
 Prisma,
} = require("@prisma/client");

const passport = require("../lib/passport");

const prisma = new PrismaClient();

class PostController {
 static async homePage(req, res) {
  try {
   const user =
    await prisma.user.findUnique({
     where: {
      id: Number(
       req.session.passport.user
      ),
     },
    });
   if (user === null) {
    return next();
   }

   const posts =
    await prisma.post.findMany({
     include: {
      user: true,
      responses: true,
     },
    });
   posts.forEach((post) => {
    if (post.user) {
     delete post.user.password;
    }
   });

   console.log(posts);

   delete user.password;

   res.render("index", {
    user: user,
    posts: posts,
   });
  } catch (error) {
   req.flash("error", err.message);
   res.redirect("/");
  }
 }
 static async create(req, res) {
  try {
   const { desc } = req.body;
   await prisma.post.create({
    data: {
     desc: desc,
     userId: Number(
      req.session.passport.user
     ),
    },
   });

   res.redirect("/");
  } catch (error) {
   req.flash("error", err.message);
   res.redirect("/");
  }
 }
}

module.exports = PostController;
