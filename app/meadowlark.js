//******************************* app entry point file ************************

var express     = require('express');
var app         = express()

app.set('port', process.env.port || 3000);

app.get('/', function(req, res){
        res.type('text/plain');
        res.send('Meadowlark Travel Home Page');
});
app.get('/about', function(req, res){
        res.type('text/plain');
        res.send('About Meadowlark Travel');
});

app.use(function(req, res){
        res.type('text/plain');
        res.status(404);
        res.send('404 - Not Found');
});
app.use(function(err, req, res, next){
        res.type('text/plain');
        res.status(500);
        res.send('500 - Server Error');
});










app.listen(app.get('port'), function(){
  console.log('Express started on https://localhost:' + app.get('port') + '; press Ctrl-C to terminate' );
});
