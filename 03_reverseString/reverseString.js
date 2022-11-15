const reverseString = function(input) {

const arrayReverso = [];

for (let i = 0;i<input.length; i++){

    arrayReverso[input.length-i] = input[i];

}

const reverso = arrayReverso.join('');

return reverso;
};

// Do not edit below this line
module.exports = reverseString;
