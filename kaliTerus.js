function kaliTerusRekursif(angka) {
  var newAngka = angka.toString()

  if(newAngka.length <= 1) {
      return Number(newAngka)
  } else {
      var temp = 1
      for(var i = 0; i < newAngka.length; i++) {
          temp = temp * Number(newAngka[i])
      }
      return kaliTerusRekursif(temp)
  }
}

// TEST CASES
console.log(kaliTerusRekursif(66)); // 8
console.log(kaliTerusRekursif(3)); // 3
console.log(kaliTerusRekursif(24)); // 8
console.log(kaliTerusRekursif(654)); // 0
console.log(kaliTerusRekursif(1231)); // 6