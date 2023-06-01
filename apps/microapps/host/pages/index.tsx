import { Box } from '@highoutput/hds';
import dynamic from 'next/dynamic';

const Auth = dynamic(() => import('@remotes/auth/Login'));

export function Index() {
  /*
   * Replace the elements below with your own.
   *
   * Note: The corresponding styles are in the ./index.css file.
   */
  return (
    <Box>
      <Auth />
    </Box>
  );
}

export default Index;
