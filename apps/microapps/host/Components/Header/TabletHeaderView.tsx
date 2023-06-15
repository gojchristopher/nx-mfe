import { Box, Button, Flex } from '@highoutput/hds';
import React from 'react';
import Image from 'next/image';
import { Avatar } from '@highoutput/hds-avatar';
import { navigationMenuTitle } from '../../constants/navigationMenu';
import useTabStore, { TabContext } from '../../store/useTabStore';
import { Menu, MenuItem } from '../Menu';
import { InView } from 'react-intersection-observer';

const TabletView = () => {
  const { setTab, setSelectedTab } = useTabStore((state) => state);

  function onClickTab(tab: TabContext) {
    setSelectedTab(tab);
    setTab(tab);
  }

  return (
    <Flex flexDir="column">
      <Flex
        justify="space-between"
        padding="23px 32px"
        borderBottom="1px"
        borderBottomColor="Neutrals.200"
      >
        <Box position="relative" w="30px" h="26px">
          <Image src="/images/Nexiux-logo.svg" alt="" fill />
        </Box>
        <Avatar />
      </Flex>
      <Flex
        padding="19px 32px"
        borderBottom="1px solid"
        borderBottomColor="Neutrals.200"
        overflowX="scroll"
      >
        <Flex gap="16px" zIndex={9999}>
          {navigationMenuTitle.map(({ id, menu, submenu }, idx) => {
            return (
              <InView key={id} threshold={0.75}>
                {({ inView, ref }) => {
                  if (menu === 'Dashboard')
                    return (
                      <Button
                        variant="menu"
                        key={id}
                        ref={ref}
                        id={`menu-button-${id}-${idx}`}
                        opacity={inView ? 1 : 0.5}
                        onClick={() => onClickTab({ tab: menu })}
                      >
                        {menu}
                      </Button>
                    );
                  if (menu === 'Promo')
                    return (
                      <Button
                        variant="menu"
                        key={id}
                        ref={ref}
                        id={`menu-button-${id}-${idx}`}
                        opacity={inView ? 1 : 0.5}
                        onClick={() => onClickTab({ tab: menu })}
                      >
                        {menu}
                      </Button>
                    );
                  if (menu === 'VIP')
                    return (
                      <Button
                        variant="menu"
                        key={id}
                        ref={ref}
                        id={`menu-button-${id}-${idx}`}
                        opacity={inView ? 1 : 0.5}
                        onClick={() => onClickTab({ tab: menu })}
                      >
                        {menu}
                      </Button>
                    );
                  if (menu === 'Rebates')
                    return (
                      <Button
                        variant="menu"
                        key={id}
                        ref={ref}
                        id={`menu-button-${id}-${idx}`}
                        opacity={inView ? 1 : 0.5}
                        onClick={() => onClickTab({ tab: menu })}
                      >
                        {menu}
                      </Button>
                    );
                  return (
                    <Menu
                      key={id}
                      ref={ref}
                      label={menu}
                      inView={inView}
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
                }}
              </InView>
            );
          })}
        </Flex>
      </Flex>
    </Flex>
  );
};

export default TabletView;
