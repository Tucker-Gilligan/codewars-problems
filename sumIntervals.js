//not solved yet

/*
Write a function called sumIntervals/sum_intervals() that 
-Accepts an array of intervals, 
-Returns the sum of all the interval lengths. 
-Overlapping intervals should only be counted once.

====Intervals====
Intervals are represented by a pair of integers in the form of an array. 
The first value of the interval will always be less than the second value. 
Interval example: [1, 5] is an interval from 1 to 5. 
The length of this interval is 4.

====Overlapping Interval====
List containing overlapping intervals:
The sum of the lengths of these intervals is 7. 
Since [1, 4] and [3, 5] overlap, we can treat the interval as [1, 5], which has a length of 4.

*/
function sumIntervals(intervals) {
  let arrayB = [];
  let count = 0;
  if (intervals.length < 2) {
    return;
  }

  let arrayA = intervals[0];

  intervals.splice(0, 1);

  intervals.forEach(item => {
    let myArray = [];
    if (
      (arrayA[1] >= item[0] && arrayA[1] <= item[1]) ||
      (arrayA[0] >= item[0] && arrayA[0] <= item[1])
    ) {
      intervals.splice(intervals.indexOf(item), 1);
      arrayA[0] <= item[0] ? myArray.push(arrayA[0]) : myArray.push(item[0]);
      arrayA[1] >= item[0] ? myArray.push(arrayA[1]) : myArray.push(item[1]);
      arrayB.push(myArray);
    }
  });
  intervals.length === 1
    ? arrayB.push(intervals[0]) &&
      arrayB.forEach(item => {
        count += item[1] - item[0];
        console.log(count, 'count');
        return count;
      })
    : sumIntervals(intervals);
  console.log(arrayB, 'arrayB');
}

//TODO

console.log(
  sumIntervals([
    [1, 4],
    [7, 10],
    [3, 5],
  ]),
  '7'
);

console.log(
  sumIntervals([
    [1, 2],
    [6, 10],
    [11, 15],
  ]),
  '9'
); // => 9

console.log(
  sumIntervals([
    [1, 5],
    [10, 20],
    [1, 6],
    [16, 19],
    [5, 11],
  ]),
  '19'
); // => 19

console.log(
  sumIntervals([
    [1, 4],
    [7, 10],
    [3, 5],
  ]),
  '7'
); // => 7
