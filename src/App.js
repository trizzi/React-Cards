// Chakra imports

import {
  Box,
  Button,
  Flex,
  Link,
  Text,
  useColorMode,
} from '@chakra-ui/react';
import React from 'react';

//Assets
import Background from './assets/background.png';

// Component Import
import Product from './components/Product';
import Profile from './components/Profile';
import Teams from './components/Teams';
function App() {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <Box h='100vh' w='100%'>
      <Flex
        flexDirection='column'
        maxW='90%'
        px='10px'
        my='30px'
        mx='auto'
        bgImage={Background}
        bgSize='cover'
        py='50px'
        borderRadius='20px'>
        <Button
          colorScheme='purple'
          onClick={toggleColorMode}
          mx='auto'
          color='white'
          mb='50px'>
          Toggle {colorMode === 'light' ? 'Dark' : 'Light'}
        </Button>

        <Flex
          direction={{ base: 'column', xl: 'row' }}
          mx='auto'
          rowGap='20px'
          columnGap='20px'>
          <Profile />
          <Teams />
          <Product />
        </Flex>

        <Flex mx='auto' mt='40px'>
          <Text
            fontSize='xl'
            color='white'
            textAlign='center'
            px='30px'>
            More free awesome cards like this can be found{' '}
            <Link
              fontWeight='bold'
              textDecoration='underline'
              // href='https://horizon-ui.com/?ref=blog-simmmple'>
            >
              here!
            </Link>
          </Text>
        </Flex>
      </Flex>
    </Box>
  );
}

export default App;
