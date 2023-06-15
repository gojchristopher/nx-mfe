import { Icon, IconProps } from '@highoutput/hds';
import React from 'react';

export const CurrencyEuroCircleIcon: React.FC<IconProps> = (props) => {
  return (
    <Icon
      width="22"
      height="22"
      viewBox="0 0 22 22"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M14.3333 7.27316C13.4487 6.48142 12.2806 6 11 6C8.23858 6 6 8.23858 6 11C6 13.7614 8.23858 16 11 16C12.2806 16 13.4487 15.5186 14.3333 14.7268M5 12.5H10M5 9.5H10M21 11C21 16.5228 16.5228 21 11 21C5.47715 21 1 16.5228 1 11C1 5.47715 5.47715 1 11 1C16.5228 1 21 5.47715 21 11Z"
        stroke="#42A4EB"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Icon>
  );
};
