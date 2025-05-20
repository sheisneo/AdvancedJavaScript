// Exercise 1
console.dir(document);

const body = document.body;
console.log("Children of body:", body.children);

const mainDiv = document.querySelector(".main");

console.log("Main div children:", mainDiv.children);

const ul = mainDiv.querySelector("ul");
const listItems = ul.children;
console.log("List items:", listItems);

for (let i = 1; i < mainDiv.children.length; i++) {
  console.log("Color div:", mainDiv.children[i].textContent);
}