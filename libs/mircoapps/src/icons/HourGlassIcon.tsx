import { Icon, IconProps } from '@highoutput/hds';
import React from 'react';

export const HourGlassIcon: React.FC<IconProps> = (props) => {
  return (
    <Icon
      width="16"
      height="22"
      viewBox="0 0 16 22"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M5 17.5H11M2.6 1H13.4C13.9601 1 14.2401 1 14.454 1.10899C14.6422 1.20487 14.7951 1.35785 14.891 1.54601C15 1.75992 15 2.03995 15 2.6V4.67452C15 5.1637 15 5.40829 14.9447 5.63846C14.8957 5.84254 14.8149 6.03763 14.7053 6.21657C14.5816 6.4184 14.4086 6.59135 14.0627 6.93726L11.1314 9.86863C10.7354 10.2646 10.5373 10.4627 10.4632 10.691C10.3979 10.8918 10.3979 11.1082 10.4632 11.309C10.5373 11.5373 10.7354 11.7354 11.1314 12.1314L14.0627 15.0627C14.4086 15.4086 14.5816 15.5816 14.7053 15.7834C14.8149 15.9624 14.8957 16.1575 14.9447 16.3615C15 16.5917 15 16.8363 15 17.3255V19.4C15 19.9601 15 20.2401 14.891 20.454C14.7951 20.6422 14.6422 20.7951 14.454 20.891C14.2401 21 13.9601 21 13.4 21H2.6C2.03995 21 1.75992 21 1.54601 20.891C1.35785 20.7951 1.20487 20.6422 1.10899 20.454C1 20.2401 1 19.9601 1 19.4V17.3255C1 16.8363 1 16.5917 1.05526 16.3615C1.10425 16.1575 1.18506 15.9624 1.29472 15.7834C1.4184 15.5816 1.59135 15.4086 1.93726 15.0627L4.86863 12.1314C5.26465 11.7354 5.46265 11.5373 5.53684 11.309C5.6021 11.1082 5.6021 10.8918 5.53684 10.691C5.46266 10.4627 5.26464 10.2646 4.86863 9.86863L1.93726 6.93726C1.59136 6.59136 1.4184 6.4184 1.29472 6.21657C1.18506 6.03763 1.10425 5.84254 1.05526 5.63846C1 5.40829 1 5.1637 1 4.67452V2.6C1 2.03995 1 1.75992 1.10899 1.54601C1.20487 1.35785 1.35785 1.20487 1.54601 1.10899C1.75992 1 2.03995 1 2.6 1Z"
        stroke="#42A4EB"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Icon>
  );
};
