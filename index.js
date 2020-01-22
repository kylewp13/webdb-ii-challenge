// Dotenv
require('dotenv').config();

// server import from server.js
const server = require('./server');

//port being set in the .env file
const port = process.env.PORT

// server port is on the .env file
server.listen(port, () => {
    console.log(`\n ** Running on port ${port} ** \n`)
})