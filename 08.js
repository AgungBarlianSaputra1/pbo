// Definisi kelas error khusus
class ValidasiError extends Error {
  constructor(pesan) {
    super(pesan);
    this.name = "ValidasiError";
  }
}

// Fungsi cekUsia
function cekUsia(usia) {
  if (usia < 17) {
    throw new Error("Usia minimal adalah 17 tahun");
  }
  return "Usia valid";
}

// Fungsi cekNama
function cekNama(nama) {
  if (nama.length < 3) {
    throw new ValidasiError("Nama terlalu pendek");
  }
  return "Nama valid";
}

// TRY 1
try {  
  let mahasiswa = ["Andi", "Budi", "Citra"];
  console.log(mahasiswa[5].toUpperCase());
} catch (error) {
  console.log("Terjadi error: " + error.message);
} finally {  
  console.log("Proses selesai.");
}

// TRY 2
try {
  console.log(cekUsia(16));
} catch (error) {
  console.log("Terjadi kesalahan: " + error.message);
}

// TRY 3
try {  
  console.log(cekNama("Jo")); 
} catch (error) {
  if (error instanceof ValidasiError) {
    console.log("Terjadi kesalahan validasi: " + error.message);
  } else {  
    console.log("Kesalahan lain: " + error.message);
  }
}
