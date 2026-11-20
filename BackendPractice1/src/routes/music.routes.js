const express = require("express");
const musicCotrollers = require("../controllers/music.controllers");
const multer = require("multer");
const artistMiddleware = require("../middlewares/artist.middleware");

const upload = multer({
    storage: multer.memoryStorage()
});

const router = express.Router();

router.post("/create-music", artistMiddleware, 
    upload.fields([{name: "music", maxCount: 1}, {name: "profile", maxCount: 1}]),
    musicCotrollers.createMusic
);

router.get("/get-all-music", artistMiddleware, musicCotrollers.getAllMusic);
router.get("/get-music-artist-id/:id", artistMiddleware, musicCotrollers.getMusicbyArtishId);

module.exports = router;