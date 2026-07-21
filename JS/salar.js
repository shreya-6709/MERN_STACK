const vegetables = ["Carrot", "Broccoli", "Spinach", "Cauliflower", "Cabbage"];
//vegetables.forEach(vegetable => console.log(vegetable));//
function something(m,callback){
    console.log(m+"director pooja");
    callback();
}
function character(){
    console.log("casting:mali,pooja");
}
//something("movie:",character);//
//promise
let promise=new Promise((resolve,reject)=>{
resolve("success");
}
);
//promise.then(result=>console.log(result));//
async function sum()
{
    return 5+5;
} 
//sum().then(result=>console.log(result));
let std={
    name:"pooja",
    age:22,
    gender:"female",
};
let json=JSON.stringify(std);
console.log(json);
