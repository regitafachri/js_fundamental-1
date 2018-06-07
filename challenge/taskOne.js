const starwarsData = {
  name: "Luke Skywalker",
  height: "172",
  mass: "77",
  hair_color: "blond",
  skin_color: "fair",
  eye_color: "blue",
  birth_year: "19BBY",
  gender: "male",
  homeworld: "https://swapi.co/api/planets/1/",
  films: [
    "https://swapi.co/api/films/2/",
    "https://swapi.co/api/films/6/",
    "https://swapi.co/api/films/3/",
    "https://swapi.co/api/films/1/",
    "https://swapi.co/api/films/7/"
  ],
  species: ["https://swapi.co/api/species/1/"],
  vehicles: [
    {
      name: "motor",
      image: "https://swapi.co/api/vehicles/14/",
      color: "red"
    },
    {
      name: "spaceship",
      image: "https://swapi.co/api/vehicles/30/",
      color: "white"
    }
  ],
  starships: [
    "https://swapi.co/api/starships/12/",
    "https://swapi.co/api/starships/22/"
  ],
  created: "2014-12-09T13:50:51.644000Z",
  edited: "2014-12-20T21:17:56.891000Z",
  url: "https://swapi.co/api/people/1/"
};

// mau keluarin output
// 'Luke Skywalker' with 'blond' hair is a 'male'. He have 2 vehicles, 'red' 'motor' and 'white' 'spaceship'
// His height is '172'.

const nama = starwarsData.name;
const hair = starwarsData.hair_color;
const kelamin = starwarsData.gender;
const tinggi = starwarsData.height;

let dataVehicles = "";

starwarsData.vehicles.map((item, index) => {
  const v_color = item.color;
  const v_name = item.name;
  const andPhrase = index === starwarsData.vehicles.length-1 ? '' : ' and ' // Ternary Operator
  const dataKendaraanTiapIdx = `${v_color} ${v_name}`;

  dataVehicles = dataVehicles + dataKendaraanTiapIdx + `${andPhrase}`;
});

console.log(
  `${nama} with ${hair} hair is a ${kelamin}. He have 2 vehicles, ${dataVehicles}. His height is ${tinggi}`
);
