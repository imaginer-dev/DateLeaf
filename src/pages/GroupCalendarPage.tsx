import AppBar from '@/components/common/AppBar';
import HamburgerButton from '@/components/common/SideBar/HamburgerButton';
import Calendar from '@/components/common/Calendar';
import { useParams } from 'react-router-dom';
import { Loading } from '.';
import { useGetOneGroup } from '@/react-queries/useGetOneGroup.ts';
import { useGetAllMemberSchedule } from '@/react-queries/useGetAllMemberSchedule.ts';
import { getMemberName } from '@/utils/getMemberName.ts';
import { getDateListFromStartDateToEndDate, notEqualDate } from '@/utils/getDateListFromStartdateToEnddate.ts';
import { useCallback, useMemo } from 'react';

const colors = [
  'bg-red-200',
  'bg-yellow-200',
  'bg-green-200',
  'bg-blue-200',
  'bg-indigo-200',
  'bg-purple-200',
  'bg-pink-200',
  'bg-gray-200',
];

const GroupCalendarPage = () => {
  const params = useParams<{ groupId: string }>();
  const groupId = params.groupId!;

  const { data, isLoading, isError } = useGetOneGroup(groupId);
  const {
    data: memberInfoList,
    isLoading: memberScheduleListLoading,
    isError: memberScheduleListError,
  } = useGetAllMemberSchedule(groupId);

  const backgroundColorMap: Record<string, string | undefined> = useMemo(() => ({}), []);

  let colorIndex = 0;

  const eventList = useMemo(
    () =>
      memberInfoList?.memberScheduleList
        ?.map((item) => {
          let backgroundColor = backgroundColorMap[item.user_id];

          if (!backgroundColor) {
            backgroundColorMap[item.user_id] = colors[colorIndex];
            backgroundColor = colors[colorIndex];
            colorIndex++;
          }

          if (notEqualDate(item.start_date, item.end_date)) {
            const dateList = getDateListFromStartDateToEndDate(item.start_date, item.end_date);

            return dateList.map((date) => ({
              start_date: new Date(date).toISOString(),
              end_date: new Date(date).toISOString(),
              title: getMemberName(item.user_id, memberInfoList.memberList) ?? '',
              id: item.id,
              backgroundColor,
            }));
          }

          return {
            start_date: item.start_date,
            end_date: item.end_date,
            title: getMemberName(item.user_id, memberInfoList.memberList) ?? '',
            id: item.id,
            backgroundColor,
          };
        })
        .flat(),
    [memberInfoList?.memberScheduleList, memberInfoList?.memberList, backgroundColorMap, colorIndex],
  );

  const onDelete = useCallback((id: number) => {
    console.log('delete group id: ', id);
    // TODO: delete group schedule with id
  }, []);

  if (isError || memberScheduleListError) {
    return <div>에러가 발생했습니다.</div>;
  }

  if (!data || !memberInfoList || !memberInfoList.memberScheduleList) {
    return null;
  }

  return (
    <div className="lg:ml-80">
      {(isLoading || memberScheduleListLoading) && <Loading size="lg" display="spinner" color="primary" />}
      <AppBar backButton={false} IconButton={<HamburgerButton />} calendarName={data?.name ?? ''} />
      <main className="z-1 main-padding-right relative flex-grow">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="rounded bg-white p-6 px-4 sm:px-0">
            <Calendar
              db_events={eventList ?? []}
              onDeleteClicked={onDelete}
              isGroupCalendar
              startDate={data?.start_date}
              endDate={data?.end_date}
            />
          </div>
        </div>
      </main>
    </div>
  );
};

export default GroupCalendarPage;
