const passport = require("passport");
const LocalStrategy =
 require("passport-local").Strategy;
const {
 PrismaClient,
} = require("@prisma/client");
const {
 AuthMiddleware,
} = require("../middleware");

const prisma = new PrismaClient();

passport.use(
 new LocalStrategy(
  {
   usernameField: "email",
   passwordField: "password",
  },
  AuthMiddleware.authenticate
 )
);

passport.serializeUser((user, done) => {
 return done(null, user.id);
});
passport.deserializeUser(
 async (id, done) =>
  done(
   null,
   await prisma.user.findUnique({
    where: { id },
   })
  )
);

module.exports = passport;
