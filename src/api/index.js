const app = require('./app');
require('./database');
const dotenv = require('dotenv');
dotenv.config();
//const PORT = process.env.API_PORT || 4400;
const PORT = 4400;

async function init() {
    await app.listen(PORT, () => {
        console.log('App running on port: ', PORT)
    })
};

init();