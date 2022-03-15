function isHtml(path){
  if(path.indexOf('.html', (path.length-5))>=0){
    return true;
  } 
  else{
    return false;
  }
}



const path = "/users/download/index.html";

console.log(isHtml(path));