var mongoose = require("mongoose");
var mongoURI = 'mongodb://localhost/my_movie_db';
var mongoDB = mongoose.connect(mongoURI).connection;

mongoDB.on("error", function(err){
    console.log("mongo connection error:", err);
});

mongoDB.on("open", function(err){
    console.log("mongo connection open:");
});

module.exports = mongoDB;
