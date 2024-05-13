export const isValidGroupScheduleName = (name: string) => {
  return name.length > 0;
};

interface IsValidGroupSchedulePeriodParams {
  startDate: string;
  endDate: string;
}

export const getGroupSchedulePeriodErrorDefineObject = ({ startDate, endDate }: IsValidGroupSchedulePeriodParams) => {
  if (!bothDatesHasValue({ startDate, endDate })) {
    return {
      isError: true,
      errorText: '모임 시작일과 종료일을 입력해주세요.',
    };
  }

  if (!startDateIsEarlierThanEndDate({ startDate, endDate })) {
    return {
      isError: true,
      errorText: '모임 시작일이 종료일보다 빠를 수 없습니다.',
    };
  }

  return {
    isError: false,
    errorText: '',
  };
};

const bothDatesHasValue = ({ startDate, endDate }: IsValidGroupSchedulePeriodParams) => {
  return startDate.length > 0 && endDate.length > 0;
};

const startDateIsEarlierThanEndDate = ({ startDate, endDate }: IsValidGroupSchedulePeriodParams) => {
  return new Date(startDate) < new Date(endDate);
};
