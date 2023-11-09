var express = require('express');
var router = express.Router();
// Require controller modules.
var api_controller = require('../controllers/api');
var entertainment_controller = require('../controllers/entertainment');
/// API ROUTE ///
// GET resources base.
router.get('/', api_controller.api);
/// COSTUME ROUTES ///
// POST request for creating a Costume.
router.post('/entertainment', entertainment_controller.entertainment_create_post);
// DELETE request to delete Costume.
router.delete('/entertainment/:id', entertainment_controller.entertainment_delete);
// PUT request to update Costume.
router.put('/entertainment/:id', entertainment_controller.entertainment_update_put);
// GET request for one Costume.
router.get('/entertainment/:id', entertainment_controller.entertainment_detail);
// GET request for list of all Costume items.
router.get('/entertainment', entertainment_controller.entertainment_List);
module.exports = router;

