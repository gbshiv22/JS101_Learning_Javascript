
// Problem 3 : Given an array of numbers find the average of all the even numbers.

let num=[45,34,65,32,94,25,92,65,98,46,39,56,9,57,84]
let sum=0;
let count=0;
for(let i=0;i<=num.length-1;i++){
  if (i%2==0){
    sum=sum+num[i];
    count=count+1;
  }
 
}
console.log(sum/count);
