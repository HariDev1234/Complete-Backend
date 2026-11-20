const ImageKit = require("@imagekit/nodejs");
require("dotenv").config();

const client = new ImageKit({
    privateKey: process.env.IMAGE_KIT_PRIVATE
});

async function uploadFile(file) {

    const response = await client.files.upload({
        file,
        fileName: "music_" + Date.now(),
        folder: "shopy_music/music"
    });

    return response;
}

module.exports = { uploadFile }