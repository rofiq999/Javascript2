// Buatlah fungsi yang memiliki parameter nilaiAwal (number) dan nilaiAkhir (number), serta dataArray (array).
// Fungsi tersebut memiliki validasi nilaiAwal < nilaiAkhir dan jumlah data dalam dataArray harus lebih dari 5.
// Fungsi tersebut akan mencari data didalam dataArray yang memiliki nilai diantara nilaiAwal dan nilaiAkhir,
//mengurutkan hasil pencarian dan menampilkannya ke layar/console.

// Contoh:
// SeleksiNilai(5, 20 , [2, 25, 4, 14, 17, 30, 8])

// Output: [8, 14, 17]

function seleksiNilai(nilaiAwal, nilaiAkhir, dataArray) {
  //validasi
  for (let i = 0; i < dataArray.length; i++) {
    if (typeof dataArray[i] !== 'number') {
      console.log('input array harus number');
    }
  }
  if (typeof nilaiAwal !== 'number') {
    console.log('nlai awal harus number');
  }
  if (typeof nilaiAkhir !== 'number') {
    console.log('nilai akhir harus number');
  }

  //logika
  if (nilaiAwal > nilaiAkhir) {
    console.log('Nilai akhir harus lebih besar dari nilai awal');
  } else if (dataArray.length < 5) {
    console.log('Jumlah data harus lebih dari 5');
  } else {
    const arr1 = dataArray.sort((a, b) => a - b);
    // console.log(arr1);
    const arr2 = arr1.filter((jarjit) => jarjit > nilaiAwal && jarjit < nilaiAkhir);
    console.log(arr2);
  }
}
seleksiNilai(2, 20, [2, 25, 4, 14, 6, 9]);
