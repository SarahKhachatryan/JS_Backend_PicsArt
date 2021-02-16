const Product = require("./Product");

class WritingProducts extends Product{

    constructor(name,price,color, mark) {
        super(name, price);
        this.color=color;
        this.mark=mark;
    }

    printProduct() {
        super.printProduct();
        console.log(`Color: ${this.color}
Mark: ${this.mark}`);
    }
}

module.exports = WritingProducts;