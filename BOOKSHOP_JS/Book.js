const Product = require("./Product");

class Book extends Product{

    constructor(name, price, year, author, language, pages) {
        super(name , price);
        this.year= year;
        this.author = author;
        this.language=language;
        this.pages= pages;
    }

    printProduct() {
        super.printProduct();
        console.log(`Year: ${this.year}
Author: ${this.author}
Language: ${this.language}
Pages: ${this.pages}`)
    }

    static printBookByYear(books){
        let notArranged = false;
        while(!notArranged){
            notArranged=true;
            for(let i=0;i<books.length-1;i++){
                if(books[i].year>books[i+1].year){
                    let temp = books[i];
                    books[i]= books[i+1];
                    books[i+1] = temp;
                    notArranged=false;
                }
            }
        }
        return books;
    }


}
// const book = new Book("Book1",300,1945,"Author1","english",355);
// const book1= new Book("Book2",400,2000,"Author2","Russian",255);
// const arr = [book,book1];
// book.printProduct();
// console.log(Book.printBookByYear(arr));
// console.log(Book.productsByPrice(arr));