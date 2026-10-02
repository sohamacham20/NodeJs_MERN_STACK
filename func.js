// NOrmal Function
function display(){
    console.log("hello world");
}
display ()
// Parameterized function
function add(a,b){
    console.log(a+b);
}
add(654,537)
// Function expression 
const test= function(a,b)//function defination
{  
    console.log(a*b)  //function body
}
test(2,6) //function call


// to print a square of the particular num
const sqr= function(a){
    console.log(a*a)
}
sqr(5)
// to check the number is even or odd
const num= function(a){
    if(a % 2==0){
        console.log("It is an even num")
    }
    else{
        console.log("It is an odd num")
    }
}
num(375)
// greatest of two number
const com= function(a,b){
    if(a>b){
        console.log("the greatest num is "+a)
    }
    else{
        console.log("The number"+b+"is greatest")
    }
}
com(78,234)
// check the given number is +ve or -ve
const no=function(a){
    if(a>0){
        console.log("the number is positive")
    }
    else{
        console.log("the number is negative")
    }
}
no(-89)
// find the factorial of the given number

//to print the reverse number input=234
// palindrome
// Armstrong number


//input : 123
//output:6

//input:423
//output:24