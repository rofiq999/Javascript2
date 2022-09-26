//soal Nomor1

//method slice()
//Deskripsi => untuk "memotong" array menjadi array baru
//data Immutable =>  Isi array
//example

const data = [1, 2, 3, 4, 'a', 'b', 'c', 'd'];

//slice dari index ke 2 sampai 4
const slice = data.slice(2, 4);
console.log(slice);

//Method unshift
//Deskripsi => menambahkan elemen baru diawal array, dan menggeser seluruh eleman yang ada.
//data mutable => kemungkinan berubah
//example

const hero = ['Miya', 'Balmond', 'Gusion'];

const hero1 = hero.unshift('lancelot');
console.log(hero);

// Method Shift
// Deskirpsi => menghapus elemen paling awal array, dan menggeser ke bawah seluruh elemen lain di dalam Array
// Mutable => Isi array berubah
// example

const human = ['adam', 'Idris', 'Soleh'];
const nilai = human.shift();
console.log(nilai);

const nilai1 = human.shift();
console.log(nilai1);

const nilai2 = human.shift();
console.log(nilai2);

//Method ToString
//Deskripsi => untuk menkonversi array menjadi string lalu menyambungnya menjadi sebuah string dengan karakter koma sebagai pemisah
//Mutable => isi array berubah
//example

const nama = ['Dadang', 'Dedeng', 'Dodong'];
console.log(nama.toString());

//Methode Concat
//Deskripsi => untuk ”penyambungan” array, Hasil akhir dari pemanggilan fungsi ini adalah array baru dengan penambahan dari method concat()
//Mutable => isi array berubah
//example

const dota2 = ['Juggernaut', 'Lina', 'Crystal Maiden'];

const valve = dota2.concat('Enigma', 'Pudge');
console.log(dota2);
console.log(valve);
