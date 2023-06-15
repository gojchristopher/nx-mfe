'use client';
import React from 'react';
import { Divider, Flex } from '@highoutput/hds';
import { Reorder } from 'framer-motion';
import useTabStore, { TabContext } from '../../store/useTabStore';
import { Tab } from './Tab';
import { closestItem } from '../../utils/arrayUtils';
import { InView } from 'react-intersection-observer';
import useGetDevice from '../../hooks/useGetDevice';
import { Menu, MenuItem } from '../Menu';
import { Truncate } from '../../utils/Truncate';

interface TabProps {
  tabs?: Array<TabContext>;
  children: React.ReactNode;
}

export const Tabs: React.FC<TabProps> = ({ children }) => {
  const { device } = useGetDevice();
  const isTablet = device === 'Tablet';
  const { tabs, removeTab, reOrderTabs, setSelectedTab, selectedTab } =
    useTabStore((state) => state);
  const [isHydrated, setIsHydrated] = React.useState(false);

  function onRemoveTab(tab: TabContext) {
    if (tab === selectedTab) {
      setSelectedTab(closestItem(tabs, tab));
    }
    removeTab(tab);
  }

  // function onReorder(index: number) {
  //   const newItems = [...tabs];
  //   const [item] = newItems.splice(newItems.indexOf(selectedTab), 1); // Remove dragged item
  //   newItems.splice(index, 0, item); // Insert item at new index
  //   console.log('this is new items', newItems);
  //   reOrderTabs(newItems);
  // }

  //resolve persist hydration issue
  React.useEffect(() => setIsHydrated(useTabStore.persist.hasHydrated), []);

  return (
    <Flex flexDir="column" role="tabs" w="full">
      {isHydrated && isTablet && (
        <Flex px={'32px'} overflowX="auto" py="14px">
          <Flex gap="12px">
            {isHydrated &&
              isTablet &&
              tabs.map((tabmenu) => {
                return (
                  <InView
                    threshold={0.85}
                    key={tabmenu.tab.replace(' ', '-').toLowerCase()}
                  >
                    {({ inView, ref }) => {
                      return (
                        <Tab
                          tabItem={tabmenu}
                          ref={ref}
                          opacity={inView ? 1 : 0.5}
                          onRemove={() => onRemoveTab(tabmenu)}
                          onPointerDown={() => setSelectedTab(tabmenu)}
                          background={
                            selectedTab.tab === tabmenu.tab
                              ? 'brand.primary.50'
                              : 'Neutrals.100'
                          }
                          isSelected={selectedTab.tab === tabmenu.tab}
                          isRemainingTab={tabs.length === 1}
                        />
                      );
                    }}
                  </InView>
                );
              })}
          </Flex>
        </Flex>
      )}
      <Reorder.Group
        axis="x"
        onReorder={reOrderTabs}
        style={{
          listStyle: 'none',
        }}
        values={tabs}
      >
        {isHydrated && !isTablet && (
          <Flex px="112px" py="14px" w="full">
            <Truncate
              renderTruncator={({ hiddenItemsCount }) => {
                const hiddenListData = tabs.slice(
                  tabs.length - hiddenItemsCount
                );
                return (
                  <Menu label={'•••'}>
                    {hiddenListData.map((tabs, idx) => (
                      <MenuItem
                        key={`${tabs.tab}-${idx}`}
                        label={tabs.tab}
                        onClick={() => setSelectedTab(tabs)}
                      />
                    ))}
                  </Menu>
                );
              }}
            >
              {tabs.map((tabmenu, idx) => {
                return (
                  <Reorder.Item
                    id={tabmenu.tab.replace(' ', '-').toLowerCase()}
                    value={tabmenu}
                    key={tabmenu.tab}
                    whileDrag={{ backgroundColor: '#e0f2ff' }}
                    onPointerDown={() => setSelectedTab(tabmenu)}
                    animate={{
                      backgroundColor:
                        selectedTab.tab === tabmenu.tab ? '#e0f2ff' : '#f5f5f5',
                    }}
                    style={{
                      marginRight: '12px',
                      borderRadius: '6px',
                    }}
                    role="tab"
                  >
                    <Tab
                      key={tabmenu.tab.replace(' ', '-').toLowerCase()}
                      tabItem={tabmenu}
                      onRemove={() => onRemoveTab(tabmenu)}
                      isSelected={selectedTab.tab === tabmenu.tab}
                      isRemainingTab={tabs.length === 1}
                    />
                  </Reorder.Item>
                );
              })}
            </Truncate>
          </Flex>
        )}
      </Reorder.Group>
      <Divider />
      <Flex
        role="tablist"
        w="full"
        px={isTablet ? '32px' : '112px'}
        mt="32px"
        h="full"
      >
        {children}
      </Flex>
    </Flex>
  );
};
