function Post(name, date,likes,saves)
{
    this.name = name;
    this. date = Date.now();//date of creation
    this.likes = likes;
    this.saves = saves;
}
Post.prototype.printInfoOfPost = function(){
    console.log(`Name: ${this.name}
    Date: ${this.date}
    Likes: ${this.likes}
    Saves: ${this.saves}`);
}
module.exports = Post;