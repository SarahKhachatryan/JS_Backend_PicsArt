const User = require('./User.js');
function Comment(user, message) {
    this.user = user;

}
Comment.prototype.printComment = function(){
    console.log(`${this.user.username} : ${this.message}`)
}