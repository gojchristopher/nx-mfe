import { Box } from '@highoutput/hds';
import dynamic from 'next/dynamic';
import React from 'react';

// const MemberSettingsModule = dynamic(
//   () => import('@remotes/members/MemberSettings'),
//   { ssr: false }
// );

const MemberSettings = () => {
  return <Box>this is member settings</Box>;
};

export default MemberSettings;
