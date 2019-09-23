const express = require('express');
const app = express();
const cors = require('cors');
const http = require('http').Server(app);
const path = require('path');

app.use(cors());

app.use(express.static(path.join(__dirname, '../dist/MSweep-Proj/')));

let server = http.listen(3000, function () {
     console.log("Server listening on port: " + server.address().port);
});

// http.createServer(accRoute.handleRequest).listen(3000)
