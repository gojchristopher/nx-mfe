import { Icon, IconProps } from '@highoutput/hds';
import React from 'react';

export const UserPlus: React.FC<IconProps> = (props) => {
  return (
    <Icon
      width="18"
      height="20"
      viewBox="0 0 18 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <svg
        width="20"
        height="20"
        viewBox="0 0 20 20"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M15.8333 8.33337V3.33337M13.3333 5.83337H18.3333M13.3333 17.5V16.5C13.3333 15.0999 13.3333 14.3998 13.0608 13.8651C12.8211 13.3947 12.4387 13.0122 11.9683 12.7725C11.4335 12.5 10.7334 12.5 9.33329 12.5H5.66663C4.26649 12.5 3.56643 12.5 3.03165 12.7725C2.56124 13.0122 2.17879 13.3947 1.93911 13.8651C1.66663 14.3998 1.66663 15.0999 1.66663 16.5V17.5M10.4166 6.25004C10.4166 7.86087 9.11079 9.16671 7.49996 9.16671C5.88913 9.16671 4.58329 7.86087 4.58329 6.25004C4.58329 4.63921 5.88913 3.33337 7.49996 3.33337C9.11079 3.33337 10.4166 4.63921 10.4166 6.25004Z"
          stroke="#FCFCFC"
          strokeWidth="1.66667"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </Icon>
  );
};
