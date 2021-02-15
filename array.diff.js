/*
Your goal in this kata is to implement a difference function,
which subtracts one list from another and returns the result.

It should remove all values from list a, which are present in list b.

arrayDiff([1,2],[1]) == [2]
If a value is present in b, all of its occurrences must be removed from the other:

arrayDiff([1,2,2,2,3],[2]) == [1,3]
*/

function arrayDiff(arrayA, arrayB) {
  let arrayC = [];
  arrayA.forEach(item => {
    !arrayB.includes(item) && arrayC.push(item);
  });
  return arrayC;
}

console.log(arrayDiff([], [4, 5]), 'should equal []'); //should equal []
console.log(arrayDiff([3, 4], [3]), 'should equal [4]'); //should equal [4]
console.log(arrayDiff([1, 8, 2], []), 'should equal [1, 8, 2]'); //should equal [1, 8, 2]
console.log(arrayDiff([1, 2, 2], [2]), 'should be [1]');
console.log(
  arrayDiff([-3, 3, 16, -11, 0, -17, 17], [-11, 17, -3, -17]),
  'should equal [3, 16, 0]'
);
