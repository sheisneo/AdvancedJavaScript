const myCar = {
    make: "Mazda",
    model: "3",
    tires: 4,
    doors: 4,
    color: "Pearl White",
    forSale: false
   };
   let propColor = "color";
   myCar[propColor] = "Midnight Black";
   propColor = "forSale";
   myCar[propColor] = true;
   console.log(myCar.make + " " + myCar.model);
   console.log(myCar.forSale);