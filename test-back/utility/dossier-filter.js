/**
 * @function dateChecker() requires [inputDate]
 * is evaluated to check if its null, undefined or declared.
 * @returns true or false
 */
const dateChecker = (inputDate) =>
  inputDate === undefined || inputDate === null || !inputDate;

exports.dateChecker = dateChecker;

/**
 * @function dateEvaluation() requires three input dates [minDate, maxDate, targetDate] in correct order
 * three input dates are evaluated to check certain conditions of range values.
 * @returns true or false
 */
const dateEvaluation = (minDate, maxDate, targetDate) => {
  if (dateChecker(minDate)) {
    if (dateChecker(maxDate)) {
      return true;
    }
    if (targetDate <= new Date(maxDate)) {
      return true;
    }
    return false;
  } else {
    if (dateChecker(maxDate)) {
      if (targetDate >= new Date(minDate)) {
        return true;
      }
    }

    if (targetDate >= new Date(minDate) && targetDate <= new Date(maxDate))
      return true;
    return false;
  }
};

exports.dateEvaluation = dateEvaluation;

/**
 * @function stringChecker() requires [inputString]
 * is evaluated to check if its null, undefined or declared.
 * @returns true or false
 */
const stringChecker = (inputString) =>
  inputString === undefined || inputString === null || !inputString;

exports.stringChecker = stringChecker;

/**
 * @function stringEvaluation() requires [inputString ,inputObjects|| inputArray]
 * is evaluated to check if its null, undefined or declared.
 * @returns true or false
 */

const stringEvaluation = (inputFilter, fieldFilter) => {
  if (stringChecker(inputFilter)) {
    return true;
  } else {
    if (inputFilter.includes(fieldFilter)) {
      return true;
    }
  }
  return false;
};

exports.stringEvaluation = stringEvaluation;

/**
 * @function stringChecker() requires [inputString]
 * is evaluated to check if its null, undefined or declared.
 * @returns true or false
 */
 const booleanChecker = (inputBoolean) =>
 inputBoolean === undefined || inputBoolean === null || !inputBoolean;

exports.booleanChecker = booleanChecker;