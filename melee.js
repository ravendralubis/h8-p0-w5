function meleeRangedGrouping (str) {
  var newStr = str.split(',')
  var group = []
  var melee = []
  var ranged = []
  var output = []

  if(newStr.length === 1) {
      return []
  } else {
      for(var i = 0; i < newStr.length; i++) {
          group = newStr[i].split('-')
          if(group[1] === 'Ranged') {
              ranged.push(group[0])
          } else if(group[1] === 'Melee') {
              melee.push(group[0])
          }
      }
  }
  output.push(ranged)
  output.push(melee)

  return output
}

// TEST CASE

console.log(meleeRangedGrouping('Razor-Ranged,Invoker-Ranged,Meepo-Melee,Axe-Melee,Sniper-Ranged'));
// [ ['Razor', 'Invoker', 'Sniper'], ['Meepo', 'Axe'] ]

console.log(meleeRangedGrouping('Drow Ranger-Ranged,Chen-Ranged,Dazzle-Ranged,Io-Ranged'));
// [ ['Drow Ranger', 'Chen', 'Dazzle', 'Io'], [] ]

console.log(meleeRangedGrouping('')); // []