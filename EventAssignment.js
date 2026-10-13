//Syncronous Event
// 1
console.log("First");
console.log("Second");
console.log("Third");
// 2
let a = 10;
let b = 20;

let sum = a + b;

console.log(sum);
console.log("Completed");
// 3
function greet() {
    console.log("Hello");
}

console.log("Start");
greet();
console.log("End");
//4
for (let i = 1; i <= 3; i++) {
    console.log(i);
}

console.log("Loop finished");
// 5
function delay() {
    const start = Date.now();

    while (Date.now() - start < 2000) {
        
    }

    console.log("Delay finished");
}

delay();
console.log("Next statement");

// Asynchronus Event
// 1
console.log("First");

setTimeout(() => {
    console.log("Second");
}, 2000);

console.log("Third");
//2
let count = 1;

const timer = setInterval(() => {
    console.log(count);

    if (count === 3) {
        clearInterval(timer);
        console.log("Stopped");
    }

    count++;
}, 1000);

console.log("Timer started");
//3
console.log("Start");

const promise = new Promise((resolve) => {
    resolve("Data received");
});

promise.then((result) => {
    console.log(result);
});

console.log("End");
//4
async function getData() {
    console.log("Fetching data");

    await new Promise(resolve => {
        setTimeout(resolve, 2000);
    });

    console.log("Data received");
}

getData();
console.log("Other work");
//5
console.log("Request started");

fetch("https://jsonplaceholder.typicode.com/users/1")
    .then(response => response.json())
    .then(data => {
        console.log(data.name);
    })
    .catch(error => {
        console.log("Error:", error.message);
    });

console.log("Request sent");
