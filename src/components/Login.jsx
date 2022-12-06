import {
  Button,
  Container,
  Heading,
  Input,
  VStack,
  Text,
} from '@chakra-ui/react';
import React from 'react';
import { Link } from 'react-router-dom';

const Login = () => {
  return (
    <div>
      <Container maxW={'container.xl'} h={'100vh'} p={'16'}>
        <form>
          <VStack
            alignItems={'stretch'}
            spacing={'8'}
            w={['full', '96']}
            m={'auto'}
            my={'16'}
          >
            <Heading>Welcome Back</Heading>
            <Input
              placeholder="Enter your email id"
              focusBorderColor={'whatsapp.700'}
              type={'email'}
              required
            />

            <Input
              placeholder="Password"
              focusBorderColor={'whatsapp.700'}
              type={'Password'}
              required
            />

            <Button variant={'link'} alignSelf={'flex-end'}>
              <Link to={'/forgetpassword'}>Forget Password?</Link>
            </Button>

            <Button colorScheme={'whatsapp'} type={'submit '}>
              Log In
            </Button>

            <Text textAlign={'right'}>
              New User?{' '}
              <Button variant={'link'} alignSelf={'flex-end'}>
                <Link to={'/signup'}>Sign Up</Link>
              </Button>
            </Text>
          </VStack>
        </form>
      </Container>
    </div>
  );
};

export default Login;
