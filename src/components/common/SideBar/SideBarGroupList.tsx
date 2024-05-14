import PencilIcon from '@/assets/svgs/PencilIcon';
import { useGetAllGroupByUserId } from '@/react-queries/useGetAllGroupByUserId';
import { FC } from 'react';
import { Link } from 'react-router-dom';

interface Props {
  userId: string;
}

const SideBarGroupList: FC<Props> = ({ userId }) => {
  const { data, error, isError, isLoading } = useGetAllGroupByUserId(userId);

  if (isError) {
    // TODO: 추후 에러 처리
    console.error(error);
  }
  return (
    <ul>
      {isLoading && <span className="loading" />}
      <div className="flex flex-row items-center justify-between border-b border-white py-3">
        <h2 className="font-bold">모임 리스트</h2>
        <li>
          <Link to="/add-group" className="text-2xl">
            +
          </Link>
        </li>
      </div>
      {data?.map((group) => (
        <li
          className="flex flex-row items-center justify-between border-b border-white py-2"
          key={group.id + 'sidebar-group-list'}
        >
          <Link to={`/group/${group.id}`}>{group.name}</Link>
          <Link to={`/group/${group.id}/edit/${group.id}`}>
            <PencilIcon />
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default SideBarGroupList;
