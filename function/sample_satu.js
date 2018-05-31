// const perkalian = (a, b) => {
//   return (c = a * b);
//   return c;
// };

// function pembagian(d, e) {
//   const f = d / e;
//   return f;
// }

//const penjumlahan = (x, y) => x + y;


// call the function
// console.log(perkalian(4, 5));

// const hasil_pembagian = pembagian(20, 10);
// console.log(hasil_pembagian);

// 1. create function perkalian, pembagian, penjumlahan, pengurangan
// 2. hasil_perkalian dibawa untuk pembagian
// 3. hasil_pembagian dibawa untuk penjumlahan

const angkaSatu = 8;
const angkaDua = 16;

const perkalian = (a, b) => {
  return (c = a * b);
  return c;
};

const pembagian = (e, f) => {
  return (g = e / f);
  return g;
};

const penjumlahan = (h, i) => {
  return (j = h + i);
  return j;
};

const pengurangan = (k, l) => {
  return (m = k - l);
  return m;
};

const hasil_perkalian = perkalian(angkaSatu, angkaDua)
const hasil_pembagian = pembagian(hasil_perkalian,5)
const hasil_penjumlahan = penjumlahan(hasil_pembagian,2)

console.log(hasil_penjumlahan);
