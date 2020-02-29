/**
 * Program ini merupakan simulator dari toko hewan peliharaan. Tiap hewan ada nama, tipe dan harga.
 * Kalian harus mengimplementasikan function `purchase`.
 * Function purchase menerima input: `money`.
 * Money merupakan jumlah uang dari orang tersebut.
 * Barang yang dibeli selalu akan terurut dari daftar belanjaan dibawah ini.
 * (daftar dibaca dari atas kebawah):
 *   |   -Beetle
 *   |   -Cat
 *   |   -Nemo
 *   |   -Dog
 *   |   -Kabuto
 *   |   -Dory
 *   |   -Deer
 *   |   -Grasshopper
 *   V   -Shark
 * Ketika berbelanja, dia akan selalu membeli binatang sesuai urutan dan yang masih memiliki stock. Karena dia ingin membeli variasi binatang yang banyak, dia akan 
 * selalu membeli satu buah dari binatang-binatang ini baru dia akan mengulangi proses membeli tersebut dari atas daftar belanjaan jika uangnya masih cukup. 
 * Program akan berhenti apabila sisa uang tidak cukup untuk membeli binatang apapun atau stok dari binatang sudah tidak mencukupi lagi.
 * 
 * Rules:
 * -Dilarang menggunakan built-in function selain .push()
 * 
 */


function purchase(money) {
    let animals = [
        { name: 'Beetle', price: 23000, stock: 3, type: 'insect' },
        { name: 'Cat', price: 20000, stock: 2, type: 'mammal' },
        { name: 'Nemo', price: 35000, stock: 1, type: 'fish' },
        { name: 'Dog', price: 25000, stock: 4, type: 'mammal' },
        { name: 'Kabuto', price: 18000, stock: 1, type: 'insect' },
        { name: 'Dory', price: 11000, stock: 1, type: 'fish' },
        { name: 'Deer', price: 21000, stock: 1, type: 'mammal' },
        { name: 'Grasshopper', price: 19000, stock: 3, type: 'insect' },
        { name: 'Shark', price: 12000, stock: 1, type: 'fish' },
    ]
    //implementasikan function disini

    let harga = []
    for (let i = 0; i < animals.length; i++) {
        harga.push(animals[i].price)
    }

    for (let i = 1; i < harga.length; i++) {
        for (let j = 0; j < i; j++) {
            if (harga[i] > harga[j]) {
                let temp = harga[i]
                harga[i] = harga[j]
                harga[j] = temp
            }
        }
    }

    let temp = []
    while (money > harga[harga.length - 1]) {
        for (let i = 0; i < animals.length; i++) {
            if (animals[i].price < money && animals[i].stock > 0) {
                temp.push(animals[i].name)
                money -= animals[i].price
                animals[i].stock--
            }
            // console.log(money);
        }
    }

    return temp
}

console.log(purchase(100000)) //[ 'Beetle', 'Cat', 'Nemo', 'Kabuto' ]
console.log(purchase(15000)) //[ 'Dory' ]
console.log(purchase(55000)) //[ 'Beetle', 'Cat', 'Dory' ]
console.log(purchase(0)) //[]
console.log(purchase(210000)) /*
['Beetle', 'Cat', 'Nemo', 'Dog', 'Kabuto', 'Dory', 'Deer', 'Grasshopper', 'Shark','Beetle'] */



