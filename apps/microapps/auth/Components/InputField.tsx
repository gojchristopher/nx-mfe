import {
  FormControl,
  FormErrorMessage,
  FormLabel,
  Input,
  InputGroup,
  InputLeftAddon,
  InputLeftElement,
  InputLeftElementProps,
  InputProps,
  InputRightAddon,
  InputRightElement,
  InputRightElementProps,
} from '@chakra-ui/react';
import React, { ReactNode } from 'react';

type InputFieldProps = InputProps & {
  label?: string;
  errorMsg?: string;
  helperText?: string;
  leftElement?: JSX.Element;
  rightElement?: JSX.Element;
  leftAddon?: ReactNode;
  rightAddon?: ReactNode;
  leftElementProps?: InputLeftElementProps;
  rightElementProps?: InputRightElementProps;
};

const InputField = React.forwardRef<HTMLInputElement, InputFieldProps>(
  (props, ref) => {
    const {
      label,
      errorMsg,
      leftElement,
      rightElement,
      helperText,
      rightAddon,
      leftAddon,
      leftElementProps,
      rightElementProps,
      ...others
    } = props;
    return (
      <FormControl isInvalid={!!errorMsg}>
        {label && <FormLabel>{label}</FormLabel>}
        <InputGroup>
          {leftAddon && <InputLeftAddon>{leftAddon}</InputLeftAddon>}
          {leftElement && (
            <InputLeftElement {...leftElementProps}>
              {leftElement}
            </InputLeftElement>
          )}
          <Input ref={ref} {...others} />
          {rightAddon && <InputRightAddon>{rightAddon}</InputRightAddon>}
          {rightElement && (
            <InputRightElement {...rightElementProps}>
              {rightElement}
            </InputRightElement>
          )}
        </InputGroup>
        <FormErrorMessage>{errorMsg}</FormErrorMessage>
      </FormControl>
    );
  }
);
export default InputField;
