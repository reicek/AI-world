/**
 *  @library    express
 *  @doc        https://github.com/expressjs/express
 */
const express = require('express');
/**
 *  @library    body-parser
 *  @doc        https://github.com/expressjs/body-parser
 */
const bodyParser = require('body-parser');

const app = express();
const server = require('http').createServer(app);
const config = {
    port: 8080
};

app.use(express.static('public'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

startServer();

function startServer() {
    server.listen(process.env.PORT || config.port);
    console.log(`
__________________________________________
Express server launched
port: ${config.port}`);
}