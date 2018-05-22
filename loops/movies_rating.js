const moviesData = [
  {
    title: "shrek 4",
    durasi: "1h 30m",
    category: "Animation, Comedy",
    rating: 4
  },
  {
    title: "Black Panther",
    durasi: "45m",
    category: "Superhero",
    rating: 5
  },
  {
    title: "Bourne Ultimatum",
    durasi: "1h 10m",
    category: "Action",
    rating: 3
  },
  {
    title: "Avengers - Infinity wars II",
    durasi: "2h 30m",
    category: "Superhero",
    rating: 4
  },
  {
    title: "Fast and Furious 5",
    durasi: "1h 35m",
    category: "Action",
    rating: 2
  }
];

// latihan munculin title sama rating dalam bentuk *
// output nya title lalu bawahnya rating
moviesData.map((data, idx) => {
  console.log(`${data.title}`);
  let stars = "";
  for (let x = 0; x < data.rating; x++) {
    stars += "*";
  }
  console.log(stars);
});

// outputnya title lalu samping nya rating
moviesData.map((data, idx) => {
  const title_movies = data.title;
  const rating_movies = data.rating;

  let stars = "";
  for (let x = 0; x < data.rating; x++) {
    stars += "*";
  }
  console.log(`${title_movies}  ${stars}`);
});
