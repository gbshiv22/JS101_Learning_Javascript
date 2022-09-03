// Problem 4: Given stored username and password and input username and password, Print if the user can login or not.

let stored_usrname="abc2020@gmail.com";
let stored_pass=4567;

let input_username="abc220@gmail.com";
let input_pass=4567;

if (stored_usrname==input_username){
  if(stored_pass==input_pass){
    console.log("Login Successful");
  }else{
    console.log("Incorrect Password");
  }
  
}else{
  console.log("Wrong Email")
}