// Problem 2 : Given an array of string count the overall total number of characters
let sum=0;
let arr=["Rhahul","Gaurav","Mayur","Chetan","Dhanraj","Ram"];

for(let i=0;i<=arr.length-1;i++){

sum=sum+arr[i].length;
  
}
console.log(sum);