const express = require("express");
const albumControllers = require("../controllers/album.controllers");
const artistMiddleware = require("../middlewares/artist.middleware");
const authMiddleware = require("../middlewares/auth.middleware");


const router = express.Router();

router.post("/create-album", artistMiddleware, albumControllers.createAlbum);
router.get("/get-all-album", authMiddleware, albumControllers.getAllAlbum);
router.get("/get-albumby-id/:id", authMiddleware, albumControllers.getAlbumById)

module.exports = router;