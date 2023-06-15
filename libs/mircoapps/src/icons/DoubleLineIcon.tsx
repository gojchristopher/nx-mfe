import { DragControls } from 'framer-motion';
import { ComponentProps } from 'react';

interface DoubleLineIconProps {
  dragControls: DragControls;
}
export default function DoubleLineIcon(
  props?: ComponentProps<'svg'> & DoubleLineIconProps
) {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M2 5.66663H14M2 10.3333H14"
        stroke="#B8B8B8"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
