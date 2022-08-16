import { formatHistoryDate } from '../../utils';

export const addConversionToHistoryUtil = (history, newConversion) => {
  let dateOfConversion = formatHistoryDate(newConversion.date);

  return {
    ...history,
    [dateOfConversion]: history[dateOfConversion]
      ? [...history[dateOfConversion], newConversion]
      : [newConversion],
  };
};
