const mongoose = require('mongoose');

const connectDB = () => {
    mongoose.connect('mongodb://localhost/untitled10', {
        useNewUrlParser: true,
        useCreateIndex: true,
        useFindAndModify: false,
        useUnifiedTopology: true
    }).then(() => console.log("MONGODB connected.")).catch((err) => console.log(err));
}

module.exports = connectDB;