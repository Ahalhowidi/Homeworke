var movieList = {"Search":[
	{"Title":"Cars",
	"Year":"2006",
	"imdbID":"tt0317219",
	"Type":"movie",
	"Poster":"https://images-na.ssl-images-amazon.com/images/M/MV5BMTg5NzY0MzA2MV5BMl5BanBnXkFtZTYwNDc3NTc2._V1_SX300.jpg"},
	{"Title":"Cars 2","Year":"2011","imdbID":"tt1216475","Type":"movie","Poster":"https://images-na.ssl-images-amazon.com/images/M/MV5BMTUzNTc3MTU3M15BMl5BanBnXkFtZTcwMzIxNTc3NA@@._V1_SX300.jpg"},
	{"Title":"Riding in Cars with Boys","Year":"2001","imdbID":"tt0200027","Type":"movie","Poster":"https://images-na.ssl-images-amazon.com/images/M/MV5BOGM5MzU5NTgtMmJjZC00Y2E2LThhZGQtMGE5YzUxZTgwZDdlXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg"},
	{"Title":"Used Cars","Year":"1980","imdbID":"tt0081698","Type":"movie","Poster":"https://images-na.ssl-images-amazon.com/images/M/MV5BMTkyNTQxOTk2Ml5BMl5BanBnXkFtZTcwODc5MjIyMQ@@._V1_SX300.jpg"},
	{"Title":"Old Men in New Cars","Year":"2002","imdbID":"tt0246692","Type":"movie","Poster":"https://images-na.ssl-images-amazon.com/images/M/MV5BMTY0MDc5NzYxOV5BMl5BanBnXkFtZTcwNjAxODAzMQ@@._V1_SX300.jpg"},
	{"Title":"Cars of the Revolution","Year":"2008","imdbID":"tt1282139","Type":"movie","Poster":"https://images-na.ssl-images-amazon.com/images/M/MV5BZmE3NGIzZmEtZTBhNi00ZDYzLWJmZjItZWRmMmYzYzVmNTViXkEyXkFqcGdeQXVyMjExNjgyMTc@._V1_SX300.jpg"},
	{"Title":"Comedians in Cars Getting Coffee","Year":"2012–","imdbID":"tt2314952","Type":"series","Poster":"https://images-na.ssl-images-amazon.com/images/M/MV5BMTc2OTQ3OTkwMF5BMl5BanBnXkFtZTgwNjAwMzkxOTE@._V1_SX300.jpg"},
	{"Title":"The Cars That Eat People","Year":"1974","imdbID":"tt0071282","Type":"movie","Poster":"https://images-na.ssl-images-amazon.com/images/M/MV5BMTI5NDAzMjM0NV5BMl5BanBnXkFtZTcwNDE4MzE2MQ@@._V1_SX300.jpg"},
	{"Title":"Counting Cars","Year":"2012–","imdbID":"tt2338096","Type":"series","Poster":"https://images-na.ssl-images-amazon.com/images/M/MV5BMTA4MzkyODYxNTdeQTJeQWpwZ15BbWU4MDM1MjYwMTMx._V1_SX300.jpg"},
	{"Title":"Two Cars, One Night","Year":"2004","imdbID":"tt0390579","Type":"movie","Poster":"https://images-na.ssl-images-amazon.com/images/M/MV5BMTc4NDQ3OTg4M15BMl5BanBnXkFtZTYwMTc3MDM1._V1_SX300.jpg"}],"totalResults":"221","Response":"True"};
console.log(movieList.Search[2].Title);

function createInfoElement(info) {
    var listInfo = document.createElement('div');
    var poster = document.createElement('img');
    var link = document.createElement('a');
    poster.setAttribute("src", info.Poster);
    link.setAttribute("href", 'http://www.imdb.com/title/'+info.imdbID);
    link.setAttribute("target", '_blanck');
    var title = document.createElement('p'); 
    var text = document.createTextNode(info.Title);;
    title.appendChild(text);                    
    var Year = info.Year;
    var Type = info.Type;  
    var text = document.createTextNode(Type +" "+Year);
     listInfo.appendChild(title); 
    listInfo.appendChild(poster);
    link.appendChild(text);
    listInfo.appendChild(link);  
                              
    return listInfo;
};

function createMovieList() {
    var mainList = document.getElementById('myMovieList');
    for (var i = 0; i < movieList.Search.length; i++) {
        var movieInformation = movieList.Search[i];
         var movieElement = createInfoElement(movieInformation);
        mainList.appendChild(movieElement);
    }
};
createMovieList();

