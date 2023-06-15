import React from 'react';
import { FloatingTree, useFloatingParentNodeId } from '@floating-ui/react';
import MenuComponent from './MenuComponent';
import { IconProps } from '@highoutput/hds';

export interface MenuProps {
  label: string;
  nested?: boolean;
  subLabel?: string;
  icon?: (props: IconProps) => JSX.Element;
  children?: React.ReactNode | null;
  hasRightIcon?: boolean;
  inView?: boolean;
}

const Menu = React.forwardRef<
  HTMLButtonElement,
  MenuProps & React.HTMLProps<HTMLButtonElement>
>(({ ...props }, ref) => {
  const parentId = useFloatingParentNodeId();

  if (parentId === null) {
    return (
      <FloatingTree>
        <MenuComponent {...props} ref={ref} />
      </FloatingTree>
    );
  }
  return <MenuComponent {...props} ref={ref} />;
});

Menu.displayName = 'Menu';

export default Menu;
