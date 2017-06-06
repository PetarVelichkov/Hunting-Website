const express = require('express');
const router = express.Router();
const controllers = require('../controllers');
const auth = require('../config/auth');
const multer = require('multer');

let storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'public/images')
    },
    filename: function (req, file, cb) {
        cb(null, file.originalname)
    }
});
const upload = multer({storage: storage});


/* GET article create page. */
router.get('/article/create', auth.isInRole('Admin') ,controllers.article.createGet);
/* POST article create page. */
router.post("/article/create", upload.any(), controllers.article.createPost);
/* GET article details*/
router.get('/article/details/:id', controllers.article.details);

module.exports = router;