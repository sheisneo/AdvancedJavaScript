let person = prompt("Enter a name");
let message;
switch (person) {
 case "Yedudi" :
 case "Neo" :
 case "Sheryl" :
 case "Fernami" :
 message = person + " is my friend";
 break;
 default :
 message = "I don't know " + person;
}
console.log(message);