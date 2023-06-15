import { Box, Flex, Text } from '@highoutput/hds';
import Header from '../../Components/Header/Header';
import { Tabs } from '../../Components/Tabs/Tabs';
import useTabStore from '../../store/useTabStore';
import React, { useEffect } from 'react';
import useGetDevice from '../../hooks/useGetDevice';

export function Host() {
  const { tabs, selectedTab, cleanup } = useTabStore((state) => state);
  const { device } = useGetDevice();
  const [isHydrated, setIsHydrated] = React.useState(false);

  useEffect(() => {
    setIsHydrated(useTabStore.persist.hasHydrated);

    return () => {
      cleanup();
    };
  }, [cleanup]);

  return (
    <Box w="full" h="100vh" maxW="2693px">
      <Header />
      <Tabs>
        {isHydrated &&
          tabs.map(({ tab }, idx) => {
            if (tab === selectedTab.tab) {
              return (
                <Flex
                  flexDir="column"
                  w="full"
                  role="tabpanel"
                  h="full"
                  key={`${tab.replace(' ', '-').toLowerCase()}-${idx}`}
                >
                  {selectedTab.tab}
                  <Text>current device used: {device}</Text>
                </Flex>
              );
            }
          })}
      </Tabs>
    </Box>
  );
}

export default Host;
