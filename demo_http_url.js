var http = require('http');
var url = require('url');

http.createServer(function (req, res) {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write("parse url : " + req.url+"<br>");

    // Split the Query String
    var q = url.parse(req.url, true).query;
    var txt = q.year + " " + q.month;
    res.end("Split the Query String : "+txt);



}).listen(8080);

