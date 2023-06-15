import { Icon, IconProps } from '@highoutput/hds';
import React from 'react';

export const MarkerPinFlag: React.FC<IconProps> = (props) => {
  return (
    <Icon
      width="22"
      height="21"
      viewBox="0 0 22 21"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M15 11.3744C18.5318 12.0688 21 13.6547 21 15.5C21 17.9853 16.5228 20 11 20C5.47715 20 1 17.9853 1 15.5C1 13.6547 3.46819 12.0688 7 11.3744M11 15V1L16.3177 4.27244C16.7056 4.51114 16.8995 4.63049 16.9614 4.78085C17.0154 4.912 17.0111 5.0599 16.9497 5.18771C16.8792 5.33426 16.6787 5.44222 16.2777 5.65815L11 8.5"
        stroke="#42A4EB"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Icon>
  );
};
