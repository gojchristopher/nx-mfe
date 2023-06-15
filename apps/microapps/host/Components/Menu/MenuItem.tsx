import React from 'react';
import { Button, Flex, Icon, IconProps, Text } from '@highoutput/hds';
import { useFloatingTree, useListItem, useMergeRefs } from '@floating-ui/react';
import { MenuContext } from './MenuContext';

export interface MenuItemProps {
  label: string;
  disabled?: boolean;
  icon?: (props?: IconProps) => JSX.Element;
  subLabel?: string;
}

const MenuItem = React.forwardRef<
  HTMLButtonElement,
  MenuItemProps & React.ButtonHTMLAttributes<HTMLButtonElement>
>(({ label, icon, subLabel, disabled, ...props }, forwardedRef) => {
  const menu = React.useContext(MenuContext);
  const item = useListItem({ label: disabled ? null : label });
  const tree = useFloatingTree();
  const isActive = item.index === menu.activeIndex;

  return (
    <Button
      {...props}
      maxH="72px"
      variant="menu"
      borderRadius="8px"
      h="full"
      w="full"
      ref={useMergeRefs([item.ref, forwardedRef])}
      role="menuitem"
      tabIndex={isActive ? 0 : -1}
      disabled={disabled}
      {...menu.getItemProps({
        onClick(event: React.MouseEvent<HTMLButtonElement>) {
          props.onClick?.(event);
          tree?.events.emit('click');
        },
        onFocus(event: React.FocusEvent<HTMLButtonElement>) {
          props.onFocus?.(event);
          menu.setHasFocusInside(true);
        },
      })}
    >
      <Flex align="start" justify="start" w="full" gap="18px">
        {icon && <Icon as={icon} fontSize="xl" />}
        <Flex gap="23.5px" align="center">
          <Flex flexDir="column" gap="4px" align="start">
            <Text fontSize="md" lineHeight="24px" fontWeight="500">
              {label}
            </Text>
            {subLabel && (
              <Text
                color="Neutrals.600"
                fontWeight="normal"
                fontSize="sm"
                lineHeight="20px"
              >
                {subLabel}
              </Text>
            )}
          </Flex>
        </Flex>
      </Flex>
    </Button>
  );
});

MenuItem.displayName = 'MenuItem';

export default MenuItem;
