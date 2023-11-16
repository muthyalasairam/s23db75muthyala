var express = require('express');
const entertainment_controlers= require('../controllers/entertainment');
var router = express.Router();

/* GET home page. */
router.get('/detail', entertainment_controlers.entertainment_view_one_Page);
router.get('/create', entertainment_controlers.entertainment_create_Page)
router.get('/', entertainment_controlers.entertainment_view_all_Page);
module.exports = router;

