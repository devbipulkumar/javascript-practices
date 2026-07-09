
/*

let promise1 = new Promise((resolve,reject)=>{
    resolve ("we will discuss DOM tomarrow");
});

promise1.then((proRes)=>{
console.log(proRes)
},(errRes)=>{
    console.log(errRes);
});
*/

/*
let promise1 = new Promise((resolve,reject)=>{
    setTimeout(() => {
        resolve ("we will discuss tomorrow");
    }, 5000);
})
promise1.then((proRes)=>{
console.log(proRes);
},(errRes)=>{
console.log(errRes);
})
*/
/*
let promise1 = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve ("Hello_1");
    },5000);
});

let promise2 = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve ("Hello_2");
    },10000);
})

let promise3 = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve ("Hello_3");
    },15000);
})

promise1.then((proRes)=>{
    console.log(proRes);
},(errRes)=>{
    console.log(errRes);
})

promise2.then((proRes)=>{
    console.log(proRes);
},(errRes)=>{
    console.log(errRes)
});

promise3.then((proRes)=>{
    console.log(proRes);
},(errRes)=>{
    console.log(errRes);
})
*/
/*
let promise1 = new Promise((resolve,reject)=>{
    setTimeout(()=>{ resolve ("Hello_1")},5000);
});
let promise2 = new Promise((resolve,reject)=>{
    setTimeout(()=>{ resolve ("Hello_2")},10000);
});
let promise3 = new Promise((resolve,reject)=>{
    setTimeout(()=>{ resolve ("Hello_3")},15000);
});

Promise.all([promise1,promise2,promise3]).then((proRes)=>{
    console.log(proRes);
},(errRes)=>{
    console.log(errRes);
})
*/

let promise1 = new Promise((resolve,reject)=>{
    setTimeout(()=>{ resolve ("Hello_1")},5000);
});
let promise2 = new Promise((resolve,reject)=>{
    setTimeout(()=>{ reject ("Error")},10000);
});
let promise3 = new Promise((resolve,reject)=>{
    setTimeout(()=>{ resolve ("Hello_3")},15000);
});

Promise.allSettled([promise1,promise2,promise3]).then((proRes)=>{
    console.log(proRes);
},(errRes)=>{
    console.log(errRes);
});






























