// function create(...main){
    
//    for (i=main;i<main;i+=main){
//               console.log(main)
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

hello(goodbye,2,3);
function hello(callback,x,y){
   let result=x+y;
   callback(result)
}

function goodbye(result){
   console.log(result)
}
