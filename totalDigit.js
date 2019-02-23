function totalDigitRekursif(angka) {
    var newAngka = angka.toString()
    if(newAngka.length === 1) {
        return Number(newAngka)
    } else {
        return Number(newAngka[0]) + totalDigitRekursif(Number(newAngka.slice(1)))
    }
  }
  
  // TEST CASES
  console.log(totalDigitRekursif(512)); // 8
  console.log(totalDigitRekursif(1542)); // 12
  console.log(totalDigitRekursif(5)); // 5
  console.log(totalDigitRekursif(21)); // 3
  console.log(totalDigitRekursif(11111)); // 5

