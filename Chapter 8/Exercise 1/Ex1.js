// Exercise 1
let originalString = "How's it going?#";
let url = "http://www.basescripts.com?=Hello World";

let encodedComponent = encodeURIComponent(originalString);
let decodedComponent = decodeURIComponent(encodedComponent);

console.log("Encoded:", encodedComponent);
console.log("Decoded:", decodedComponent);

let encodedURL = encodeURI(url);
let decodedURL = decodeURI(encodedURL);

console.log("Encoded URL:", encodedURL);
console.log("Decoded URL:", decodedURL);
