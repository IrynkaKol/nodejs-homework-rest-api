const { User } = require("../../models/user");
const path = require("path");
const fs = require("fs").promises;
const sizeAvatar = require('./sizeAvatar')

const avatarsDir = path.join(__dirname, "../../", "public", "avatars");

const updateAvatar = async (req, res) => {
  if (!req.body) {
    res.status(400).json({
      message: "Not authorized",
    });
  }
  const { _id } = req.user;
  const { path: tmpUpload, originalname } = req.file;
  const filename = `${_id}_${originalname}`;
  const resultUpload = path.join(avatarsDir, filename);
  await sizeAvatar(tmpUpload)
  await fs.rename(tmpUpload, resultUpload);
  const avatarURL = path.join("avatars", filename);
  await User.findByIdAndUpdate(_id, { avatarURL });

  res.status(200).json({ avatarURL });
};

module.exports = updateAvatar;
