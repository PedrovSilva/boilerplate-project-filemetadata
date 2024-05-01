const express = require("express");
const router = express.Router();
const multer = require("multer");
const upload = multer({ dest: "uploads/" });

router.route("/api/fileanalyse").post(upload.single("upfile"), (req, res) => {
  const file = req.file;
  if (!file) {
    return res.status(400).send("No files were uploaded.");
  }
  res.json({
    name: file.originalname,
    type: file.mimetype,
    size: file.size,
  });
});

module.exports = router;
