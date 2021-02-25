const helper_methods = require("../methods/helper_methods.js");
const generateId = helper_methods.generateId;

function User(name, surname, mail) {
    this.name = name;
    this.surname = surname;
    this.mail = mail;
    this.id = generateId();
    console.log(this.id);
}




module.exports = User;


