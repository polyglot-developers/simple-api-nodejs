const newrelic = require('newrelic');

const express = require('express');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const http = require('http');

// Routes
let routes = require('./routes');

// Express App
let app = express();
// Enable parsing of posted forms
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: false
}));
app.use(cookieParser());

// Configure Routes
app.use('/', routes);

const port = 8080;
app.set('port', port);

// Setup Server
let server = http.createServer(app);
// Register Server Event Listeners
server.listen(port, '0.0.0.0');
server.on('error', onError);
server.on('listening', onListening);

// Event listener for HTTP server "error" event
function onError(error) {
    if (error.syscall !== 'listen') {
        throw error;
    }
    var bind = typeof port === 'string' ?
        'Pipe ' + port :
        'Port ' + port;
    // handle specific listen errors with friendly messages
    switch (error.code) {
        case 'EACCES':
            console.error(bind + ' requires elevated privileges');
            process.exit(1);
            break;
        case 'EADDRINUSE':
            console.error(bind + ' is already in use');
            process.exit(1);
            break;
        default:
            throw error;
    }
}

// Event listener for HTTP server "listening" event
function onListening() {
    let addr = server.address();
    console.log('polyglot Node API running on ' + addr.port);
}