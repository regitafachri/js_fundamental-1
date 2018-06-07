// array of object
const dataBarang = [
  {
    name: "Uncharted 4",
    category: "Games",
    price: 500000,
    city: "Jakarta"
  },
  {
    name: "Adidas Jogger Pants",
    category: "Sport",
    price: 400000,
    city: "Tangerang"
  },
  {
    name: "Nike Superfly",
    category: "Running",
    price: 750000,
    city: "Bogor"
  },
  {
    name: "Man Shirt with Mandarin Collar",
    category: "Fashion",
    price: 350000,
    city: "Bandung"
  },
  {
    name: "Rise of Tomb Raider",
    category: "Games",
    price: 750000,
    city: "Jakarta"
  }
];


const hitungPajak = harga => {
  const totalHarga = harga * 0.15;
  return totalHarga;
};

const hitungOngkir = city => {
  // jakarta 10000, tangerang 15000, bandung 20000, bogor 17000

  let hargaOngkir;

  if (city === "Jakarta") {
    hargaOngkir = 10000;
  } else if (city === "Tangerang") {
    hargaOngkir = 15000;
  } else if (city === "Bandung") {
    hargaOngkir = 20000;
  } else if (city === "Bogor") {
    hargaOngkir = 17000;
  }

  return hargaOngkir;
};

const hitungDiskon = (harga, category) => {
  let hargaDiskon;

  if (category === "Fashion") {
    hargaDiskon = harga * 0.4;
  } else if (category === "Games") {
    hargaDiskon = harga * 0.15;
  } else if (category === "Sport") {
    hargaDiskon = harga * 0.25;
  } else {
    hargaDiskon = harga * 0.5;
  }

  return hargaDiskon;
};

const hitungTotalHargaBarang = (
  originalPrice,
  tax,
  shippingFee,
  discountFee
) => {
  const total = originalPrice + tax + shippingFee - discountFee;
  return total;
};

// looping
dataBarang.map((item, idx) => {
  const namaBarang = item.name;
  const priceBarang = item.price;
  const kota = item.city;
  const kategori = item.category;

  const pajak = hitungPajak(priceBarang);
  const diskon = hitungDiskon(priceBarang,kategori);
  const ongkir = hitungOngkir(kota);
  const totalHargaTerakhir = hitungTotalHargaBarang(
    priceBarang,
    pajak,
    ongkir,
    diskon
  );

  console.log(`${namaBarang}  ${kategori} harga totalnya ${totalHargaTerakhir}`);
});

// challenge
//----------
// pembagian disko:
// jika fashion -> 40%
// games -> 15%
// sport -> 25%
// selain itu -> 5%
