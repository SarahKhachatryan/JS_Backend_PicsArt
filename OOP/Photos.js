const Post = require('./Post.js');
Photo.prototype = Object.create(Post.prototype);
Photo.prototype.constructor=Photo;
function Photo(name , date , likes , saves, filters){
    Post.call(this,name, date, likes,saves);
    this.filters = filters;

}

Photo.prototype.printInfoOfPost = function(){
    console.log(`Name: ${this.name}
    Date: ${this.date}
    Likes: ${this.likes}
    Saves: ${this.saves}
    Filters: ${this.filters}`);

}
