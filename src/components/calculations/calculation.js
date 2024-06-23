// function binarySearch(arr,value,startPos,endPos){
//     if(startPos > endPos) return -1;
  
//     let middleIndex = Math.floor(startPos+endPos)/2;
  
//     if(arr[middleIndex] === value) return middleIndex;
  
//     else if(arr[middleIndex] > value){
//       return binarySearch(arr,value,startPos,middleIndex-1);
//     }
//     else{
//       return binarySearch(arr,value,middleIndex+1,endPos);
//     }
//   }   

// const value = binarySearch([12,13,23,13,52,3,5,22,443,22,44,22,3,2],22,0,13)

// console.log(value);


// const b = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// for (let i = 0; i < 10; i++) {
//   setTimeout(() => console.log(b[i]), 1000);
// }

// for (var i = 0; i < 10; i++) {
//   setTimeout(() => console.log(b[i]), 1000);
// }


function sum2(){
  const obj = {};

  return function sum1(a,b){
    if(!obj[`${a},${b}`]){
      console.log("INSIDE if")
      obj[`${a},${b}`] = a+b;
    }
      return  obj[`${a},${b}`];
  }
}

const memoisedSum = sum2();

console.log(memoisedSum(2,3));
console.log(memoisedSum(2,3));