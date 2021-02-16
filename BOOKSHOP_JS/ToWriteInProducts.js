const Product = require("./Product");

class ToWriteInProducts extends Product{

    constructor(name, price, type, mark) {
        super(name, price);
        this.type = type;
        this.mark=mark;
    }

    printProduct() {
        super.printProduct();
        console.log(`Type: ${this.type} 
        Mark: ${this.mark}`);
    }

}

module.exports = ToWriteInProducts;