const {
 hash,
 compare,
} = require("bcrypt");

class Bcrypt {
 static async generateHash(password) {
  return await hash(password, salt);
 }

 static async compareHash(
  password,
  hash
 ) {
  return await compare(password, hash);
 }
}

module.exports = Bcrypt;
