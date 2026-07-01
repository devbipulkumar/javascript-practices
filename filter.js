/*console.log([1,2,3,4,5].filter((element,index)=>{
    return element>=3;
}).map((element,index)=>{
    return element*100;
}))
    */

console.log(
   [{"e_id":111,"e_name":"e_one","e_salary":10000},
    {"e_id":222,"e_name":"e_two","e_salary":20000},
    {"e_id":333,"e_name":"e_three","e_salary":30000}, 
    {"e_id":444,"e_name":"e_four","e_salary":40000}].filter((element,index)=>{
        return element.e_salary>=30000;
    }).map((element,index)=>{
        return element.e_name === "e_three" ?{"e_id":333,"e_name":"employee","e_salary":30000}:element;
    }))