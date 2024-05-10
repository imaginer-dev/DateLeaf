import { useNavigate } from 'react-router-dom';

const HistoryBackButton: React.FC = () => {
  const navigate = useNavigate();

  const handleBack = () => {
    navigate(-1);
  };

  return (
    <button type="button" onClick={handleBack}>
      <svg width="13" height="16" viewBox="0 0 13 16" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M10.7 15.1595C11.6989 15.7893 13 15.0714 13 13.8907L13 2.10951C13 0.928727 11.6989 0.21091 10.7 0.840621L1.35638 6.73119C0.422984 7.31964 0.422986 8.68052 1.35638 9.26897L10.7 15.1595Z"
          fill="#429400"
        />
      </svg>
    </button>
  );
};

export default HistoryBackButton;
