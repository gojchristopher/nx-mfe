import React from 'react';
import useGetDevice from '../../hooks/useGetDevice';
import DesktopView from './DesktopHeaderView';
import TabletView from './TabletHeaderView';

function Header() {
  const { device } = useGetDevice();
  return device === 'Desktop' ? <DesktopView /> : <TabletView />;
}

export default Header;
