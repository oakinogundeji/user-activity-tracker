'use strict';
/**
 * dependencies
 */
//=============================================================================
const
    express = require('express'),
    app = express(),
    http = require('http'),
    path = require('path'),
    server = http.createServer(app);
//=============================================================================
/**
 * variables
 */
//=============================================================================
const
    PORT = process.env.PORT || 3030,
    ENV = process.env.NODE_ENV || 'development';
//=============================================================================
/**
 * config
 */
//=============================================================================
//=============================================================================
/**
 * middleware
 */
//=============================================================================
if(ENV != 'production') {
    app.use(require('morgan')('dev'));
    require('clarify');
}
app.use(express.static(path.join(__dirname, 'static')));
//=============================================================================
/**
 * routes
 */
//=============================================================================
app.get('/test', (req, res) => res.status(200).json('OK!'));

app.get('/', (req, res) => {
    const options = {
        root: __dirname,
        dotfiles: 'deny'
    };
    return res.sendFile('index.html', options, err => {
        if(err) {
            console.error(`Couldn't send index.html`);
            return res.status(500).json({error: err});
        } else {
            return console.log('Index.html sent');
        }
    });
});

app.get('/register', (req, res) => {
    const options = {
        root: __dirname,
        dotfiles: 'deny'
    };
    return res.sendFile('register.html', options, err => {
        if(err) {
            console.error(`Couldn't send register.html`);
            return res.status(500).json({error: err});
        } else {
            return console.log('register.html sent');
        }
    });
});
//=============================================================================
/**
 * listen
 */
//=============================================================================
server.listen(PORT, () => console.log(`UA Server up on port:${server.address().port} in ${ENV} mode`));
//=============================================================================
/**
 * export
 */
//=============================================================================
module.exports = server;
//=============================================================================
