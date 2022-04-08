const app = require('./app.ts');
require('./database');
const dotenv = require('dotenv');
dotenv.config();
//const PORT = process.env.PORT || 4000;
const PORT = 4400;

async function init() {
    await app.listen(PORT, () => {
        console.log('App running on port: ', PORT)
    })
};

init();