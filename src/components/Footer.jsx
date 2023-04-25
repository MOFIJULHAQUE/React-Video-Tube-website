import React from 'react';
import {
  Box,
  Input,
  Button,
  Heading,
  HStack,
  Stack,
  Text,
  VStack,
} from '@chakra-ui/react';
import { AiOutlineSend } from 'react-icons/ai';

const Footer = () => {
  return (
    <>
      <Box bgColor={'blackAlpha.900'} minH={'40'} p="16" color={'white'}>
        <Stack direction={['column', 'row']}>
          <VStack alignItems={'stretch'} w={'full'}>
            <Heading size={'md'} textTransform="uppercase" textAlign={["center","left"]}>
              Subscribe us to get update
            </Heading>
            <HStack borderBottom={'2px solid white'} py={'2'}>
              <Input
                border={'none'}
                outline={'none'}
                placeholder={'Enter email here...'}
                borderRadius={'none'}
                focusBorderColor={'none'}
              />
              <Button
                p={'0'}
                colorScheme={'whatsapp'}
                variant={'ghost'}
                borderRadius={' 0px 20px 20px 0px'}
              >
                <AiOutlineSend size={'20'} />
              </Button>
            </HStack>
          </VStack>

          <VStack
            w={'full'}
            borderLeft={['none', '1px solid white']}
            borderRight={['none', '1px solid white']}
          >
            <Heading textTransform={'uppercase'} textAlign={'center'}>
              Video hub
            </Heading>
            <Text>All rights reserved</Text>
          </VStack>

          <VStack w={'full'} >
            <Heading size={"md"} textTransform={'uppercase'}>Social Media  </Heading>
            <Button variant={"link"} colorScheme="white">
                <a href="https://www.youtube.com">YouTube</a>
            </Button>

            <Button variant={"link"} colorScheme="white">
                <a href="https://www.instagram.com">Instagram</a>
            </Button>

            <Button variant={"link"} colorScheme="white">
                <a href="https://www.github.com">GitHub</a>
            </Button>
          </VStack>
        </Stack>
      </Box>
    </>
  );
};

export default Footer;


// HBGRHUYGR