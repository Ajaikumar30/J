// function create(...main){
    
//    for (i=main;i<main;i+=main){
//               console.log(i)
//    }
// }
// let sin=create(1,2,3,4)
// console.log(sin)




// dice roller
//  function submit(){

//    let noofdice=document.getElementById("noofdice").value

// let diceresult=document.getElementById("diceresult")
// let diceimages=document.getElementById("diceimages")
// let valu=[]
// let img=[]
//    for(i=0;i<noofdice;i++){
//       let values=Math.floor(Math.random()*6)+1
//       valu.push(values)
//       img.push(`<img src="images/${values}.png">`)
//    }
   
//     diceresult.textContent=`dice:${valu.join(",")}`
//     diceimages.innerHTML=img.join("-")
//  }
// call back
// hello(goodbye,2,3);
// function hello(callback,x,y){
//    let result=x+y;
//    callback(result)
// }

// function goodbye(result){
//    console.log(result)
// }
 

// for each method
//  arr=["ajai","sujeeth","paramesh","kavi"]

//  arr.forEach(double)
//  arr.forEach(call)

// //  function call(val){
// //    console.log("hello"+ "" + val)
// //  }
 
// function double(val,index,arr){
//    arr[index]=val.toUpperCase()
//  }
//  function call(val){
//    console.log(val)
//  }


// filter method()
// arr=[12,23,12,23,43,56,48,13,9,8,7,5,4,3,0]
// const level=arr.filter(age)
// console.log(level)
// function age(val){
//    return val>18
// }

// class 
// class product{
//    constructor(year,model){
//       this.year=year
//       this.model=model
//    }
//    productdisplay(){
//       console.log(`your model is ${this.model} in the year of ${this.year}`)
//    }
// }
//  const product1= new product(2013,"maruthi")
 

//  product1.productdisplay()

// inheritance
             
// class animal{
//     alive=true
//     eat(){
//     console.log(`the animal is ${this.alive}`)
//     }}
// class Rabbit extends animal{
//         name="rabbit"
//         run(){
//             console.log(`the ${this.name} is running`)
//         }
//     }
//     class Crow extends animal{
//         name="crow"
//         fly(){
//             console.log(`the ${this.name} is flying`)
//         }
//     }

//     const rabbit= new Rabbit()
//     const crow=new Crow()
//     crow.fly()



