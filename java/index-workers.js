function getWorkers(workers){
  for(var i=0; i<workers.length; i++){
    if(workers[i].salary >= 1000) {
      final.push(workers[i].name);
    }
  }
  return final;
}
var final=[];
const workers = [
  {"name":"John","salary":500},
  {"name":"Mike","salary":1300},
  {"name":"Linda","salary":1500}
];

console.log(getWorkers(workers));