const { promiseTheaterIXX, promiseTheaterVGC } = require("./external.js");

// TODO: Buat fungsi promiseOutput sesuai ketentuan readme
const promiseOutput = async (hasil) => {
  const theaterIXX = await promiseTheaterIXX();
  const theaterVGC = await promiseTheaterVGC();
  const arrTheater = [...theaterIXX, theaterVGC];

  return arrTheater.filter((item) => item.hasil === hasil).length;
};

module.exports = {
  promiseOutput,
};
