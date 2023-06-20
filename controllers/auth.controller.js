const {
 PrismaClient,
 Prisma,
} = require("@prisma/client");
const Bcrypt = require("../utils/bcrypt");
const prisma = new PrismaClient();

class AuthController {
 static loginPage(req, res) {
  return res.render("auth/login");
 }
 static registerPage(req, res) {
  res.render("auth/register");
 }

 static async register(req, res) {
  try {
   const { email, password } = req.body;

   await prisma.user.create({
    data: {
     email: email,
     password:
      await Bcrypt.generateHash(
       password
      ),
     imageUrl: req.file.filename,
    },
   });

   res.redirect("/login");
  } catch (err) {
   console.log(
    "🚀 ~ file: auth.controller.js:33 ~ AuthController ~ register ~ err:",
    err
   );
   if (
    err instanceof
    Prisma.PrismaClientKnownRequestError
   ) {
    if (err.code === "P2002") {
     req.flash(
      "error",
      "damnn your email is already sold out :v"
     );
    }
   }
   res.render("auth/register");
  }
 }
 static async login(req, res, next) {
  return await passport.authenticate(
   "local",
   {
    successRedirect: "/",
    failureRedirect: "/login",
    failureFlash: true,
   }
  )(req, res, next);
 }
 static async logout(req, res, next) {
  req.logout((err) => {
   if (err) {
    return next(err);
   }

   res.redirect("/login");
  });
 }
}

module.exports = AuthController;
