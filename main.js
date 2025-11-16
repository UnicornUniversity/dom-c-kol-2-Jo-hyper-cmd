//TODO add imports if needed
//import { exMain } from "./exclude/exampleAss2.js"
//TODO add/change doc as needed
//zaciatokVypracovania: 11/11/25
/**
 * TODO - Write functional code for this application. You can call any other function, but usage of ".toString(numberSystem)" and "Number.parseInt(number, numberSystem)" is forbidden (only permitted when used on individual digits).
 * The main function which calls the application.
 * TODO - Please, add specific description here for the application purpose.
 * @param {string} inputNumber number that is being converted
 * @param {number} inputNumberSystem numerical system that the inputNumber is being converted from
 * @param {number} outputNumberSystem numerical system that the inputNumber is being converted into
 * @returns {string} containing number converted to output system
 */
 export function main(inputNumber, inputNumberSystem, outputNumberSystem) {
  if (inputNumberSystem < outputNumberSystem) {
    let number = inputNumber.toString();
    let conversionResult = 0;
    let weight = 1;

    for (let i = number.length - 1; i >= 0; i--) {
      let digit = Number(number[i]);

      conversionResult += digit * weight;
      weight *= inputNumberSystem;
    }
    return conversionResult;
  } else if (inputNumberSystem > outputNumberSystem) {
    let number = inputNumber;
    let result = [];

    while (number > 0) {
      let surplus = number % outputNumberSystem;
      result.unshift(surplus);
      number = Math.floor(number / outputNumberSystem);
    }

    let conversionResult = Number(result.join(''));
    return conversionResult;
  } else if (inputNumberSystem === outputNumberSystem) {
    return inputNumber;
  }
}

console.log(main(100, 10, 2));

/**
 * TODO - Change this to contain all input number systems that your application can convert from.
 * Function which returns which number systems are permitted on input.
 * @returns {Array} array of numbers refering to permitted input systems
 */
export function permittedInputSystems() {
  return [10, 2];
}

/**
 * TODO - Change this to contain all output number systems that your application can convert to.
 * Function which returns which number systems are permitted on output.
 * @returns {Array} array of numbers refering to permitted output systems
 */
export function permittedOutputSystems() {
  return [10, 2];
}
