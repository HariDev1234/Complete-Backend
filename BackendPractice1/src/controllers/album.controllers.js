const albumModel = require("../models/album.model");

async function createAlbum(req, res) {
    const { title, musics } = req.body;

    const album = await albumModel.create({
        title: title,
        musics: musics,
        artist: req.user.id
    });

    return res.status(200).json({
        message: "Album created successfully",
        data: {
            id: album._id,
            title: album.title,
            musics: album.musics,
            artist: album.artist
        }
    })
};

async function getAllAlbum(req, res) {

    const result = await albumModel.find().select("title artist").populate("artist", "user_name role");

    return res.status(200).json({
        message: "Album fetched successfully",
        data: result
    });
}

async function getAlbumById(req, res) {
    const { id } = req.params;

    const result = await albumModel.findById(id).populate("musics");

    return res.status(200).json({
        message: "Data fetched succefully",
        data: result
    })
}


module.exports = { createAlbum, getAllAlbum, getAlbumById };