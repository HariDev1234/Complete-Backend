require("dotenv").config();
const ImageKit  = require("@imagekit/nodejs");

const client = new ImageKit({
    privateKey: process.env.IMAGE_KIT_PRIVATE
});

async function uploadFile(file) {
    const resp = await client.files.upload({
        file: file,
        fileName: `music_${Date.now()}`,
        folder: "practice/music"
    });

    return resp;
};

module.exports = { uploadFile };