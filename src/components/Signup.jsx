import {
  Button,
  Container,
  Heading,
  Input,
  VStack,
  Text,
  Avatar,
} from '@chakra-ui/react';
import React from 'react';
import { Link } from 'react-router-dom';

const Signup = () => {
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
            <Avatar alignSelf={"center"} boxSize={"32"}/>

            <Input
              placeholder="Enter your name"
              focusBorderColor={'whatsapp.700'}
              type={'text'}
              required
            />

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


            <Button colorScheme={'whatsapp'} type={'submit '}>
              Sign Up
            </Button>

            <Text textAlign={'right'}>
              Alreday SignUp?{' '}
              <Button variant={'link'} alignSelf={'flex-end'}>
                <Link to={'/login'}>Login</Link>
              </Button>
            </Text>
          </VStack>
        </form>
      </Container>
    </div>
  );
};

export default Signup;
