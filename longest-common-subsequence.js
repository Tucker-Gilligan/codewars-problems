//not solved yet
function LCS(aSequence, bSequence) {
  let aArray = aSequence.split('');
  let bArray = bSequence.split('');
  let cArray = [];

  aArray.map(item => bArray.includes(item) && cArray.push(item));
  cArray.map(item => {
    if (bArray.includes(item) && aArray.includes(item)) {
      bArray.splice(bArray.indexOf(item), 1);
      aArray.splice(aArray.indexOf(item), 1);
    } else {
      cArray.splice(cArray.indexOf(item), 1);
    }
  });

  return cArray.join('');
}
