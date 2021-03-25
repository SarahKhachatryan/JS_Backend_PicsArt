const axios = require('axios');
const express = require('express');
const redis = require('redis');
const repo = require('./models/repo');
const connectDB = require('./util/db_connection');

const app = express();
connectDB();

//create repo
async function createRepo(obj) {

    const {id, node_id, name, private, html_url, description} = obj;
    await repo.create({id, node_id, name, private, html_url, description});

}

//getting repos from git
axios.get('https://api.github.com/search/repositories?q=something').then(resp => {
    const items = resp.data.items;
    for (let i of items) {
        createRepo(i);
    }
});

const REDIS_PORT = 6379;
const client = redis.createClient(REDIS_PORT, 'localhost');

app.listen(3000, () => console.log("listening on port 3000"));

//get repo with that id
app.get('/repos/:id', (req, res) => {

    const id = req.params.id;
    client.get(id, function (err, reply) {
        console.log(JSON.parse(reply));
        if (reply) {
            console.log("Found on cache")
            res.status(200).send(JSON.parse(reply));
        } else {
            repo.findOne({id}, (err, doc) => {
                if (err) {
                    console.log("doesn't exist such repo")
                } else {

                    //found in db and save in cache
                    console.log("Found repo in mongo");
                    client.set(id, JSON.stringify(doc));
                    res.status(200).send(doc);
                }
            })
        }
    })

})

//get the count of current repos
app.get('/repos/',(req,res)=>{
    repo.find().then(data=>{
            const count = JSON.stringify(data.length);
            res.status(200).send(count);
    }
    );
})
