import { TabContext } from '../../store/useTabStore';
import React from 'react';
import { Button, ButtonProps, Icon, Text } from '@highoutput/hds';
import { CloseIcon } from '@nexius/microapps';

interface TabProps {
  isSelected?: boolean;
  tabItem: TabContext;
  isRemainingTab?: boolean;
  onRemove?(): void;
}

export const Tab = React.forwardRef<HTMLButtonElement, TabProps & ButtonProps>(
  ({ isSelected, tabItem, onRemove, isRemainingTab, ...props }, ref) => {
    return (
      <Button
        align="center"
        ref={ref}
        background="transparent"
        justify="space-between"
        border="none"
        shadow="none"
        gap="8px"
        textAlign="center"
        fontWeight="normal"
        borderRadius="6px"
        {...props}
        color={isSelected ? 'brand.primary.700' : 'Neutrals.700'}
        _hover={{
          cursor: 'pointer',
          bg: 'brand.primary.50',
          color: 'brand.primary.700',
          svg: {
            color: 'brand.primary.400',
          },
        }}
      >
        <Text fontSize="18px" w="full">
          {tabItem.tab}
        </Text>
        {!isRemainingTab && (
          <Icon onClick={onRemove} as={CloseIcon} boxSize="14px" />
        )}
      </Button>
    );
  }
);

Tab.displayName = 'Tab';
