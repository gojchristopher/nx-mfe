import { Flex } from '@highoutput/hds';
import React from 'react';
import { PasswordField, TextField } from '@highoutput/hds-forms';
import { useToast } from '@highoutput/hds-toast';
import { SubmitHandler, useForm } from 'react-hook-form';
import { OperatorLoginContext, OperatorLoginSchema } from './validations';
import { yupResolver } from '@hookform/resolvers/yup';
import { Variant } from '@highoutput/hds-forms/types';
import { Button } from '@chakra-ui/react';
import { useUserStore } from '@nexius/microapps';

const OperatorLogin = () => {
  const toast = useToast();
  const { setUser } = useUserStore((state) => state);
  const { register, reset, handleSubmit, formState } =
    useForm<OperatorLoginContext>({
      mode: 'all',
      resolver: yupResolver(OperatorLoginSchema),
      defaultValues: {
        code: '',
        username: '',
        password: '',
      },
    });

  const onSubmit: SubmitHandler<OperatorLoginContext> = async (input) => {
    if (input) {
      setUser(input);
      toast.success('Successfully logged-in.');
      reset();
    }
  };

  return (
    <Flex
      flexDirection="column"
      width="full"
      gap="20px"
      pt="32px"
      height="378px"
    >
      <TextField
        {...register('code')}
        label="Code"
        __fieldTestId="operator.code.input"
        placeholder="Enter code here"
        error={formState.errors.code?.message}
      />
      <TextField
        {...register('username')}
        label="Username"
        placeholder="Enter your username"
        __fieldTestId="operator.username.input"
        error={formState.errors.username?.message}
      />
      <PasswordField
        {...register('password')}
        label="Password"
        placeholder="••••••••"
        __fieldTestId="operator.password.input"
        error={formState.errors.password?.message}
      />
      <Button variant="primary" onClick={handleSubmit(onSubmit)}>
        Sign in
      </Button>
    </Flex>
  );
};

export default OperatorLogin;
