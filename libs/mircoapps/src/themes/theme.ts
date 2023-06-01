import { colors } from './colors';
import { Button } from './components/button';
import { extendTheme } from '@chakra-ui/react';

export const theme = extendTheme({
  colors,
  components: {
    Button,
  },
});
