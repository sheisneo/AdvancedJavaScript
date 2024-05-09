const arr = ["Jacob", "Aishwayra", "Kaluwe", "Theophilus", "Jean-Marie", "Jacob", 
"Aishwayra", "Jacob", "Jacob", "Aishwayra", "Jacob"];
const arr2 = arr.filter ( (value, index, array) => {
 console.log(value,index,array.indexOf(value));
 return array.indexOf(value) === index;
});
console.log(arr2);