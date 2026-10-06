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
const fact = function(a) {
    var result = 1;

    while (a != 0) {
        result = result * a;
        a--;
    }

    console.log(result);
}

fact(4);



// To print the reverse number
// input = 234

const rev = function(a) {
    var rev = 0;

    while (a > 0) {
        let digit = a % 10;

        rev = rev * 10 + digit;
        a = Math.floor(a / 10);
    }

    console.log(rev);
}

rev(234);

// palindrome
const palin= function(a){
    var rev = 0;
    var temp = a;
    while(a>0){
        let digit = a%10;
        rev = rev * 10 + digit;
        a = Math.floor(a/10);
    }
    if(rev == temp){
        console.log("The number is a palindrome");
    }
    else{
        console.log("The number is not a palindrome");
    }
}
palin(12321);
// Armstrong number
const armstrong= function(a){
    var sum = 0;
    var temp = a;   
    while(a>0){
        var digit = a%10;
        sum = sum + (digit*digit*digit);
        a = Math.floor(a/10);
    }
    if(sum == temp){
        console.log("The number is an Armstrong number");
    }
    else{
        console.log("The number is not an Armstrong number");
    }
}
armstrong(153);


//input : 123
//output:6
const sumOfDigits = function(a){
    var sum = 0;
    while(a>0){
        var digit = a%10;
        sum += digit;
        a = Math.floor(a/10);
    }
    console.log(sum);
}
sumOfDigits(123);


//input:423
//output:24
const productOfDigits = function(a){
    var product = 1;  
    while(a>0){
        var digit = a%10;
        product *= digit;
        a = Math.floor(a/10);
    }
    console.log(product);
}
productOfDigits(423);
