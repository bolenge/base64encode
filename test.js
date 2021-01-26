const base64encode = require('./index');
let argv = process.argv;
let text = 'Hello World !';

if (argv.length > 2) {
    argv.shift();
    argv.shift();
    text = argv.join(' ');
}

console.log('Original text = "'+text+'" Encoded text = "'+base64encode(text)+'"');