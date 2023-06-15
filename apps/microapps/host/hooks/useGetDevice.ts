import React from 'react';

function useGetDevice() {
  const [device, setDevice] = React.useState<
    'Tablet' | 'Desktop' | 'Unknown device' | null
  >('Desktop');

  React.useEffect(() => {
    const userAgent = navigator.userAgent;
    const isTablet = /iPad|Android(?!.*Mobile)/i.test(userAgent);
    const isDesktop = !isTablet;

    if (isTablet) {
      setDevice('Tablet');
    } else if (isDesktop) {
      setDevice('Desktop');
    } else {
      setDevice('Unknown device');
    }
  }, []);

  return { device };
}

export default useGetDevice;
