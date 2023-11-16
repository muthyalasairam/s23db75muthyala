
var Entertainment = require('../models/entertainment');
// List of all Costumes
exports.entertainment_list = function (req, res) {
    res.send('NOT IMPLEMENTED: Entertainment list');
};
// Handle Costume create on POST
// Handle Costume delete form on DELETE.
exports.entertainment_delete = function (req, res) {
    res.send('NOT IMPLEMENTED: Entertainment delete DELETE ' + req.params.id);
};

var theEntertainments
// List of all Costumes
exports.entertainment_list = async function (req, res) {
    try {
        theEntertainments = await Entertainment.find();
        console.log('theEntertainments', theEntertainments);
        res.send(theEntertainments);
    }
    catch (err) {
        res.status(500);
        console.log(`theEntertainments ${err}}`);
        res.send(`{"error": ${err}}`);
    }
};

//VIEWS
//Handle a show all view
exports.entertainment_view_all_Page = async function (req, res) {
    try {
        theEntertainments = await Entertainment.find();
        console.log('theEntertainments', theEntertainments);
        res.render('entertainment', { title: 'Entertainment Search Results', results: theEntertainments });
    }
    catch (err) {
        res.status(500);
        console.log(`theEntertainments ${err}}`);
        res.send(`{"error": ${err}}`);
    }
};

exports.entertainment_create_post = async function (req, res) {
    console.log(req.body)
    let document = new Entertainment();
    // We are looking for a body, since POST does not have query parameters.
    // Even though bodies can be in many different formats, we will be picky
    // and require that it be a json object
    // {"costume_type":"goat", "cost":12, "size":"large"}
    document.Movies = req.body.Movies;
    document.Genre = req.body.Genre;
    document.Budget = req.body.Budget;
    try {
        let result = await document.save();
        res.send(result);
    }
    catch (err) {
        res.status(500);
        res.send(`{"error": ${err}}`);
    }
};

exports.entertainment_detail = async function (req, res) {
    console.log("detail" + req.params.id)
    try {
        result = await Entertainment.findById(req.params.id)
        res.send(result)
    } catch (error) {
        res.status(500)
        res.send(`{"error": document for id ${req.params.id} not found`);
    }
};

exports.entertainment_update_put = async function (req, res) {
    console.log(`update on id ${req.params.id} with body
            ${JSON.stringify(req.body)}`)
    try {
        let toUpdate = await Entertainment.findById(req.params.id)
        // Do updates of properties
        if (req.body.Movies)
            toUpdate.Movies = req.body.Movies;
        if (req.body.Genre) toUpdate.Genre = req.body.Genre;
        if (req.body.Budget) toUpdate.Budget = req.body.Budget;
        let result = await toUpdate.save();
        console.log("Sucess " + result)
        res.send(result)
    } catch (err) {
        res.status(500)
        res.send(`{"error": ${err}: Update for id ${req.params.id}
            failed`);
    }
};

exports.entertainment_delete = async function (req, res) {
    console.log("delete " + req.params.id)
    try {
        result = await Entertainment.findByIdAndDelete(req.params.id)
        console.log("Removed " + result)
        res.send(result)
    } catch (err) {
        res.status(500)
        res.send(`{"error": Error deleting ${err}}`);
    }
};
exports.entertainment_view_one_Page = async function (req, res) {
    console.log("single view for id " + req.query.id)
    try {
        result = await Entertainment.findById(req.query.id)
        res.render('entertainmentdetail',
            { title: 'Entertainment Detail', toShow: result });
    }
    catch (err) {
        res.status(500)
        res.send(`{'error': '${err}'}`);
    }
};

exports.entertainment_create_Page = function (req, res) {
    console.log("create view")
    try {
        res.render('entertainmentcreate', { title: 'Entertainment Create' });
    }
    catch (err) {
        res.status(500)
        res.send(`{'error': '${err}'}`);
    }
};

// Handle building the view for updating a costume.
// query provides the id
exports.entertainment_update_Page = async function (req, res) {
    console.log("update view for item " + req.query.id)
    try {
        let result = await Entertainment.findById(req.query.id)
        res.render('entertainmentupdate', { title: 'Entertainment Update', toShow: result });
    }
    catch (err) {
        res.status(500)
        res.send(`{'error': '${err}'}`);
    }
};

// Handle a delete one view with id from query
exports.entertainment_delete_Page = async function (req, res) {
    console.log("Delete view for id " + req.query.id)
    try {
        result = await Entertainment.findById(req.query.id)
        res.render('entertainmentdelete', {
            title: 'Entertainment Delete', toShow:
                result
        });
    }
    catch (err) {
        res.status(500)
        res.send(`{'error': '${err}'}`);
    }
};

