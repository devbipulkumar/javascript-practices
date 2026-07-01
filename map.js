/*
console.log([1,2,3,4,5].map((element,index)=>{
    return (element*100);
}))
    */

console.log([1,2,3,4,5].map((element,index)=>{
    return [element];
}));

console.log([1,2,3,4,5].map((element,index)=>{
    return [element,index];
}));

console.log([10,20,30,40,50].map((element,index)=>{
   return {[index]:element};
}))