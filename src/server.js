const http = require('http');
const debug = require('debug')('node-angular');
const app = require('./backend/app');

//when recieving a port from an env var, checking to see if its valid (ERROR HANDLING)
const normalizePort = val => {
  var port = parseInt(val, 10);
  if(isNaN(port)){
    //named pipeline
    return val;
  }
  if(port >= 0){
    //port num
    return port;
  }
  return false;
}

//Loggin recieved error
const onError = error => {
  if(error.syscall !== "listen"){
    throw error;
  }
  const bind = typeof addr === "string" ? "pipe "+addr:"port "+port;
  switch(error.code){
    case "EACCES":
      console.error(bind+" requires elevated privilages");
      process.exit(1);
      break;
    case "EADDRINUSE":
      console.error(bind+" already in use");
      process.exit(1);
      break;
    default: throw error;
  }
};

const onListening = () => {
  const addr = server.address();
  const bind = typeof addr === "string" ? "pipe "+addr: "port "+port;
  debug("listening on "+bind);
}

const port = normalizePort(process.env.port || "3000");
app.set('port', port);

//using the app as a listener for incomming requests, pass it to create server
const server = http.createServer(app);
server.on("error", onError);
server.on("listening", onListening)
server.listen(port);
