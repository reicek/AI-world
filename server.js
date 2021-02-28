/**
 *  @const express
 *  @see {@link https://github.com/expressjs/express }
 */
const express = require('express');
/**
 *  @const body-parser
 *  @see {@link https://github.com/expressjs/body-parser }
 */
const bodyParser = require('body-parser');

/**
 * Pulls, process and persists data
 * @module Server
 * @requires express
 * @requires bodyParser
 */
/**
 * Static files server
 * @class Server
 */
class Server {
  /**
   * Server constructor
   * @constructs Server
   * @param {number} [port = 8080] - Port number the server should listen
   * @example
   *     const customPort = 3000;
   *     const app = new Server(customPort);
   */
  constructor(port = 8080) {
    /**
     * Express application instance
     * @member Server#app
     */
    this.app = express();

    this.app.use(express.static('src'));
    this.app.use(bodyParser.json());
    this.app.use(bodyParser.urlencoded({ extended: true }));

    /**
     * Express server instance
     * @member Server#server
     */
    this.server = require('http').createServer(this.app);

    /**
     * Configuration holder
     * @member {Object} Server#config
     */
    this.config = {};

    /**
     * Port number
     * @member {number} Server#config.port
     */
    this.config.port = port;
  }

  /**
   * Launches this server instance
   * @method launch
   * @example
   *     const app = new Server();
   *     app.launch();
   */
  launch() {
    this.server.listen(process.env.PORT || this.config.port);

    console.log(`__________________________________________`);
    console.log(`Express server launched`);
    console.log(`port: ${this.config.port}`);
  }
}

// Create server instance at default port (8080)
const app = new Server();
// Launch server
app.launch();
