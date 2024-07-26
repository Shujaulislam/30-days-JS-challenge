//1

var a=5;
var b=5;
//a
let add = a+b;
console.log("add:",add);
//b
let subtract = a-b;
console.log("subtract",subtract);
//c
let multiply = a*b;
console.log("multiply",multiply);
//d
let divide = a/b;
console.log("divide",divide);
//e
let remainder = a%b;
console.log("remainder",remainder)

//2

//f
a += 5;
console.log("+= this operator",a);
//g
b -= 4;
console.log("-= this operator",b)

//3

//h
a>b
console.log("> this operator",a)
a<b
console.log("< this operator",b)

//i

if(
a>=b)
console.log(">= this operator ",true,a)
else
console.log(false,b)
if(a<=b)
console.log("<= this operator ",true,b)
else
console.log(false,a)

//j

console.log(a==b)

console.log(a===b)

//4

//k
if (a/b == a-b && a*b == a+b ) {
    console.log(true);
}
else console.log("&&",false);


//L
if (a+b == 10 || a*b == 10 ) {
    console.log(true);
}
else console.log("||",false);


//M
if(a+b != 10 )
    console.log("!",true)
else
console.log(false)

//5

a < 0 ?  text = "negative number sir ji" : a> 0 ? text = "positive number sir ji" : text = "zero sir ji"
console.log(text)

