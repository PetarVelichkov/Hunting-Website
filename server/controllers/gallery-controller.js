const mongoose = require('mongoose');
const Gallery = mongoose.model('Gallery');

module.exports = {
    gallery: (req, res) => {
        "use strict";
        Gallery.find({})
            .then(images => {
                res.render('gallery/gallery', {images: images})
            })
    }
};