const http = require('http');
const app = require('./app.js');
let PORT = process.env.PORT || 9009;
let server=http.createServer(app);
server.listen(PORT);
console.log(`Listening on ${PORT}`);
