class Product {

    constructor(name, price) {
        this.name = name;
        this.price = price;
    }

    printProduct()
    {
        console.log(`Name: ${this.name} 
Price: ${this.price}`)
    }
    static productsByPrice(products){
        let notArranged = false;
        while(!notArranged){
            notArranged=true;
            for(let i=0;i<products.length-1;i++){
                if(products[i].year>products[i+1].year){
                    let temp = products[i];
                    products[i]= products[i+1];
                    products[i+1] = temp;
                    notArranged=false;
                }
            }
        }
        return products;
    }
}
module.exports= Product;
