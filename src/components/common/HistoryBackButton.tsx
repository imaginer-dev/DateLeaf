import { useNavigate } from 'react-router-dom';

const HistoryBackButton: React.FC = () => {
  const navigate = useNavigate();

  const handleBack = () => {
    navigate(-1);
  };

  return (
    <div className="relative">
      <svg
        onClick={handleBack}
        className={'shrink-0'}
        width="256"
        height="512"
        viewBox="0 0 256 512"
        fill="none"
        preserveAspectRatio="xMinYMin meet"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M9.4 278.6c-12.5-12.5-12.5-32.8 0-45.3l128-128c9.2-9.2 22.9-11.9 34.9-6.9s19.8 16.6 19.8 29.6l0 256c0 12.9-7.8 24.6-19.8 29.6s-25.7 2.2-34.9-6.9l-128-128z" />
      </svg>
    </div>
  );
};

export default HistoryBackButton;
