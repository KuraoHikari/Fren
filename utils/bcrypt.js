const {
 hash,
 compare,
} = require("bcrypt");

class Bcrypt {
 static async generateHash(password) {
  return await hash(password, 10);
 }

 static async compareHash(
  password,
  hash
 ) {
  return await compare(password, hash);
 }
}

module.exports = Bcrypt;
