console.log("JAVASCRIPT - week8")

let arr= [];
for (let i=1; i<= 1000;i++){
    arr.push(i);
}
console.log(arr);
function divisibilityChecker(x){
  return function(y){
      if(y=>y%x === 0){
          return false;
      }else{
          return true;
      }
  }
}
const divisibilityCheckerFive = divisibilityChecker(3);
console.log(divisibilityCheckerFive(2));

let newarr=[];
for (let i=1; i<= 50;i++){
    newarr.push(i);
}
console.log(newarr);

const divisibilityCheck = function(){ 
    let newItems=[];
    return function(){
        for (let i = 0; i < newarr.length;i++){
            let items =arr.filter(y=> y% newarr[i]===0)
           newItems.push(items.length);
        }
        return newItems;
    }

}
const NumDivisible = divisibilityCheck();
console.log(NumDivisible());

