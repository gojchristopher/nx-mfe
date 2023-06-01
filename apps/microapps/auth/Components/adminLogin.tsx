import { Flex } from '@highoutput/hds';
import { Button, PasswordField, TextField } from '@highoutput/hds-forms';
import React from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { AdminLoginContext, AdminLoginSchema } from './validations';
import { useToast } from '@highoutput/hds-toast';
import { yupResolver } from '@hookform/resolvers/yup';
import { Variant } from '@highoutput/hds-forms/types';
import InputField from './InputField';
// import { Button } from '@chakra-ui/react';

const AdminLogin = () => {
  const toast = useToast();
  const { register, formState, handleSubmit, reset } =
    useForm<AdminLoginContext>({
      mode: 'all',
      resolver: yupResolver(AdminLoginSchema),
      defaultValues: {
        username: '',
        password: '',
      },
    });

  const onSubmit: SubmitHandler<AdminLoginContext> = async (input) => {
    if (input) {
      toast.success('Successfully logged-in');
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
        {...register('username')}
        label="Username"
        __fieldTestId="admin.username.input"
        placeholder="Enter your username"
        error={formState.errors.username?.message}
      />
      <PasswordField
        {...register('password')}
        label="Password"
        placeholder="••••••••"
        __fieldTestId="admin.password.input"
        error={formState.errors.password?.message}
      />
      {/* <InputField
        {...register('username')}
        label="Username"
        // __fieldTestId="admin.username.input"
        placeholder="Enter your username"
        errorMsg={formState.errors.username?.message}
      />
      <InputField
        {...register('password')}
        label="Password"
        type="password"
        placeholder="••••••••"
        // __fieldTestId="admin.password.input"
        errorMsg={formState.errors.password?.message}
      /> */}
      <Button onClick={handleSubmit(onSubmit)}>Sign in</Button>
    </Flex>
  );
};

export default AdminLogin;
