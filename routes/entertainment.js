var express = require('express');
const entertainment_controlers = require('../controllers/entertainment');
var router = express.Router();
// A little function to check if we have an authorized user and continue on or
// redirect to login.
const secured = (req, res, next) => {
    if (req.user) {
        return next();
    }
    res.redirect("/login");
}
/* GET home page. */
router.get('/detail', entertainment_controlers.entertainment_view_one_Page);
router.get('/create', entertainment_controlers.entertainment_create_Page)
router.get('/', entertainment_controlers.entertainment_view_all_Page);
/* GET create update page */
router.get('/update',secured, entertainment_controlers.entertainment_update_Page);

/* GET delete costume page */
router.get('/delete', entertainment_controlers.entertainment_delete_Page);

module.exports = router;

