const methods = require("../methods/methods");
const helper_methods = require('../methods/helper_methods')
const express = require('express');
//const Joi = require('joi');
const app = express();
app.use(express.json());

app.get('/api/v1/user/:id', (req, res) => {

    const id = parseInt(req.params.id);
    if (id >= helper_methods.getId()) {
        res.send("Invalid id.");
    }
    const user = methods.getUserById(id);
    if (!user) {
        res.send("No user with such id");
    }
    res.send(JSON.stringify({user}));
})
app.get('/api/v1/user/name/:name', (req, res) => {
    const name = req.params.name;
    const user = methods.getUserByName(name);
    if (!user) {
        res.send("No user with such name");
    }
    res.send(JSON.stringify({user}));

})
app.get('/api/v1/user/search/:search', (req, res) => {
    const subStr = req.params.search;
    const user = methods.getUserBySubstring(subStr);
    if (!user) {
        res.send("No user with such subStr.");
    }
    res.send(JSON.stringify({user}));
})
app.put('/api/v1/user/:id', (req, res) => {
    const id = parseInt(req.params.id);
    if (id >= helper_methods.getId()) {
        res.send("Invalid id.");
    }
    res.send(methods.updateUserById(id, req.body));
    console.log("User updated.");
})
app.post('/api/v1/user/add', (req, res) => {
    const info = req.body;
    if (!info) {
        res.send("Information required.")
    } else if (!info.name || !info.surname || !info.mail || info.id) {
        res.send("Wrong information.")
    }
    res.send(methods.addUser(info));
    console.log("User added.")
})
app.delete('/api/v1/user/:id', (req, res) => {
    const id = parseInt(req.params.id);
    if (id >= helper_methods.getId()) {
        res.send("Invalid id.");

    }

    res.send(methods.deleteUserById(id));
    console.log("User deleted.");

})


const port = process.env.PORT || 2001;
app.listen(port, () => console.log(`Listening on port ${port}.`));