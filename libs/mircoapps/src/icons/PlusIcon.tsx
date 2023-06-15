import { Icon, IconProps } from '@highoutput/hds';

export const PlusIcon: React.FC<IconProps> = (props) => {
  return (
    <Icon
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      {...props}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M9.99996 4.16797V15.8346M4.16663 10.0013H15.8333"
        stroke="#42A4EB"
        strokeWidth="1.66667"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Icon>
  );
};
