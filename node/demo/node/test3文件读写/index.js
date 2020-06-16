var server = require("./server"); 
var router = require('./router');
var requestHandlers = require('./requestHandlers')

var handle = {};
handle['/'] = requestHandlers.show;
handle['/start'] = requestHandlers.start;
handle['/comment'] = requestHandlers.comment;

server.start(router.route,handle) 