import { Box } from '@highoutput/hds';
import dynamic from 'next/dynamic';

const Auth = dynamic(() => import('@remotes/authentication/Login'), {
  ssr: false,
});

export function Index() {
  return (
    <Box>
      <Auth />
    </Box>
  );
}

export default Index;
