const CC_TYPES = {
    "American Express": /3[4,7]\d{13}/, /* AMEX */
    "VISA": /4\d{15}/, /* VISA */
    "Diners Club": /(30[0-59]\d{11})|(3095\d{10})|(36\d{12})|(3[8-9]\d{12})/, /* DINERS CLUB */
    "MasterCard": /(5[1-5]|2[2-7])\d{14}/, /* MASTERCARD */
    "JCB": /((2131|1800)\d{12})|(35\d{14})/, /* JCB */
    "Discover": /(60110[0-9]\d{10})|((6011[23][0-9]|60114[0-9])\d{10})|(601174\d{10})|(60117[7-9]\d{10})|((60118[6-9]|60119[0-9])\d{10})|((64[4-9]|65[0-9])\d{13})/ /* DISCOVER */
};


const getType = number => {
    number = number.replace(/ /g, '');
    for (let [type, regex] of Object.entries(CC_TYPES))
        if (regex.test(number))
            return type;

    return null;
}

const cardSum = number => {
    let sum = +number[number.length - 1];
    const length = number.length;
    const parity = length % 2;

    for (let x = 0; x < length; x++) {
        let num = +number[i];
        if (x % 2 === parity)
            num *= 2;
        if (num > 9)
            num -= 9;
        sum += num;
    }
}

const isValid = (number, type) => {
    if (type === 'INVALID')
        return false;
    
    return (cardSum(number) % 10 === 0);
}


export { getType, isValid };