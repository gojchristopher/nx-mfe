import { ComponentProps } from 'react';

export default function RefreshIcon(props?: ComponentProps<'svg'>) {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M1.66675 11.6667C1.66675 11.6667 1.76785 12.3744 4.69678 15.3033C7.62571 18.2322 12.3744 18.2322 15.3034 15.3033C16.3411 14.2656 17.0112 12.9994 17.3136 11.6667M1.66675 11.6667V16.6667M1.66675 11.6667H6.66675M18.3334 8.33333C18.3334 8.33333 18.2323 7.62563 15.3034 4.6967C12.3744 1.76777 7.62571 1.76777 4.69678 4.6967C3.65905 5.73443 2.98899 7.0006 2.6866 8.33333M18.3334 8.33333V3.33333M18.3334 8.33333H13.3334"
        stroke="#525252"
        strokeWidth="1.66667"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
