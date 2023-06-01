import { Box } from '@highoutput/hds';
import styles from './index.module.css';
import dynamic from 'next/dynamic';

const Authenticate = dynamic(() => import('@remotes/authentication/Login'), {
  ssr: false,
});

export function Index() {
  /*
   * Replace the elements below with your own.
   *
   * Note: The corresponding styles are in the ./index.css file.
   */
  return (
    <Box>
      <Authenticate />
    </Box>
  );
}

export default Index;
