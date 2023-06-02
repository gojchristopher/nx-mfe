export const Button = {
  baseStyle: {
    height: '44px',
  },
  variants: {
    primary: {
      bg: 'brand.primary.500',
      color: 'Neutrals.100',
      borderColor: 'brand.primary.500',
      border: '1px solid',
      boxShadow: '0px 1px 2px rgba(16, 24, 40, 0.05)',
      borderRadius: '4px',
      _hover: {
        opacity: 0.8,
        _disabled: {
          bg: 'Neutrals.200',
        },
      },
      _disabled: {
        bg: 'Neutrals.200',
        color: 'Neutrals.400',
        borderColor: 'Neutrals.200',
        opacity: 1,
      },
    },
  },
  defaultProps: {
    variant: 'primary',
  },
};
