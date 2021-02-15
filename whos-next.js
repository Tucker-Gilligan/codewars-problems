function whoIsNext(names, r) {
  if (r <= names.length) {
    return;
  }

  names.push(names[0]);
  names.push(names[0]);
  names.splice(0, 1);
  console.log(names);
  console.log(names[r]);
  whoIsNext(names, r);
  return names[r - 1];
}

console.log(whoIsNext(['a', 'b', 'c', 'd', 'e'], 10));
console.log(whoIsNext(['a', 'b', 'c', 'd', 'e'], 11));
console.log(whoIsNext(['a', 'b', 'c', 'd', 'e'], 12));
console.log(whoIsNext(['a', 'b', 'c', 'd', 'e'], 13));
