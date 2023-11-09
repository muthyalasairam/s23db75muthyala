var entertainment = require('../models/entertainment');
// List of all Costumes
exports.entertainment_List = function(req, res) {
res.send('NOT IMPLEMENTED: Entertainment list');
};
// for a specific Costume.
exports.entertainment_detail = function(req, res) {
res.send('NOT IMPLEMENTED: Entertainment detail: ' + req.params.id);
};
// Handle Costume create on POST.
exports.entertainment_create_post = function(req, res) {
res.send('NOT IMPLEMENTED: Entertainment create POST');
};
// Handle Costume delete form on DELETE.
exports.entertainment_delete = function(req, res) {
res.send('NOT IMPLEMENTED: Entertainment delete DELETE ' + req.params.id);
};
// Handle Costume update form on PUT.
exports.entertainment_update_put = function(req, res) {
res.send('NOT IMPLEMENTED: Entertainment update PUT' + req.params.id);
};


exports.entertainment_List = async function(req, res) {
    try{
    theEntertainment = await entertainment.find();
    res.send(theEntertainment);
    }
    catch(err){
    res.status(500);
    res.send(`{"error": ${err}}`);
    }
    };
    