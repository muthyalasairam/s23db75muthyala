var entertainment = require('../models/entertainment');
// List of all Costumes
/*exports.entertainment_List = function(req, res) {
res.send('NOT IMPLEMENTED: Entertainment list');
};*/
// for a specific Costume.
exports.entertainment_detail = function(req, res) {
res.send('NOT IMPLEMENTED: Entertainment detail: ' + req.params.id);
};

// Handle Costume delete form on DELETE.
exports.entertainment_delete = function(req, res) {
res.send('NOT IMPLEMENTED: Entertainment delete DELETE ' + req.params.id);
};
// Handle Costume update form on PUT.
exports.entertainment_update_put = function(req, res) {
res.send('NOT IMPLEMENTED: Entertainment update PUT' + req.params.id);
};

exports.entertainment_create_post = async function(req, res) {
    console.log(req.body)
    let document = new entertainment();
    // We are looking for a body, since POST does not have query parameters.
    // Even though bodies can be in many different formats, we will be picky
    // and require that it be a json object
    // {"costume_type":"goat", "cost":12, "size":"large"}
    document.Movies = req.body.Movies;
    document.Genre = req.body.Genre;
    document.Budget = req.body.Budget;
    try{
    let result = await document.save();
    res.send(result);
    }
    catch(err){
    res.status(500);
    res.send(`{"error": ${err}}`);
    }
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
    
    exports.entertainment_view_all_Page = async function(req, res) {
        try{
        entertainment = await entertainment.find();
        res.render('entertainment', { title: 'Entertainment Search Results', results: entertainment });
        }
        catch(err){
        res.status(500);
        res.send(`{"error": ${err}}`);
        }
        };
       
        