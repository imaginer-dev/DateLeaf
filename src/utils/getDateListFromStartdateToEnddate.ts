export const getDateListFromStartDateToEndDate = (startDate: string, endDate: string) => {
  const dateList = [];
  const start = new Date(startDate);
  const end = new Date(endDate);

  while (start <= end) {
    dateList.push(new Date(start).toISOString().split('T')[0].toString());
    start.setDate(start.getDate() + 1);
  }

  return dateList;
};

export const notEqualDate = (date1: string, date2: string) => {
  return date1.split('T')[0] !== date2.split('T')[0];
};
