/**
 * Function maxSum menerima input berupa array berisi integer. 
 * maxSum akan mencari 'pasangan' integer yang akan menghasilkan jumlah terbesar jika
 * keduanya dijumlahkan. Pasangan integer ini tidak boleh terdiri dari integer yang sama ([9,9], [3,3] tidak boleh!)
 * 
 * Output yang diharapkan adalah sebuah array berisi kedua angka tersebut. 
 * Jika input merupakan kumpulan angka yang sama maka output adalah angka tersebut dalam sebuah array. (Ini karena tidak ada pasangan angka di dalam array tersebut).
 * Lihatlah contoh test case untuk lebih jelasnya. Tuliskanlah Pseudocode kalian diatas code tersebut.
 * 
 * Contoh:
 * -Input: [1,2,3]
 * -Output: [2,3]
 * 
 * -Input:[1]
 * -Output[1]
 * 
 * 
 * Rules:
 * -Tulislah Pseudocode diatas Code kalian
 * -Dilarang menggunakan built-in function selain .push()
 * 
 */

//Write pseudocode here

// FUNCTION ( Array){

//     TEMP Object
//     FOR i=0 to Array length 
//         IF (Object Array [i] == undefined) 
//             CREAD Object Array [i] = 0
//         END IF
//         SUM Object Array [i] ++
//     END FOR

//     TEMP newArray
//     FOR key IN TEMP Object
//         PUSH KEY to new Array
//     END FOR

//     IF (newArray length > 1)
//         RETURN ARRAY (NUMBER(newArray[newArray length - 1]) , NUMBER(newArray[newArray length - 2]))
//     ELSE IF (newArray length > 1)
//         RETURN ARRAY NUMBER(newArray)
//     END IF
// }

function maxSum(array) {
    //implementasikan function disini
    var hasil = {}
    for (let i = 0; i < array.length; i++) {
        if (hasil[array[i]] == undefined) {
            hasil[array[i]] = 0
        }
        hasil[array[i]]++
    }

    var final = []
    for (const k in hasil) {
        final.push(k)
    }

    if (final.length > 1) {
        return [Number(final[final.length - 1]), Number(final[final.length - 2])]
    } else {
        return [Number(final)]
    }
}

console.log(maxSum([1, 3, 5, 1, 9])) //[5,9]
console.log(maxSum([1])) //[1]
console.log(maxSum([5, 5, 5, 4])) //[5,4]
console.log(maxSum([5, 5, 5, 5])) //[5]
console.log(maxSum([5, 5, 5, 5,8,90,67,13])) //[5]
