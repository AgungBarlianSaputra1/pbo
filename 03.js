class Mahasiswa {
  constructor(nama, nim, jurusan) {
    this.nama = nama;
    this.nim = nim;
    this.jurusan = jurusan;
  }

  belajar() {
    console.log(this.nama + " sedang belajar.");
  }

  info() {
    console.log(`Nama: ${this.nama}, NIM: ${this.nim}, Jurusan: ${this.jurusan}`);
  }
}

class MahasiswaS1 extends Mahasiswa {
  tugas() {
    console.log(this.nama + " sedang mengerjakan tugas.");
  }
}

class MahasiswaS2 extends Mahasiswa {
  kelompok() {
    console.log(this.nama + " sedang mengerjakan tugas kelompok.");
  }
}

const mhs1 = new Mahasiswa("Agung", "09876", "Informatika");
const mhs2 = new MahasiswaS1("Barok", "12345", "Informatika");
const mhs3 = new MahasiswaS2("Iril", "10926", "Informatika");

mhs1.belajar();   // Ilqi sedang belajar.
mhs1.info();      // Nama: Agung, NIM: 09876, Jurusan: Informatika

mhs2.tugas();     // Budi sedang mengerjakan tugas.
mhs3.kelompok();     // Sari sedang mengerjakan tugas kelompok.
