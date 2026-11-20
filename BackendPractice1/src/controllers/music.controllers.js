const musicModel = require("../models/music.model");
const { uploadFile } = require("../service/storage.service");


async function createMusic(req, res) {
    const { title } = req.body;
    const file = req.files.music[0];
    const profile = req.files.profile[0];

    console.log(req.files, "filesss")
    const result = await uploadFile(file.buffer.toString("base64"));
    const Profileresult = await uploadFile(profile.buffer.toString("base64"));

    const music = await musicModel.create({
        title: title,
        uri: result.url,
        profile: Profileresult.url,
        artist: req.user.id
    });

    return res.status(201).json({
        message: "Music created successfully",
        data: {
            title: music.title,
            uri: music.uri,
            profile: music.profile,
            artist: music.artist
        }
    })

}

async function getAllMusic(req, res) {
    
    const music = await musicModel.find().select("uri profile title artist");

    return res.status(200).json({
        message: "Music fetched successfully",
        data: music
    });
};

async function getMusicbyArtishId(req, res) {
    const { id } = req.params;
    
    const music = await musicModel.find({ artist: id }).populate("artist", "user_name role");

    return res.status(200).json({
        message: "Music fetched successfully",
        data: music
    })
}

module.exports = { createMusic, getAllMusic, getMusicbyArtishId };