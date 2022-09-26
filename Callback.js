const name = ['Abigail', 'Alexandra', 'Alison', 'Amanda', 'Angela', 'Bella', 'Carol', 'Caroline', 'Carolyn', 'Deirdre', 'Diana', 'Elizabeth', 'Ella', 'Faith', 'Olivia', 'Penelope'];

function searchName(search, jmlDicari, callback) {
  if (typeof search !== 'string') return 'input harus bernilai string';
  if (typeof jmlDicari !== 'number') return 'input harus number';
  if (typeof callback !== 'function') return 'input harus bernilai function';
  if (typeof jmlDicari <= 0) return 'input harus lebih dari 0';

  let nameArr = [];
  for (let i = 0; i < name.length; i++) {
    if (nameArr.length < jmlDicari && callback(name[i], search)) {
      nameArr.push(name[i]);
    }
  }
  return nameArr;
}
const newdata = (el, searched) => {
  return el.toLowerCase().includes(searched);
};
console.log(searchName('an', 3, newdata));
