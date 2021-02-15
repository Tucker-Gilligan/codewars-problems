//solved
function alphabetPosition(myString) {
  return myString
    .toLowerCase()
    .replace(/[^a-zA-Z]/g, '')
    .split('')
    .map(item => (item = item.charCodeAt() - 96))
    .join(' ');
}

console.log(alphabetPosition('abcdefgh'));
