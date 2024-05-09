const adj = ["unique", "wonderful", "hungry", "angry", "helpful"];
function myFun() {
 const question = prompt("What is your name?");
 const nameAdj = Math.floor(Math.random() * adj.length);
 console.log(adj[nameAdj] + " " + question );
}
myFun()