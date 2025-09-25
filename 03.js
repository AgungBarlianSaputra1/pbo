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
    console.log(Nama: ${this.nama}, NIM: ${this.nim}, Jurusan: ${this.jurusan});
  }
}

class MahasiswaS1 extends Mahasiswa {
  ujian() {
    console.log(this.nama + " sedang ujian skripsi.");
  }
}

class MahasiswaS2 extends Mahasiswa {
  tugas() {
    console.log(this.nama + " sedang mengerjakan tugas penelitian.");
  }
}

const mhs1 = new Mahasiswa("Ilqi", "12345", "Informatika");
const mhs2 = new MahasiswaS1("Budi", "67890", "Sistem Informasi");
const mhs3 = new MahasiswaS2("Sari", "54321", "Teknik Komputer");

mhs1.belajar();   // Ilqi sedang belajar.
mhs1.info();      // Nama: Ilqi, NIM: 12345, Jurusan: Informatika

mhs2.ujian();     // Budi sedang ujian skripsi.
mhs3.tugas();     // Sari sedang mengerjakan tugas penelitian.
