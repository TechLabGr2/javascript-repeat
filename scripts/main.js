let emri = "Filan Fisteku"; //string
const mosha = 20; //integjer
const isMarried = true; //boolean
const ska = null; //Null
const paDefinuar = undefined; //undefined

const objekti = {
  emri: "John Doe",
  mosha: 25,
  isMarried: true,
}; //Objekt

const vargu = [1, 2, 3, 4, 5]; //vargu

const objVarg = [
  {
    emri: "John Doe",
    mosha: 25,
    isMarried: true,
    student: true,
  },
  {
    emri: "John Doe",
    mosha: 25,
    isMarried: true,
    student: true,
  },
  {
    emri: "John Doe",
    mosha: 25,
    isMarried: true,
  },
  {
    emri: "John Doe",
    mosha: 25,
    isMarried: true,
  },
]; //varg me objekte

console.log(objVarg);

let filterVarObjekt = objVarg.filter(function (elementi) {
  return elementi.student;
});

console.log(filterVarObjekt, "Filtered");

let objVariRi = objVarg.map(function (elementi) {
  return elementi.emri;
});

console.log(objVariRi);
