// You are given a number, stored in a variable with the namenum

// You have to printnumlines, and on each line print all the numbers from 1 to the value stored innum

// For example, if the value stored innum = 5, then the required output is

// 1 2 3 4 5
// 1 2 3 4 5
// 1 2 3 4 5
// 1 2 3 4 5
// 1 2 3 4 5

// let num=5;
// let bag=" ";
// for (let i=1;i<=num;i++){
// // console.log(i);
// bag=bag+i;
// }
// console.log(bag);

// let num=5


// for(let j=1;j<=num;j++){

//  let bag=" ";
 
//  for(let i=1;i<=num;i++){
//     bag=bag+i+" ";
    
 
// }
// console.log(bag);
// }







// let num=6;
// let sum=0;
// for(let j=1;j<=num;j++){
    
//     if(j%2==0){
       
//        sum=sum+j
//         console.log(sum);
//     }
    
// }






let N=10;



let bag=" ";

let j=N*N;
for(let i=1;i<=j;i++){
     
      bag=bag+i+" ";
    
    if(i%N==0){
        
      console.log(bag);
      bag=" "
    }
            
}






