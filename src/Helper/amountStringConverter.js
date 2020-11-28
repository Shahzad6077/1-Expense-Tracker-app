const amountStringConverter = (amount) => {
  if (amount < 0) {
    return `-$${Math.abs(amount)}`;
  } else {
    return `$${Math.abs(amount)}`;
  }
};
export default amountStringConverter;
