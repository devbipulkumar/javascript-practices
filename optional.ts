/*//optional chaining operator  ?.
function fun_one(arg1?:string,arg2?:string,arg3?:string,){
    console.log(arg1,arg2,arg3);
}
fun_one();
fun_one("Hello_1");
*/
/*
function fun_one(arg2:String,arg1?:String):void{
    console.log(arg2,arg1);
}
fun_one("Hello_1");
fun_one("Hello_1","Hello_2");
fun_one(undefined,undefined);
fun_one(null,null);
*/
function fun_one(arg1:any,arg2:any="Hello_2",arg3?:any,...arg4:any[]):any{
    console.log(arg1,arg2,arg3,arg4);
}
fun_one("Hello_1");
fun_one("Hello_1","Hello_2","Hello_3","Hello_4");
fun_one(undefined,undefined,undefined,undefined);
fun_one(null,null,null,null);
