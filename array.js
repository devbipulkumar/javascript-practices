/*
let arr = [20,30,40,50,60];
console.log(arr.length);
console.log(arr[0],arr[2],arr[4],arr[5]);
arr.length = 3;
console.log(arr[0],arr[2],arr[3],arr[4]);
*/
//push()
//pop()
//unshift()
//shift()
/*let arr =[20,40,50];
console.log(arr);

arr.push(50);
console.log(arr);

arr.pop(50);
console.log(arr);

arr.unshift(10);
console.log(arr);

arr.shift(10);
console.log(arr);


let arr1 = [10,20,30,40];
let arr2 = [50,60,70];
let arr3 = [...arr1,...arr2];
console.log(arr3);
*/

//Splice
let arr = [10,20,30,40,50,60,70,80,90];
arr.splice(1,2);
console.log(arr);     //[10,40,50,60,70,80,90]

arr.splice(6,1);
console.log(arr);       //[10,40,50,60,70,80]

arr.splice(2,2);
console.log(arr);      //[ 10, 40, 70, 80 ]

arr.splice(1,0,50,60);
console.log(arr);       //[ 10, 50, 60, 40, 70, 80 ]

arr.splice(0,1,10,20,30);
console.log(arr);        //[10, 20, 30, 50,60, 40, 70, 80]

arr.splice(8,0,100);
console.log(arr);        //[10, 20, 30, 50,60, 40, 70, 80,100]























