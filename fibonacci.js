const fibonacci=  {
[Symbol.iterator]:function()
{
    return {
        first:0,
        second:1,
        next:function() {
            let temp= this.first;
            this.first = this.second;
            this.second = temp+this.second;
                return {
                    value:this.first,
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