import { FC } from 'react';
import HistoryBackButton from './HistoryBackButton';

interface AppBarProps {
  title?: string;
  backButton?: boolean;
}

const AppBar: FC<AppBarProps> = ({ title = '', backButton = true }) => {
  return (
    <nav className="grid grid-cols-5 py-5">
      <div className="col-span-1">{backButton ? <HistoryBackButton /> : <span />}</div>
      <h1 className="col-span-3 text-center">{title}</h1>
      <span className="col-span-1" />
    </nav>
  );
};

export default AppBar;
