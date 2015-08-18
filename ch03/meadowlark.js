
//untuk membutuhkan package express
var express = require('express');

//buat variabel untuk menampung semua fungsi express
var app = express();


//set up handlebars view engine
var handlebars = require('express3-handlebars').create({defaultLayout:'main'});

var fortunes = [
"conquer your fears", "rivers needs springs", "hello"
];

//lakukan random



app.engine('handlebars', handlebars.engine);
app.set('view engine', 'handlebars');

app.use(express.static(__dirname + '/public'));


//set port ke 3000
app.set('port', process.env.PORT || 3000);




app.listen(app.get('port'), function(){
	console.log('Express started on http://localhost:' + app.get('port') + '; press ctrl + c to terminate');
});


//adding routes
app.get('/', function(req, res){
	//res.type('text/plain');
	//res.send('Awalone Rismawati');
	res.render('home');
});

app.get('/about', function(req, res){
	//res.type('text/plain');
	//res.send('about page');
	var randomWord = fortunes[Math.floor(Math.random() * fortunes.length)];
	res.render('about', {fortune:randomWord});
});

app.use(function(req, res, next){
	res.status(404);
	res.render('404');
});

app.use(function(err, req, res, next){
	console.error(err.stack);
	res.status(500);
	res.render('500');
});




