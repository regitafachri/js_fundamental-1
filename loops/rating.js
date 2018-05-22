const movie = {
  title: "shrek 4",
  durasi: "1h 30m",
  category: "Animation, Comedy",
  rating: 4
};

// for-loop
let stars = "";
for (let w = 0; w < movie.rating; w++) {
  stars += "*";
}

console.log(stars);
