const musicModel = require("../models/music.model");
const { uploadFile } = require("../services/storage.service");
const albumModel = require("../models/album.model");

async function createMusic(req, res) {
  
    const { title } = req.body;
    const file = req.file;

    const result = await uploadFile(file.buffer.toString("base64"));

    const music = await musicModel.create({
      uri: result.url,
      title,
      artist: req.user.id,
    });

    res.status(201).json({
      message: "Music created successfully",
      music: {
        id: music._id,
        music: music.uri,
        title: music.title,
        artist: music.artist,
      },
    });
}

async function albumCreate(req, res) {
    const { title, musics } = req.body;

    const result = await albumModel.create({
      title,
      musics,
      artist: req.user.id
    })

    res.status(201).json({
      message: "Album created successfully",
      album: {
        id: result._id,
        title: result.title,
        musics: result.musics,
        artist: result.artist
      }
    })
}

async function getAllMusic(req, res) {

  const result = await musicModel.find().populate("artist", "user_name role");

  res.status(200).json({
    message: "Data fetched successfully",
    data: result
  })
}

async function getAllAlbum(req, res) {
 
  const result = await albumModel.find().select("title artist").populate("artist", "user_name role");

  res.status(200).json({
    message: "Data fetched successfully",
    data: result
  })
}

async function getAlbumById(req, res) {
  const { albumid } = req.params;

  const result = await albumModel.findById(albumid).populate("artist", "user_name role").populate("musics");

  res.status(200).json({
    message: "Data fetched successfully",
    data: result
  })
}

module.exports = { createMusic, albumCreate, getAllMusic, getAllAlbum, getAlbumById };
