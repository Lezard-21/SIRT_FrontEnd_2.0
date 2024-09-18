export function arrayToString(arrayToConvert) {
    if (!Array.isArray(arrayToConvert)) {
        return "Error, el elemento no es un array";
    }

    let convertedArray = "";

    arrayToConvert.forEach(element => {
        convertedArray += String(element) + ",";
    });

    return convertedArray.slice(0, -1);
}


export function StringToArray(stringToConvert) {
    if (!stringToConvert) {
        return [];
    }

    return stringToConvert.split(',');
}

export function arrayToAbreviacion(array) {
    let result = [];

    if (array[0] === 0) {
        result[0] = "LTC";
    }
    
    if (array[1] === 1) {
        result[1] = "LISTI";
    }

    return result;
}

