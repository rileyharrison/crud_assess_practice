myApp.factory("MovieService", ["$http", function($http){
    var data = {};

    var postMovie = function(data){
        $http.post("/movie", data).then(function(response){
            console.log("movie saved", response);
            getMovies();
        });
    };

    var getMovies = function(){
        $http.get("/movie").then(function(response){
            console.log("get movies", response.data);
            data.response = response.data;
        });
    };

    return{
        postMovie : postMovie,
        getMovies : getMovies,
        data : data
    };
}]);
