/**
 * Kalian akan membuat sebuah program yang akan mensimulasikan program yang menghitung ongkos kirim.
 * Input ini merupakan array berisi beberapa string dengan format sebagai berikut:
 * [Nomor Transaksi]-[Nama]-[Asal Pengiriman]-[Tujuan Pengiriman].
 * Kalian harus mengimplementasikan function-function yang terdapat di dalam program ini (ada 5 function).
 * 
 * Asal Pengiriman dan Tujuan pengiriman adalah nama kota yang merepresentasikan asal kota tersebut. 
 * Biaya pengiriman dari 1 kota ke kota lain yang berdekatan (bersebalahan) adalah 20.000
 * Terdapat 5 kota yang memiliki urutan:
 * Jakarta -> Depok -> Bogor -> Tangerang -> Bekasi
 *  
 *  - Jakarta ke Depok memiliki biaya pengiriman 20.000, karena hanya melalui 1 kota
 *  
 * Pengiriman juga bisa berlaku sebaliknya, yaitu pengiriman dari Bekasi -> Tangerang atau Bekasi -> Jakarta. Harganya juga 20.000 per kota.
 * Contoh: 
 *     - Bekasi ke Bogor memiliki biaya pengiriman 40.000, karena melalui 2 kota
 * 
 * Program ini dibagi menjadi 5 fungsi.  Kalian harus mengimplementasikan fungsi-fungsi tersebut. Masing masing function akan memiliki 
 * deskripsi tentang apa fitur yang diperlukan di dalam masing-masing function. 
 *
 * Function `hitungOngkir` merupakan driver function, function tersebut sudah diisi dengan urutan pemanggilan yang diperlukan soal.
 * 
 *  Rules:
 * -Tidak boleh mengubah isi/urutan pemanggilan function yang ada di function hitungOngkir()!
 * -Dilarang menggunakan built-in function selain: .split(), .push(), .sort(), parseInt() dan semua built-in function yang terdapat di Math!
 *
 */

/** 
   Function ini akan menerima input berupa array berisi string transaksi pengiriman barang.
   Function ini akan memisahkan input dengan delimiter '-'. 
   Output dari function ini adalah array multidimensi yang memisahkan string input transaksi tersebut. 
*/
function splitTransactions(array) {
   //implementasikan fungsi ini 

   let hasil = []
   for (let i = 0; i < array.length; i++) {
      var temp = []
      let tempString = ''
      for (let j = 0; j < array[i].length; j++) {
         if (array[i][j] == '-') {
            temp.push(tempString)
            tempString = ''
         } else {
            tempString += array[i][j]
         }
      }
      temp.push(tempString)
      hasil.push(temp)
   }

   return hasil
}
let ada = ['1-Rafi-Jakarta-Depok', '4-Afif-Bekasi-Tangerang', '3-Rafki-Bogor-Bekasi', '2-Zara-Tangerang-Bekasi']
// console.log('splitTransactions: ', splitTransactions(ada));
let adc = splitTransactions(ada);
/*
   Function ini menerima input berupa array multidimensi dari fungsi `splitTransactions`, dan 
   akan mengurutkan array-array di dalamnya dari angka yang paling kecil terlebih dahulu (disebelah kiri)
   Output yang diharapkan adalah sebuah array multidimensi yang terurut
*/
function sortItemsByNumber(array) {
   //implementasikan fungsi ini 
   for (let i = 0; i < array.length; i++) {
      for (let j = 0; j < array.length; j++) {
         if (Number(array[i][0]) < Number(array[j][0])) {
            let temp = array[i]
            array[i] = array[j]
            array[j] = temp
         }
      }
   }

   return array
}

// console.log('sortItemsByNumber: ', sortItemsByNumber(adc));
let add = sortItemsByNumber(adc)

/*
   Function ini akan menerima input berupa array multidimensi yang sudah diurutkan dari `SortItemsByNumber`, Ubahlah masing-masing array di dalamnya menjadi object
   Output yang diharapkan dari function ini adalah sebuah array of objects, dimana masing-masing object memiliki format:
   {Number: [Nomor Transaksi], Name: [Nama pengirim], Origin: [Asal pengiriman barang], Destination: [Tujuan pengiriman barang]}
*/
function objectify(items) {
   //implementasikan fungsi ini 

   let final = []
   for (let i = 0; i < items.length; i++) {
      let hasil = {}
      hasil.Number = Number(items[i][0])
      hasil.Name = items[i][1]
      hasil.Origin = items[i][2]
      hasil.Destination = items[i][3]
      final.push(hasil)
   }

   return final
}

// console.log('objectify: ', objectify(add));
let ade = objectify(add)


/*
   Function ini akan menerima input berupa array of objects dari function `objectify`. 
   Hitunglah biaya pengiriman dari masing-masing transaksi tersebut.
   Output yang diharapkan adalah sebuah array of objects, dimana masing-masing object memiliki format: 
   {Name: [Nama pengirim], Cost: [Biaya Pengiriman]}. 
 */
function calculatePrice(items) {
   //implementasikan fungsi ini 
   var lokasi = ['Jakarta', 'Depok', 'Bogor', 'Tangerang', 'Bekasi']

   let hasil = []
   for (let k = 0; k < items.length; k++) {
      for (let i = 0; i < lokasi.length; i++) {
         for (let j = 0; j < lokasi.length; j++) {
            if (lokasi[i] == items[k].Origin && lokasi[j] == items[k].Destination) {
               var temp = {} // salah pake let
               temp.Name = items[k].Name
               if (i - j == 0) {
                  temp.Cost = 20000
               } else {
                  temp.Cost = Math.abs(i - j) * 20000
               }
            }
         }
      }
      hasil.push(temp) // blm
   }

   return hasil
}

/*
   Function ini akan memiliki output berupa array of objects dari function `calculatePrice`. 
   Jangan ubah isi dari function ini
*/
function hitungOngkir(datas) {
   return calculatePrice(objectify(sortItemsByNumber(splitTransactions(datas))))
}

console.log(hitungOngkir(['1-Rafi-Jakarta-Depok', '4-Afif-Bekasi-Tangerang', '3-Rafki-Bogor-Bekasi', '2-Zara-Tangerang-Bekasi']))
/*
 [
  { Name: 'Rafi', Cost: 20000 },
  { Name: 'Zara', Cost: 20000 },
  { Name: 'Rafki', Cost: 40000 },
  { Name: 'Afif', Cost: 20000 }
 ]
*/



