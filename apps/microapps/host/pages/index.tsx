import React from 'react';
import dynamic from 'next/dynamic';
import { Box } from '@highoutput/hds';
import { useUserStore } from '@nexius/microapps';
import { useRouter } from 'next/router';

const Auth = dynamic(() => import('@remotes/authentication/Login'), {
  ssr: false,
});

const Login = () => {
  const { user } = useUserStore((state) => state);
  const route = useRouter();

  const [isHydratedUserStore, setIsHydratedUserStore] = React.useState(false);

  React.useEffect(
    () => setIsHydratedUserStore(useUserStore.persist.hasHydrated),
    []
  );

  if (isHydratedUserStore && user) {
    route.push('/home');
    return null;
  }

  return (
    <Box>
      <Auth />
    </Box>
  );
};

export default Login;
