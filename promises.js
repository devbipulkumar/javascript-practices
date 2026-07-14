
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
/*
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
*/
/*
let promises1 = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve ("Hello_1");
    },0)
})
let promises2 = new Promise((resolve,reject)=>{
    resolve ("Hello_2");
})

 promises1.then((proRes)=>{
    console.log(proRes)
 },(errRes)=>{
    console.log(errRes)
 })

  promises2.then((proRes)=>{
    console.log(proRes)
 },(errRes)=>{
    console.log(errRes)
 });
*/
/*
let promise1 = new Promise((resolve,reject)=>{
    resolve ("Hello");
})
 async function my_fun(){
      let result = await promise1;
      console.log(result);
 };
 my_fun();
*/

let add = (num)=>{
    return new Promise((resolve,reject)=>{
        resolve(num+5)
    })
}
let sub = (num)=>{
    return new Promise((resolve,reject)=>{
        resolve(num-3)
    })
}
let mult = (num)=>{
    return new Promise((resolve,reject)=>{
        resolve(num*2)
    })
}
let div = (num)=>{
    return new Promise((resolve,reject)=>{
        resolve(num/2+3)
    })
}
add(5).then((proRes)=>{
  sub(proRes).then((proRes)=>{
   mult(proRes).then((proRes)=>{
    div(proRes).then((proRes)=>{
     console.log(proRes)
    },(errRes)=>{

    })
   },(errRes)=>{

   })
  },(errRes)=>{

  })
},(errRes)=>{

})

















