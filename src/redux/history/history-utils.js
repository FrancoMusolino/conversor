import { formatHistoryDate } from '../../utils';

export const addConversionToHistory = (history, newConversion) => {
  let dateOfConversion = formatHistoryDate(newConversion.date);

  return {
    ...history,
    [dateOfConversion]: history[dateOfConversion]
      ? [...history[dateOfConversion], newConversion]
      : [newConversion],
  };
};
