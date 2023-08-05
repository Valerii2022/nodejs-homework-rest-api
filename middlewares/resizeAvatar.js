import Jimp from "jimp";

const resizeAvatar = (req, res, next) => {
  if (req.file) {
    Jimp.read(req.file.path, function (err, test) {
      if (err) throw err;
      test.resize(250, 250).write("./temp/" + req.file.filename);
    });
  }
  next();
};

export default resizeAvatar;
