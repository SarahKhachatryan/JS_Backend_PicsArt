const fs = require('fs');

/**Gives the max id*/
function getId(){
    return +fs.readFileSync("../data_base/count_value");
}

/** Generates id based on count_value.txt file*/
function generateId() {

    let id = +fs.readFileSync("../data_base/count_value");
    fs.writeFileSync("../data_base/count_value", `${id + 1}`);
    return id;

}

/**Reads users and returns users array.*/
function readUsers() {
    let data = fs.readFileSync('../users.json', 'utf-8');
    const usersArray = JSON.parse(data.toString());
    return usersArray;
}
console.log(readUsers());
/**Takes users array as an argument and writes in a json file.*/
function writeUsers(usersArray) {
    const data = JSON.stringify(usersArray);
    fs.writeFileSync('../users.json', data);
}




module.exports = {
    getId:getId,
    generateId: generateId,
    readUsers: readUsers,
    writeUsers: writeUsers

};