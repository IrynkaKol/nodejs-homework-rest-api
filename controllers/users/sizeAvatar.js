const Jimp = require("jimp");

const sizeAvatar = async (imagePath) =>

  new Promise((resolve) => {
    try {
      Jimp.read(imagePath, (err, image) => {
        if (err) {
          resolve(false);
        } else {
          image.resize(250, 250).write(imagePath);
          resolve(true);
        }
      });
    } catch (err) {
      console.log(err);
    }
  });

module.exports = sizeAvatar;
