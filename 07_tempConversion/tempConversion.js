const ftoc = function(farenheit) {

let celsius = (farenheit - 32)*(5/9);

celsius = Math.round(celsius * 10)/10;

return celsius;

};


console.log(ftoc(32))

const ctof = function(celsius) {

  let farenheit = (celsius + 32)*(5/9);

  farenheit = Math.round(farenheit * 10)/10;

  return farenheit;
};

console.log(ctof(0))

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};
