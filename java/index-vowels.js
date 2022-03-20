function getVowels(string){
  for (var i=0; i<string.length; i++){
    for(var j=0; j<vowels.length; j++){
      if (string[i] == vowels[j]){
        result+=vowels[j];
        pos++;
      }
    }
  }
  return result;
}
var result = "";
var pos = 0;
var vowels = "уеёыаоэяию"
var string = "Привет! Как дела?";
console.log(getVowels(string));