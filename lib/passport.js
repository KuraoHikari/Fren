const passport = require("passport");
const LocalStrategy =
 require("passport-local").Strategy;
const {
 PrismaClient,
} = require("@prisma/client");

const prisma = new PrismaClient();

passport.use(
 new LocalStrategy(
  {
   usernameField: "email",
   passwordField: "password",
  },
  authenticate
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
