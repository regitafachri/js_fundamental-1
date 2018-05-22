// Looping

const cars = ["Toyota", "Mitsubishi", "Honda"]; //array of string

//looping ada 2 cara, yaitu:
//map
cars.map((dataMobil, index) => {
  //data,index optional
  const nama = "Yogie";
  const dataHasil = `${dataMobil} is ${nama}'s car`;
  console.log(dataHasil);
  console.log(`${dataMobil} is a great car`);
});

//for-loop
for (let a = 0; a < cars.length; a++) {
  //ini mulainya dri index 0
  console.log(`${cars[a]} is a great car!`);
}


const carsInfo = [
  {
    brand: "suzuki",
    type: "ertiga",
    year: 2017,
    category: "MPV"
  },
  {
    brand: "toyota",
    type: "senia",
    year: 2018,
    category: "small"
  },
  {
    brand: "honda",
    type: "jazz",
    year: 2012,
    category: "hatchback"
  },
  {
    brand: "mitsubishi",
    type: "mirage",
    year: 2013,
    category: "Hatchback"
  },
  {
    brand: "honda",
    type: "civic",
    year: 2018,
    category: "sedan"
  }
]; // array of objects


//map
 carsInfo.map((mobilInfo,index) => {
     console.log(`${mobilInfo.category}`);
})

//for loop
for (let b = 0; b < carsInfo.length; b++){
    console.log(`${carsInfo[b].category}`);
}



