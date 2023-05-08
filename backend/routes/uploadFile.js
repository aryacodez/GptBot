const express = require('express');
const router = express.Router();
const { file, text } = require('../controllers/uploadFile');


router.route('/upload').post(file)
router.route('/uploadtext').post(text)

module.exports = router;
