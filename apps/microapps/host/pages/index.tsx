import React from 'react';

import dynamic from 'next/dynamic';
import { Box } from '@highoutput/hds';

const Auth = dynamic(() => import('@remotes/authentication/Login'), {
  ssr: false,
});

const Login = () => {
  return (
    <Box>
      <Auth />
    </Box>
  );
};

export default Login;
