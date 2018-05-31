// Study case
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

const hitungDiskon = harga => {
  const hargaDiskon = harga * 0.1;
  return hargaDiskon;
};

const hitungTotalHargaBarang = (originalPrice, tax, shippingFee, discountFee) => {
  const total = originalPrice + tax + shippingFee - discountFee;
  return total;
};

const hargaSepatu = 650000;
const kota = "Jakarta";

const pajak = hitungPajak(hargaSepatu);
const diskon = hitungDiskon(hargaSepatu);
const ongkir = hitungOngkir(kota);
const totalHargaTerakhir = hitungTotalHargaBarang(
  hargaSepatu,
  pajak,
  ongkir,
  diskon
);

console.log(totalHargaTerakhir);
