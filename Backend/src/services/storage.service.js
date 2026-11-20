const { ImageKit } = require("@imagekit/nodejs");
require("dotenv").config();

const client = new ImageKit({
  privateKey: process.env.IMAGE_KIT_PROVATE_KEY
});

async function imageUpload(buffer) {

    const response = await client.files.upload({
        file: buffer.toString("base64"),
        fileName: 'image.jpg',
    });

    return response;
};

module.exports = imageUpload;