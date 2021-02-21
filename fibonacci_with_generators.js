function* generateFibonacci(){
    let first = 0;
    let second = 1;
    while(true){
        yield first;
        let temp= first;
        first = second;
        second = temp+second;
    }
}
const obj = generateFibonacci();
for(const v of obj){
    if(v>67){
        break;
    }
    console.log(v);
}
