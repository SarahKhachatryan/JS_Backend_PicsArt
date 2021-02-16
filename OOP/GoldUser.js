const user = require('./User.js');
GoldUser.prototype = Object.create(user.prototype);
GoldUser.prototype.constructor=GoldUser;
function GoldUser(username,followers, followings,posts,advancedTools)
{
    user.call(this,username,followers, followings,posts);
    this.advancedTools= advancedTools;
}
GoldUser.prototype.printUser = function (){
    console.log(`         Username: ${this.username}
         Followers: ${this.followers}
         Followings: ${this.followings}
         Posts: ${this.posts}
         Advanced Tools: ${this.advancedTools}`);
}
// const goldUser = new GoldUser("user",5,3,4,12);
// goldUser.printUser();