import { Icon, IconProps } from '@highoutput/hds';
import React from 'react';

export const BellIcon: React.FC<IconProps> = (props) => {
  return (
    <Icon
      width="20"
      height="21"
      viewBox="0 0 20 21"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M12 20H8.00002M16 7C16 5.4087 15.3679 3.88258 14.2427 2.75736C13.1174 1.63214 11.5913 1 10 1C8.40872 1 6.8826 1.63214 5.75738 2.75736C4.63216 3.88258 4.00002 5.4087 4.00002 7C4.00002 10.0902 3.22049 12.206 2.34968 13.6054C1.61515 14.7859 1.24788 15.3761 1.26134 15.5408C1.27626 15.7231 1.31488 15.7926 1.46179 15.9016C1.59448 16 2.19261 16 3.38887 16H16.6112C17.8074 16 18.4056 16 18.5382 15.9016C18.6852 15.7926 18.7238 15.7231 18.7387 15.5408C18.7522 15.3761 18.3849 14.7859 17.6504 13.6054C16.7795 12.206 16 10.0902 16 7Z"
        stroke="#42A4EB"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Icon>
  );
};
