function changeVocals (str) {
    str = str.split('a').join('b')
    str = str.split('i').join('j')
    str = str.split('u').join('v')
    str = str.split('e').join('f')
    str = str.split('o').join('p')
    str = str.split('A').join('B')
    str = str.split('I').join('J')
    str = str.split('U').join('V')
    str = str.split('E').join('F')
    str = str.split('O').join('P')

    return str
}

function reverseWord (str) {
  var splitStr = str.split("")
  var reverseStr = splitStr.reverse()
  var joinStr = reverseStr.join("")

  return joinStr
}

function setLowerUpperCase (str) {
  var result = ''

  for(var i = 0; i < str.length; i++) {
      if(str[i] === str[i].toUpperCase()) {
          result += str[i].toLowerCase()
      } else if(str[i] === str[i].toLowerCase()) {
          result += str[i].toUpperCase()
      }
  }
  return result
}

function removeSpaces (str) {
  var space = str.split(' ').join('')
  return space
}

function passwordGenerator (name) {
  if(name.length <= 5 || name === undefined) {
      return 'Minimal karakter yang diinputkan adalah 5 karakter'
  } else {
      var output = ''
      output = changeVocals(name)
      output = reverseWord(output)
      output = setLowerUpperCase(output)
      output = removeSpaces(output)      
  }
  return output
}

console.log(passwordGenerator('Sergei Dragunov')); // 'VPNVGBRdJFGRFs'
console.log(passwordGenerator('Dimitri Wahyudiputra')); // 'BRTVPJDVYHBwJRTJMJd'
console.log(passwordGenerator('Alexei')); // 'JFXFLb'
console.log(passwordGenerator('Alex')); // 'Minimal karakter yang diinputkan adalah 5 karakter'
