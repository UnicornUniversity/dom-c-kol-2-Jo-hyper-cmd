//zaciatokVypracovania: 11/11/25

/**
 * The main entry point of the application.  
 * Converts numbers between decimal (base 10) and binary (base 2) systems.
 * Conversion is implemented manually without using number.toString(base)
 * or parseInt(number, base), except when reading individual digits.
 *
 * This version reflects the original student logic:
 * - if input base < output base → convert using positional weights
 * - if input base > output base → convert using repeated division
 * - if bases are equal → return input
 *
 * @param {string | number} inputNumber - Number to be converted.
 * @param {number} inputNumberSystem - Base of the input number.
 * @param {number} outputNumberSystem - Base to convert into.
 * @returns {string | number} - Converted number.
 */
 export function main(inputNumber, inputNumberSystem, outputNumberSystem) {

  // input → output where input base < output base (e.g. 2 → 10)
  if (inputNumberSystem < outputNumberSystem) {
    let number = inputNumber;
    let conversionResult = 0;
    let weight = 1;

    for (let i = number.length - 1; i >= 0; i--) {
      let digit = Number(number[i]);
      conversionResult += digit * weight;
      weight *= inputNumberSystem;
    }

    return conversionResult;
  }

  // input → output where input base > output base (e.g. 10 → 2)
  else if (inputNumberSystem > outputNumberSystem) {
    let number = inputNumber;
    let result = [];

    while (number > 0) {
      let surplus = number % outputNumberSystem;
      result.unshift(surplus);
      number = Math.floor(number / outputNumberSystem);
    }

    let conversionResult = result.join('');
    return conversionResult;
  }

  // same base → no conversion
  else if (inputNumberSystem === outputNumberSystem) {
    return inputNumber;
  }

  // unreachable, but required for completeness
  return "Conversion error";
}

/**
 * Returns all allowed input number systems.
 * @returns {Array<number>} permitted input bases
 */
export function permittedInputSystems() {
  return [10, 2];
}

/**
 * Returns all allowed output number systems.
 * @returns {Array<number>} permitted output bases
 */
export function permittedOutputSystems() {
  return [10, 2];
}
