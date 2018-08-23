//Program for largest / second largest numbers.

// let array = [1,3,4,2,5];
// array.sort();
// console.log(array[array.length-1]);

// let array = [1,5,4,2,3];
// array.sort();
// console.log(array[array.length-2]);


//program for .reduce().
// let array = [1,2,3,4];
// array.sort();

// let data = (accumulator,currentValue,value) => accumulator + currentValue + value;

// console.log(array.reduce(data,5,5));

//program for .map().
// let array = [1,5,8,10];

// const map1 = array.map(function(x){
//     return x * 2;
// });
// console.log(map1);

//Program for .map() without using map. 
// let array = [1,5,8,10];

// for(let i = 0; i < array.length; i++){
//     array[i] = array[i] * 2;
// };
// console.log(array);


// Armstrong number.
// function data(n){
//     var result = false;
//     var a = n;
//     var b = n.toSring().length;
//     var sum = 0;

//     while(n > 0){
//         var c = n % 10;
//         sum = sum + Math.pow(c,b);

//         n = Math.floor(n/10);
//  }
//  result = sum == a;
//  return result;
// }


//function generator *yeild.
// function* foo(index) {
//     while (index < 2) {
//       yield index++;
//     }
//   }
  
//   const iterator = foo(0);
  
//   console.log(iterator.next().value);
//   console.log(iterator.next().value);
//   console.log(iterator.next().value);






