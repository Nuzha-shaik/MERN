console.log("hello world");

var a = 10;
var a = 30;
a = 40;
console.log(a);

let b = 20;
b = 100;
console.log(b);

const c = 30;
console.log(c);

var an = 50;
var ba = "hello";
var ca = true;
var da = null;
var ea;
console.log(typeof ca);

var big = 768929090;
var symbol = Symbol();
console.log(symbol);

var x = 10;
var y = "5";
console.log(x + y);
console.log(x - y);
console.log(x * y);
console.log(x / y);
console.log(x % y);
console.log(x ** y);

console.log(x > y);
console.log(x < y);
console.log(x >= y);
console.log(x <= y);
console.log(x == y);
console.log(x === y);
console.log(x != y);
console.log(x !== y);

var p = true;
var q = false;
console.log(p && q);
console.log(p || q);
console.log(!p);

var arr = [10, 20, 30, 40, 50];
console.log(arr);
console.log(typeof arr);

var obj = {
    name: "niha",
    age: 22,
    city: "bangalore"
};
console.log(obj);
console.log(typeof obj);

for (var i = 0; i < 5; i++) {
    console.log(i);
}

let j = 1;
while (j <= 5) {
    console.log(j);
    j++;
}

let k = 1;
do {
    console.log(k);
    k++;
} while (k <= 5);

for (let i = 0; i < 10; i++) {
    if (i % 2 === 0) {
        console.log("even");
    } else {
        console.log("odd");
    }
}

let a1 = 10;
let b1 = 20;
let c1 = 15;

if (a1 > b1 && a1 > c1) console.log("a is largest");
else if (b1 > a1 && b1 > c1) console.log("b is largest");
else console.log("c is largest");

let grade = 25;
let marksResult =
    grade > 90 ? "A grade" :
    grade > 80 ? "B grade" :
    grade > 70 ? "C grade" :
    grade > 60 ? "D grade" : "fail";
console.log(marksResult);

function add() {
    console.log(10 + 60);
}
add();

var addArrow = () => {
    console.log(10 + 60);
};
addArrow();

var addHoist = function (a, b) {
    console.log(a + b);
};
addHoist(70, 20);

var arr1 = [10, 20, 30];
var arr2 = [40, 50, 60];
var arr3 = [...arr1, ...arr2];
console.log(arr3);

var [x1, y1, z1] = [100, 200, 300];
console.log(x1);
console.log(y1);
console.log(z1);

var { name, age, city, marks } = {
    name: "niha",
    age: 22,
    city: ["bangalore", "hyd"],
    marks: {
        maths: 90,
        c: 85,
        java: 95
    }
};

console.log(name);
console.log(age);
console.log(city);
console.log(marks);


let arr=[10,20,30,40]
for (let i in arr){
    console.log(i,arr[i]);
}
var obj={
    name:"Nuzha",
    age:20
};
for(let i in obj){
    console.log(i,obj[i]);
}
///map=it gives new array its transforms the old array
let arr=[10,20,30,40,50]
z=arr.map((i)=>(i*2))
console.log(z);
//even numbers--filter
let arr=[1,2,3,4,5,6]
e=arr.filter((i)=>(i%2==0))
console.log(e);
///reduce
let arr=[1,2,3,5]
var total=arr.reduce((sum,i)=>(sum+i),0)
console.log(total);
//combining
let arr = [1, 2, 3, 4, 5, 6];

var y = arr.filter((i) => i % 2 == 0).map((i) => i * 2).reduce((sum, i) => sum + i, 0); 

console.log(y); 
//terminating operator
var name="Nuzzha";
console.log(`My name is ${name}`);
//for each loop
let arr=[1,2,3,4,5]
arr.forEach((value,index)=>{
    console.log(index,value);
})
///call by  function
