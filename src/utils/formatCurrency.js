export const formatCurrency = (currentCurrency) => {
  return new Intl.NumberFormat('en', {
    style: 'currency',
    currency: currentCurrency,
  })
    .format(0)
    .split('0')[0]
    .trim();
};
