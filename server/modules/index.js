var express = require("express");
var router = express.Router();
var path = require("path");
var Movies = require("../models/movies.js");

router.get("/movie", function(req,res){
    Movies.find({}, function(err,data){
        if(err){
            console.log(err);
        }
        res.send(data);
    });
});

router.post("/movie", function(req,res){
    console.log("req body",req.body);
    var addedMovie = new Movies({"Title" : req.body.Title, "Runtime" : req.body.Runtime, "Rated" : req.body.Rated, "Actors" : req.body.Actors, "Plot": req.body.Plot});
    addedMovie.save(function(err, data){
        if(err){
            console.log("err saving move",err);
        }
        res.send(data);
    });
});

router.get("/*", function(req,res){
    var file = req.params[0] || "/views/index.html";
    res.sendFile(path.join(__dirname, "../public/", file));
});

module.exports = router;
