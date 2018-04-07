const pug = require('pug');

const User = require('../models/user.js');

function index(req,res) {
    let text = './views/addUser.pug';
    let renderIndex = pug.compileFile(text);

    let html = renderIndex({
        title: "Formulaire d'ajout d'utilisateur"
    });

    res.writeHead(200, { 'Content-Type': 'text/html' } )
    res.write(html);
    res.end();
}
module.exports = {index}