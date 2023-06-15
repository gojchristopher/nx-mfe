import React from 'react';
import { Menu, MenuItem } from '../Menu';
import { Avatar } from '@highoutput/hds-avatar';
import { Box, Button, Flex, HStack, Text } from '@highoutput/hds';
import { navigationMenuTitle } from '../../constants/navigationMenu';
import useTabStore, { TabContext } from '../../store/useTabStore';
import Image from 'next/image';
import { Truncate } from '../../utils/Truncate';

const DesktopView = () => {
  const { setTab, setSelectedTab } = useTabStore((state) => state);

  function onClickTab(tab: TabContext) {
    setSelectedTab(tab);
    setTab(tab);
  }

  return (
    <Flex
      px="112px"
      h="full"
      maxH="72px"
      w="full"
      justify="center"
      align="center"
      borderBottom="1px"
      borderBottomColor="Neutrals.200"
    >
      <Box position="relative" w="30px" h="26px" mr="16px">
        <Image src="/images/Nexiux-logo.svg" alt="" fill />
      </Box>
      <HStack spacing="4px" w="full" py="23px" overflow="hidden">
        <Truncate
          style={{ gap: '4px' }}
          renderTruncator={({ hiddenItemsCount }) => {
            const hiddenMenuList = navigationMenuTitle.slice(
              navigationMenuTitle.length - hiddenItemsCount
            );
            return (
              <Menu label={'•••'}>
                {hiddenMenuList.map(({ menu, id, submenu }, idx) => {
                  if (menu === 'Dashboard')
                    return (
                      <Button
                        key={id}
                        variant="menu"
                        data-id={`menu-button-${id}-${idx}`}
                        onClick={() => onClickTab({ tab: menu })}
                      >
                        <Text w="full" textAlign="left">
                          {menu}
                        </Text>
                      </Button>
                    );
                  if (menu === 'Promo')
                    return (
                      <Button
                        key={id}
                        variant="menu"
                        data-id={`menu-button-${id}-${idx}`}
                        onClick={() => onClickTab({ tab: menu })}
                      >
                        <Text w="full" textAlign="left">
                          {menu}
                        </Text>
                      </Button>
                    );
                  if (menu === 'VIP')
                    return (
                      <Button
                        key={id}
                        variant="menu"
                        data-id={`menu-button-${id}-${idx}`}
                        onClick={() => onClickTab({ tab: menu })}
                      >
                        <Text w="full" textAlign="left">
                          {menu}
                        </Text>
                      </Button>
                    );
                  if (menu === 'Rebates')
                    return (
                      <Button
                        key={id}
                        variant="menu"
                        data-id={`menu-button-${id}-${idx}`}
                        onClick={() => onClickTab({ tab: menu })}
                      >
                        <Text w="full" textAlign="left">
                          {menu}
                        </Text>
                      </Button>
                    );
                  return (
                    <Menu key={id} label={menu}>
                      {submenu.length >= 1 &&
                        submenu.map((submenu, idx) => (
                          <MenuItem
                            key={`${submenu.label}-${idx}`}
                            label={submenu.label}
                            icon={submenu.icon}
                            subLabel={submenu.subLabel}
                            onClick={() => onClickTab({ tab: submenu.label })}
                          />
                        ))}
                    </Menu>
                  );
                })}
              </Menu>
            );
          }}
        >
          {navigationMenuTitle.map(({ id, menu, submenu }, idx) => {
            if (menu === 'Dashboard')
              return (
                <Button
                  key={id}
                  variant="menu"
                  _hover={{
                    color: 'brand.primary.500',
                    background: 'brand.primary.50',
                  }}
                  data-id={`menu-button-${id}-${idx}`}
                  onClick={() => onClickTab({ tab: menu })}
                >
                  {menu}
                </Button>
              );
            if (menu === 'Promo')
              return (
                <Button
                  key={id}
                  variant="menu"
                  _hover={{
                    color: 'brand.primary.500',
                    background: 'brand.primary.50',
                  }}
                  data-id={`menu-button-${id}-${idx}`}
                  onClick={() => onClickTab({ tab: menu })}
                >
                  {menu}
                </Button>
              );
            if (menu === 'VIP')
              return (
                <Button
                  key={id}
                  variant="menu"
                  _hover={{
                    color: 'brand.primary.500',
                    background: 'brand.primary.50',
                  }}
                  data-id={`menu-button-${id}-${idx}`}
                  onClick={() => onClickTab({ tab: menu })}
                >
                  {menu}
                </Button>
              );
            if (menu === 'Rebates')
              return (
                <Button
                  key={id}
                  variant="menu"
                  _hover={{
                    color: 'brand.primary.500',
                    background: 'brand.primary.50',
                  }}
                  data-id={`menu-button-${id}-${idx}`}
                  onClick={() => onClickTab({ tab: menu })}
                >
                  {menu}
                </Button>
              );
            return (
              <Menu
                key={id}
                label={menu}
                id={`menu-button-${id}-${idx}`}
                inView={false}
                hasRightIcon
              >
                {submenu.map((option) => {
                  if (option.innerMenu) {
                    return (
                      <Menu
                        key={option.label}
                        label={option.label}
                        icon={option.icon}
                        subLabel={option.subLabel}
                      >
                        {option.innerMenu &&
                          option.innerMenu.map((innerMenu, idx) => (
                            <MenuItem
                              key={innerMenu.label}
                              label={innerMenu.label}
                              subLabel={innerMenu.subLabel}
                              icon={innerMenu.icon}
                              onClick={() =>
                                onClickTab({ tab: innerMenu.label })
                              }
                            />
                          ))}
                      </Menu>
                    );
                  }
                  return (
                    <MenuItem
                      key={option.label}
                      label={option.label}
                      subLabel={option.subLabel}
                      icon={option.icon}
                      onClick={() => onClickTab({ tab: option.label })}
                    />
                  );
                })}
              </Menu>
            );
          })}
        </Truncate>
      </HStack>

      <Box pl="128px">
        <Avatar name="Nexiux Wallet" />
      </Box>
    </Flex>
  );
};

export default DesktopView;
