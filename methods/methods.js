const helper_methods = require("./helper_methods.js");
const readUsers = helper_methods.readUsers;
const writeUsers = helper_methods.writeUsers;
const User = require("../model/User");

/**Adds user to a json file.*/
function addUser(user) {
    const u = new User(user["name"], user["surname"], user["mail"]);
    const usersArray = readUsers();
    usersArray.push(u);
    writeUsers(usersArray);
}

/**Deletes user by given id.*/
function deleteUserById(id) {
    const usersArray = readUsers();
    let arr = [];
    for (let i = 0; i < usersArray.length; i++) {
        if (usersArray[i].id === id) {
            arr = usersArray.splice(i, 1);
        }
    }
    writeUsers(arr);

}

/**
 *
 Takes as a parameter object with this format
 @param {
         name: "newname",
         surname: "newsurname",
         mail: "newmail"
         }

     and updates information of the user by given id.

 */
function updateUserById(id, newInfo) {
    const arr = readUsers();
    for (let key of arr) {
        if (key.id === id) {
            for (let k in newInfo) {
                key[k] = newInfo[k];
            }
            break;
        }
    }
    writeUsers(arr);
}

/**Gives user with  given id.*/
function getUserById(id) {
    const arr = readUsers();
    for (let key of arr) {
        if (key.id === id) {
            return key;
        }
    }
}

/**Gives user by given name.*/
function getUserByName(name) {
    const arr = readUsers();
    for (let key of arr) {
        if (key.name === name) {
            return key;
        }
    }
}

/**Gives user which name contains given substring.*/
function getUserBySubstring(subStr) {
    const arr = readUsers();
    const newArr = [];
    for (let key of arr) {
        if (key.name.includes(subStr)) {
            newArr.push(key);
        }
    }
    return newArr;

}

module.exports = {
    getUserById: getUserById,
    getUserByName: getUserByName,
    getUserBySubstring: getUserBySubstring,
    updateUserById: updateUserById,
    addUser: addUser,
    deleteUserById: deleteUserById
}