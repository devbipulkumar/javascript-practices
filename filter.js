/*console.log([1,2,3,4,5].filter((element,index)=>{
    return element>=3;
}).map((element,index)=>{
    return element*100;
}))
    

console.log(
   [{"e_id":111,"e_name":"e_one","e_salary":10000},
    {"e_id":222,"e_name":"e_two","e_salary":20000},
    {"e_id":333,"e_name":"e_three","e_salary":30000}, 
    {"e_id":444,"e_name":"e_four","e_salary":40000}].filter((element,index)=>{
        return element.e_salary>=30000;
    }).map((element,index)=>{
        return element.e_name === "e_three" ?{"e_id":333,"e_name":"employee","e_salary":30000}:element;
    }))

    */

//Reduce()
/*
console.log(
    [1,2,3,4,5].reduce((firstElement,accumlator)=>{
        return firstElement+accumlator;
    })
)

console.log(
    [100,200,300,400,500].reduce((firstElement,accumlator)=>{
        return firstElement+accumlator;
    })
)


console.log(
    [1,2,3,4,5].map((element,index)=>{
        return element*100;
    }).filter((element,index)=>{
        return element>=100;
    }).reduce((firstElement,accumlator)=>{
        return firstElement+accumlator;
    })
)


console.log(
    ["javascript","to","welcome"].reduceRight((firstElement,accumlator)=>{
        return firstElement+" "+accumlator;
    })
)
/*
let arr1 = [1,2,3,4];
let arr2 = ["one","two","three","four"];
console.log(arr1.map((element,index)=>{
    return [element,arr2[index]];
}).flat(Infinity));


console.log(arr1.flatMap((element,index)=>{
    return [element,arr2[index]];
}));
*/
/*
console.log(
    [40,30,50,80,70].findIndex((element,index)=>{
        return element == 80;
    })
)

console.log(
    [10,20,30,40,50,60,70].findIndex((element,index)=>{
        return element == 5;
    })
);
*/
/*
let arr1 = [10,20,30,40,50];
arr1.splice(arr1.findIndex((element,index)=>{
    return element == 30;
}),1);
console.log(arr1);

*/

/*
let arr1 = [20,30,40,30,20,50,70];
arr1.forEach((element,index)=>{
    console.log(arr1.indexOf(element),index);
    console.log("...................");
})
    */
let arr3 = [100,200,300,100,200,300];
   console.log(arr3.filter((element,index)=>{
      return arr3.indexOf(element)== index;
   }))












