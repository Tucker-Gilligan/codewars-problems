function alphabetPosition(myString) {
  myString.toLowerCase().replace(/[^a-zA-Z0-9]/g, '');
  let theAlphabet = {
    a: 1,
    b: 2,
    c: 3,
    d: 4,
    e: 5,
    f: 6,
    g: 7,
    h: 8,
    i: 9,
    j: 10,
    k: 11,
    l: 12,
    m: 13,
    n: 14,
    o: 15,
    p: 16,
    q: 17,
    r: 18,
    s: 19,
    t: 20,
    u: 21,
    v: 22,
    w: 23,
    x: 24,
    y: 25,
    z: 26,
  };

  return myString;
}

function alphabetPosition(myString) {
  myString = myString.toLowerCase().replace(/[^a-zA-Z]/g, '');
  let theAlphabet = {
    a: 1,
    b: 2,
    c: 3,
    d: 4,
    e: 5,
    f: 6,
    g: 7,
    h: 8,
    i: 9,
    j: 10,
    k: 11,
    l: 12,
    m: 13,
    n: 14,
    o: 15,
    p: 16,
    q: 17,
    r: 18,
    s: 19,
    t: 20,
    u: 21,
    v: 22,
    w: 23,
    x: 24,
    y: 25,
    z: 26,
  };
  const newArray = myString.split('');

  let codedArray = newArray.map(item => (item = theAlphabet[item]));
  return codedArray.join(' ');
}

function alphabetPosition(myString) {
  myString = myString.toLowerCase().replace(/[^a-zA-Z]/g, '');

  const newArray = myString.split('');

  let codedArray = newArray.map(item => {
    return (item = item.charCodeAt() - 96);
  });
}

function alphabetPosition(myString) {
  return myString
    .toLowerCase()
    .replace(/[^a-zA-Z]/g, '')
    .split('')
    .map(item => (item = item.charCodeAt() - 96))
    .join(' ');
}

let theAlphabet = {
  a: 1,
  b: 2,
  c: 3,
  d: 4,
  e: 5,
  f: 6,
  g: 7,
  h: 8,
  i: 9,
  j: 10,
  k: 11,
  l: 12,
  m: 13,
  n: 14,
  o: 15,
  p: 16,
  q: 17,
  r: 18,
  s: 19,
  t: 20,
  u: 21,
  v: 22,
  w: 23,
  x: 24,
  y: 25,
  z: 26,
};
