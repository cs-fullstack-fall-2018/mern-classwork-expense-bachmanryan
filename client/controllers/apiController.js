const Solos = require("../models/soloModel.js");
const bodyParser = require('body-parser');


module.exports = function (router) {

    router.use(bodyParser.urlencoded({extended: true}));
    router.use(bodyParser.json());


    // Get all open Solos
    router.get('/api/solo/all/open', function (req, res) {
        Solos.find({isDone: false}, function (err, solos) {
            if (err) {
                throw err;
            }
            //We got results
            res.send(solos);
        })
    });

    //Implement routes for the API
    router.get('/api/solo/:username', function (req, res) {

        Solos.find({username: req.params.username}, function (err, solos) {

            if (err) {
                throw err;
            }
            //We got results
            res.send(solos);
        })

    });

// ROUTE: POST (create) a new Solo item to my list
    router.post('/api/solo', function (req, res) {

        const newSolo = Solos({
            username: req.body.username,
            todo: req.body.todo,
            isDone: req.body.isDone,
            // hasAttachment: req.body.hasAttachment
        });
        newSolo.save(function (err) {
            if (err) {
                throw err; // If we get an error then bail
            }
            // Use Express to send a simple SUCCESS message
            res.json({result: 'OK'});
        });

    });

// ROUTE: UPDATE and existing item
    router.put('/api/solo', function (req, res) {

        Solos.findOneAndUpdate(req.body.id, {
            todo: req.body.todo,
            isDone: req.body.isDone,
            //  hasAttachment: req.body.hasAttachment
        }, function (err, todo) {
            if (err) {
                throw err; // If we get an error then bail
            }
            // Use Express to send a simple SUCCESS message
            res.json({result: 'OK'});
        });
    });
};