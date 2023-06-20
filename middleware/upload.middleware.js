const multer = require("multer");
const upload = require("../lib/upload");

class UploadMiddleware {
 static handle(req, res, next) {
  upload.single("img")(
   req,
   res,
   function (err) {
    if (
     err instanceof multer.MulterError
    ) {
     // Handle Multer errors
     console.error(err);
     res
      .status(400)
      .json({
       message: "File upload error",
      });
    } else if (err) {
     // Handle other errors
     console.error(err);
     res
      .status(500)
      .json({
       message: "Server error",
      });
    } else {
     // Proceed to the next middleware
     next();
    }
   }
  );
 }
}

module.exports = UploadMiddleware;
