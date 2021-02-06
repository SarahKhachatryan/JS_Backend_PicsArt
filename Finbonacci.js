const fibonacci=  {
    [Symbol.iterator]:function()
    {
        let first = 0;
        let second = 1;
        return {
            next:function() {
                let temp= first;
                first = second;
                second = temp+second;
                return {
                    value:first,
                    done:false
                }
            }

        }
    }

}

for(const v of fibonacci){
    if(v>25){
        break;
    }
    console.log(v);
}