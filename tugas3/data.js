const dataMahasiswa = [
  {
      id: 1,
      nama: "Budi Santoso",
      tanggalLahir: "2000-01-15",
      fakultas: "Fakultas Ilmu Komputer",
      programStudi: "Teknik Informatika",
      semester: 6,
      nilai: {
          algoritma: 85,
          basisData: 88,
          pemrogramanWeb: 90,
      },
      aktif: true,
      organisasi: ["Himpunan Mahasiswa Teknik", "Komunitas Pemrogramman"],
  },
  {
      id: 2,
      nama: "Siti Aminah",
      tanggalLahir: "1999-05-10",
      fakultas: "Fakultas Ekonomi Bisnis",
      programStudi: "Manajemen",
      semester: 4,
      nilai: {
          manajemenKeuangan: 78,
          akuntansi: 82,
          pemasaran: 75,
      },
      aktif: true,
      organisasi: ["Koperasi Mahasiswa"],
  },
  {
      id: 3,
      nama: "Rudi Hartono",
      tanggalLahir: "1998-12-01",
      fakultas: "Fakultas Teknik",
      programStudi: "Teknik Elektro",
      semester: 8,
      nilai: {
          mekanikaTanah: 85,
          strukturBangunan: 89,
      },
      aktif: false,
      organisasi: ["Himpunan Mahasiswa Teknik Sipil"],
  },
];

console.log(dataMahasiswa);


// 1.
const [mahasiswa1] = dataMahasiswa;
const { id, nama, tanggalLahir, fakultas, programStudi, semester, nilai, aktif, organisasi } = mahasiswa1;

console.log(id, nama, tanggalLahir, fakultas, programStudi, semester, nilai, aktif, organisasi);

// 2. 

const { algoritma, basisData, pemrogramanWeb } = mahasiswa1.nilai;
console.log(algoritma, basisData, pemrogramanWeb);

// 3. 
const [organisasi1, organisasi2] = mahasiswa1.organisasi;
console.log(organisasi1, organisasi2);

// 4. 
const newOrganisasi = [...mahasiswa1.organisasi, 'Organisasi Baru'];
console.log(newOrganisasi);

// 5. 
const updatedMahasiswa = { ...mahasiswa1, fakultas: 'Fakultas Teknik', semester: 7 };
console.log(updatedMahasiswa);

//6. 
const [tahun, bulan, hari] = mahasiswa1.tanggalLahir.split('-');
console.log(tahun);

// 7. 

const statusAktif = mahasiswa1.aktif ? 'Aktif' : 'Tidak Aktif';
console.log(statusAktif);

// 8. 
const semuaNama = dataMahasiswa.map(mhs => mhs.nama);
console.log(semuaNama);

// 9. 

const mahasiswaIlmuKomputer = dataMahasiswa.filter(mhs => mhs.aktif && mhs.fakultas === 'Fakultas Ilmu Komputer');
console.log(mahasiswaIlmuKomputer);

// 10. 

const totalNilai = dataMahasiswa.reduce((total, mhs) => {
    const { nilai } = mhs;
    const sumNilai = Object.values(nilai).reduce((acc, curr) => acc + curr, 0);
    return total + sumNilai;
}, 0);
console.log(totalNilai);

// 11. 

const mahasiswaSorted = dataMahasiswa.sort((a, b) => a.semester - b.semester);
console.log(mahasiswaSorted);

// 12. 
const mahasiswaBaru = {
    id: 4,
    nama: 'Ricky Primayuda Putra',
    tanggalLahir: '2004-05-22',
    fakultas: 'Fakultas Ilmu Komputer',
    programStudi: 'Teknik Informatika',
    semester: 5,
    nilai: {
        PPB: 100,
        PWL: 100,
    },
    aktif: true,
    organisasi: ['Himpunan Mahasiswa Teknik Informatika']
};

const dataMahasiswaUpdated = [...dataMahasiswa, mahasiswaBaru];
console.log(dataMahasiswaUpdated);

// 13.

const idToDelete = 2;
const dataMahasiswaAfterDelete = dataMahasiswa.filter(mhs => mhs.id !== idToDelete);
console.log(dataMahasiswaAfterDelete);

// 14. 

const idToUpdate = 1;
const dataMahasiswaAfterUpdate = dataMahasiswa.map(mhs => 
    mhs.id === idToUpdate ? { ...mhs, semester: 8 } : mhs
);
console.log(dataMahasiswaAfterUpdate);