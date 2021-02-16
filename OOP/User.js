
function User(username,followers, followings,posts)
{
    this.username = username;
    this.followers= followers;
    this.followings= followings;
    this.posts= posts;
}
User.prototype.printUser = function()
{
    console.log(`         Username: ${this.username}
         Followers: ${this.followers}
         Followings: ${this.followings}
         Posts: ${this.posts}`);
}

const user = new User("sarahkhachatryan", 5,23,5);
//user.printUser();
module.exports = User;