const removeFromArray = function(arrayRecibido,num) {

let array = [];

array = arrayRecibido;

const index = array.indexOf(num);

if (index > -1) { 
    array.splice(index, 1);

return array;

};
}


// Do not edit below this line
module.exports = removeFromArray;
