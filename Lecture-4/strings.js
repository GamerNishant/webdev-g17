let str = "Let's learn Javascript";
console.log(str);

// replace, 
let str1 = str.replace('learn', 'learning');
console.log(str1);

// indexOf
console.log(str.indexOf('Javascript'));

// lastIndexOf
console.log(str.lastIndexOf(' '));

// uppercase
console.log(str.toUpperCase());
// lowercase
console.log(str.toLowerCase());
// original string
console.log(str);

// includes
console.log(str.includes('Javascript'));
console.log(str.includes('Random text'));


// concat
let str2 = 'first'
let str3 = 'name'

let result = str.concat(str2, str3);
console.log(result);
console.log(str);

///////// HOTS ///////////////

let g = 10 + '1';
console.log(g);

let h = 10 + '1' - 1;
console.log(h);

let j = 10 + 'A' -1 ;
console.log(j);