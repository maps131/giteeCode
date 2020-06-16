// var http = require("http");
// var url = require("url");

// function start(route,handle){
//     function onRequest(request, response) {
//         // var postData = '';
//         var pathname = url.parse(request.url).pathname;
//         console.log("Request for " + pathname + " received.");

//         route(handle, pathname, response, request);
//         // request.setEncoding('utf8');

//         // request.addListener('data',function(postDataChunk){
//         //     postData += postDataChunk;
//         //     console.log('receive post data chunk"'+postDataChunk+'".');
//         // });

//         // request.addListener('end',function(){
//         //     postData = decodeURIComponent(postData); 
//         //     console.log("end: " + postData);
//         //     route(handle,pathname,response,postData);
//         // })
//     }
    
//     http.createServer(onRequest).listen(8888);
//     console.log("Server has started.");
// }

// exports.start = start; 
var http = require("http");
var url = require("url"); 

function start(route, handle) {
  function onRequest(request, response) {
    var pathname = url.parse(request.url).pathname;
    console.log("Request for " + pathname + " received.");
    route(handle, pathname, response, request);
  }

  http.createServer(onRequest).listen(8888);
  console.log("Server has started.");
}

exports.start = start;