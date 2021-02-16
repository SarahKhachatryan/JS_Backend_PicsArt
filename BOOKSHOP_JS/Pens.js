const WritingProducts = require("./WritingProducts");

class Pens extends  WritingProducts{

    constructor(name , price, color,mark,size) {
        super(name, price, color, mark);
        this.size=size;

    }

printProduct() {
    super.printProduct();
    console.log(`Size: ${this.size}`);
}

}

// const pen = new Pens("jsd",35,"jd","sjjd",0.7);
// pen.printProduct();