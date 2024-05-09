const inventory = [];
const item3 = {
 name: "TV",
 model: "Samsung Smart 32'",
 cost: 10000,
 qty: 19
}
const item2 = {
 name: "Phone",
 model: "Iphone 13",
 cost: 15000,
 qty: 37
}
const item1 = {
 name: "Airfyer",
 model: "3 way",
 cost: 650,
 qty: 89
}
inventory.push(item1, item2, item3);
console.log(inventory);
console.log(inventory[2].qty);