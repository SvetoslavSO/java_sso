
function filterArray(mixedArray, isEven){
  for (var i=0; i<mixedArray.length; i++){
    if(isEven(mixedArray[i])){
      final.push(mixedArray[i])
    }
  }
  return final;
}
var final=[];
const mixedArray = [3,13,74,14,66,15,22,4];
const isEven = num => {if(num%2 == 0 ) return true; else return false};
console.log(filterArray(mixedArray, isEven));