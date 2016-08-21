var restify = require('restify');
var server = restify.createServer();

var setupControllers = require('./controllers/setupControllers.js');
var userControllers = require('./controllers/userControllers.js');

setupControllers(server, restify);
userControllers(server);

server.listen(8080, function() {
  console.log('%s listening at %s', server.name, server.url);
});