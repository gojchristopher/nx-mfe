import { Box, Flex, Text } from '@highoutput/hds';
import React, { useEffect } from 'react';
import { useRouter } from 'next/router';
import { useUserStore } from '@nexius/microapps';
import useGetDevice from '../../hooks/useGetDevice';
import useTabStore from '../../store/useTabStore';
import Header from '../../Components/Header/Header';
import { Tabs } from '../../Components/Tabs';

export function Host() {
  const { tabs, selectedTab, cleanup } = useTabStore((state) => state);
  const { user } = useUserStore((state) => state);
  const { device } = useGetDevice();
  const router = useRouter();
  const [isHydrated, setIsHydrated] = React.useState(false);
  const [isHydratedUserStore, setIsHydratedUserStore] = React.useState(false);

  useEffect(() => {
    setIsHydrated(useTabStore.persist.hasHydrated);

    return () => {
      cleanup();
    };
  }, [cleanup]);

  useEffect(() => setIsHydratedUserStore(useUserStore.persist.hasHydrated), []);

  if (!user && isHydratedUserStore) {
    router.push('/');
    return null;
  }

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
