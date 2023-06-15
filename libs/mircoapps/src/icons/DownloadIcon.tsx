import { ComponentProps } from 'react';

export default function DownloadIcon(props?: ComponentProps<'svg'>) {
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
        d="M3.33329 13.5352C2.3283 12.8625 1.66663 11.7168 1.66663 10.4167C1.66663 8.46369 3.15955 6.85941 5.06641 6.68281C5.45647 4.31011 7.51683 2.5 9.99996 2.5C12.4831 2.5 14.5434 4.31011 14.9335 6.68281C16.8404 6.85941 18.3333 8.46369 18.3333 10.4167C18.3333 11.7168 17.6716 12.8625 16.6666 13.5352M6.66663 14.1667L9.99996 17.5M9.99996 17.5L13.3333 14.1667M9.99996 17.5V10"
        stroke="#525252"
        strokeWidth="1.66667"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
