import { Icon, IconProps } from '@highoutput/hds';
import React from 'react';

export const ClockRewindIcon: React.FC<IconProps> = (props) => {
  return (
    <Icon
      width="22"
      height="20"
      viewBox="0 0 22 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M20.7 11.5L18.7005 9.5L16.7 11.5M19 10C19 14.9706 14.9706 19 10 19C5.02944 19 1 14.9706 1 10C1 5.02944 5.02944 1 10 1C13.3019 1 16.1885 2.77814 17.7545 5.42909M10 5V10L13 12"
        stroke="#42A4EB"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Icon>
  );
};