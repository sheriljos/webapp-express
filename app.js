let express = require('express');
let chalk = require('chalk');
let debug = require('debug')('app');
let morgan = require('morgan');
let path = require('path');

let app = express();

app.use(morgan('tiny'));
app.use(express.static(path.join(__dirname, '/public')));

app.get('/', (req, res)=> {
    res.sendFile(path.join(__dirname, '/views/index.html'))
});

app.listen('8000', ()=> {
    debug(`Listening to port ${chalk.cyan('8000')}`);
});