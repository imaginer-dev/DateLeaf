import React from 'react';
import Logo from '../assets/svgs/Logo.tsx';

interface Props {
  display: 'spinner' | 'dots' | 'ring' | 'ball' | 'bars' | 'infinity';
  size: 'xs' | 'sm' | 'md' | 'lg';
  color: 'primary' | 'secondary' | 'accent' | 'neutral' | 'info' | 'success' | 'warning' | 'error';
}

const styleMap = {
  spinner: 'loading-spinner',
  dots: 'loading-dots',
  ring: 'loading-ring',
  ball: 'loading-ball',
  bars: 'loading-bars',
  infinity: 'loading-infinity',
  xs: 'loading-xs',
  sm: 'loading-sm',
  md: 'loading-md',
  lg: 'loading-lg',
  primary: 'text-primary',
  secondary: 'text-secondary',
  accent: 'text-accent',
  neutral: 'text-neutral',
  info: 'text-info',
  success: 'text-success',
  warning: 'text-warning',
  error: 'text-error',
};

const Loading: React.FC<Props> = ({ display, size, color }) => {
  return (
    <div
      className={'fixed left-0 top-0 z-50 flex h-screen w-screen flex-col items-center justify-center overflow-hidden'}
    >
      <Logo />
      <span className={`loading absolute bottom-20 ${styleMap[display]} ${styleMap[size]} ${styleMap[color]}`}></span>
    </div>
  );
};
export default Loading;
