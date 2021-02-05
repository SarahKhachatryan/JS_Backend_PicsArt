
// const { promisify } = require('util')
// const getSumAsync = (num1, num2,callback)=>{
//
//     if(!num1|| !num2)
//     {
//         return callback(new Error("Missing arguments"),null);
//     }
//     return callback(null, num1+num2);
//
// }
// getSumAsync(1,1,(err,result)=>{
//     if(err){
//         console.log(err);
//     }else
//     {
//         console.log(result);
//     }
// })
// const getSumPromise = promisify(getSumAsync)
// getSumPromise(1,1).then(result=>{console.log(result)}).
// catch(err=>{
//     console.log(err);
// })

const getSumAsync = (num1, num2,callback)=>{

    if(!num1|| !num2)
    {
        return callback(new Error("Missing arguments"),null);
    }
    return callback(null, num1+num2);

}

function promisify(f)
{
return function(...args){
    return new Promise((resolve ,reject)=>
    {
        function callback(err, value)
        {
            if(err){
                reject(err);
            }
            else {
                resolve(value);
            }
        }
        args.push(callback);
        f(...args);
    })
}
}
promisify(getSumAsync)(1,1).then(value=>console.log(value)).catch(err=>console.log(err));