const express = require("express");
const musicController = require("../controllers/music.controller")
const authMiddleware = require("../middlewares/auth.middleware")
const multer = require("multer");

const upload = multer({
    storage: multer.memoryStorage()
})

const router = express.Router();

router.post("/create-music", authMiddleware.authArtist, upload.single("music"), musicController.createMusic);
router.post("/create-album", authMiddleware.authArtist, musicController.albumCreate);
router.get("/", authMiddleware.authUser, musicController.getAllMusic);
router.get("/album", authMiddleware.authUser, musicController.getAllAlbum);
router.get("/album/:albumid", authMiddleware.authUser, musicController.getAlbumById);

module.exports = router;