var express = require('express');
const entertainment_controlers= require('../controllers/entertainment');
var router = express.Router();

/* GET home page. */

router.get('/', entertainment_controlers.entertainment_view_all_Page);
module.exports = router;

