export const addNumberUtil = (inputValue, valueToAdd) => {
  if (inputValue === '0' && valueToAdd !== '.') {
    return String(valueToAdd);
  }

  if (valueToAdd === '.' && inputValue.includes('.')) {
    return inputValue;
  }

  return inputValue + String(valueToAdd);
};
