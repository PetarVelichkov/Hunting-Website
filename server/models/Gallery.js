const mongoose = require('mongoose');

let gallerySchema = mongoose.Schema({
    imgPath: {type: String, required: true, unique: true}
});

let Gallery = mongoose.model('Gallery', gallerySchema);

module.exports = Gallery;