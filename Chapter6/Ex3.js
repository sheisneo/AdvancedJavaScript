const val1 = 11;
const val2 = 6;
let operat = "-";
function cal(a, b, op) {
 if (op == "-") {
 console.log(a - b);
 } else {
 console.log(a + b);
 }
}
cal(val1, val2, operat);