const mongoose = require('mongoose');
const repoSchema = new mongoose.Schema({
    id: {type: Number},
    node_id: {type: String},
    name: {type: String},
    private: {type: Boolean},
    html_url: {type: String},
    description: {type: String}

})
module.exports = mongoose.model('Repo',repoSchema);