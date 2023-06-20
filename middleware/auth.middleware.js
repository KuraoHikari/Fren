const {
 PrismaClient,
} = require("@prisma/client");

const prisma = new PrismaClient();

const Bcrypt = require("../utils/bcrypt");

class AuthMiddleware {
 static routeGuard(req, res, next) {
  if (req.isAuthenticated()) {
   return next();
  }

  res.redirect("/login");
 }
 static async authenticate(
  username,
  password,
  done
 ) {
  try {
   const user =
    await prisma.user.findUnique({
     where: {
      email: username,
     },
    });

   const isPasswordValid =
    await Bcrypt.compareHash(
     password,
     user.password
    );

   if (!isPasswordValid)
    throw new Error(
     "just create a new fuking account"
    );
   return done(null, user);
  } catch (err) {
   return done(null, false, {
    message: err.message,
   });
  }
 }
}

module.exports = AuthMiddleware;
