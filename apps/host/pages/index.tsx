import dynamic from 'next/dynamic';
import styles from './index.module.css';

const Auth = dynamic(() => import('@remotes/auth/Login'));

export function Index() {
  /*
   * Replace the elements below with your own.
   *
   * Note: The corresponding styles are in the ./index.css file.
   */
  return <div></div>;
}

export default Index;
