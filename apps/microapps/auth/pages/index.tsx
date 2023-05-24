import { Box, Flex, Heading, Text } from '@highoutput/hds';
import Image from 'next/image';
import React from 'react';
import { ButtonTabs } from '@highoutput/hds-tab';
import OperatorLogin from '../Components/operatorLogin';
import AdminLogin from '../Components/adminLogin';

const Login = () => {
  return (
    <Flex justify="center" width="full" height="100vh">
      <Flex
        height="full"
        align="center"
        justify="center"
        flexDirection="column"
        maxW="360px"
        width="full"
      >
        <Box height="48px" width="165px" position="relative">
          <Image src="/images/nexius-logo.png" fill alt="" />
        </Box>
        <Flex flexDir="column" gap="12px" align="center" pt="24px" pb="32px">
          <Heading size="header-4">Log in to your account</Heading>
          <Text size="paragraph-sm-default" color="neutrals.500">
            Welcome back! Please enter your details.
          </Text>
        </Flex>

        <Box width="full">
          <ButtonTabs
            isFitted
            items={[
              {
                label: 'Operator',
                render() {
                  return <OperatorLogin />;
                },
              },
              {
                label: 'Admin',
                render() {
                  return <AdminLogin />;
                },
              },
            ]}
          />
        </Box>
      </Flex>
    </Flex>
  );
};

export default Login;
