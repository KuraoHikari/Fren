class AuthController {
 static loginPage(req, res) {
  return res.render("auth/login");
 }
 static registerPage(req, res) {
  res.render("auth/register");
 }
}

module.exports = AuthController;
