const ToWriteInProducts = require("./ToWriteInProducts");

class NoteBook extends ToWriteInProducts{

    constructor(name, price,type,mark,pages) {
        super(name, price, type ,mark);
        this.pages=pages;
    }

    printProduct() {
        super.printProduct();
        console.log(`Pages: ${this.pages}`);
    }

}