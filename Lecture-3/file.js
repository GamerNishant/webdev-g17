let str = '';
let arr = [1, 2, 3];
for (let i = 0; i < arr.length; i++) {
    str += arr[i] + ' ';
}

// while(condn is true)
// {
//     logic
//     inc/dec
// }

// do{
//     something
//     inc/dec
// } while(condn is true)

console.log(str);
console.log(typeof str);

////////////////////////////////
// object is key value pairs

let a = {
    "first" : "Nishant",
    last : "Singh"
}


console.log(a.first + ' ' + a.last);

// Updation using dot notation
a.first = "Random";
console.log(a.first + ' ' + a.last);

// Deletion using dot notation
delete a.first;
console.log(a.first +' ' + a.last);

// addition using dot notation
a.address = "Earth";
console.log(a.first + ' ' + a.last 
    + ' lives in ' + a.address)


// nested objects
a.obj = {
    key : "v",
    newKey: "nv"
}

console.log(a);

console.log(a.obj.newKey);


let anotherobj = {
    "" : 10,
}

console.log(anotherobj);

// square notation
console.log(anotherobj['']);


// for in loop
let str5 = "Hello"

for (const key in str5) {
    console.log(str5[key]);
}


for (const key in arr) {
    console.log(arr[key]);
}

for (const key in a) {
    console.log(a[key]);
}
