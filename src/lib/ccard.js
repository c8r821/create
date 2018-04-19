import types from "./types"

/* Functions alongside my list of card types and regular expressions to identify the card by number. */
const getType = number => {
    for (let {regex, ...type} of types)
        if (regex.test(number))
            return type;

    return null;
}

/* Calculates the sum of the credit card according to Luhn's algorithm */
const cardSum = number => {
    let sum = 0;
    let parity = number.length % 2;

    for (let x = number.length - 2; x > -1; x--) {
        let num = +number[x];
        if (x % 2 === parity)
            num *= 2;
        if (num > 9)
            num -= 9;
        sum += num;
    }

    return sum;
}

/* Validated that the card is appropriately typed and also passes Luhn's algorithm via the check digit */
const isValid = (number, type) => {
    if (type === null)
        return false;

    let sum = cardSum(number);
    let check = +number[number.length - 1];
    
    return ((sum * 9) % 10 === check);
}


export { getType, isValid };