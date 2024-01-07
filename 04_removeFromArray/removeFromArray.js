const removeFromArray = function(array, ...arg) {
    const newArray = [];
    
    array.forEach(element => {
        if (!arg.includes(element))
        newArray.push(element);
    });
    return newArray;
}

// Do not edit below this line
module.exports = removeFromArray;
