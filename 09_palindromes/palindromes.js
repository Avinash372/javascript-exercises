const palindromes = function (input) {
    let mArray = input.replace(/[^a-zA-Z]/g, "").toLowerCase();
    let result = '';
    for(let i = mArray.length-1; i>=0; i--){
      result+=mArray[i]
    }
    if(result===mArray){
      return true
    } else {
      return false
    }
    return result;
  };
console.log(palindromes("!A car, a man, a maraca"))
// Do not edit below this line
module.exports = palindromes;
