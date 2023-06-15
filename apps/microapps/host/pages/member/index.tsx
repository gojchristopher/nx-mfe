import { Box } from '@highoutput/hds';
import dynamic from 'next/dynamic';
import React from 'react';

// const MemberModule = dynamic(() => import('@remotes/members/Members'), {
//   ssr: false,
// });

const Members = () => {
  return <Box>this is members</Box>;
};

export default Members;
