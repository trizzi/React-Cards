import React from "react";
// Chakra imports
import { Flex, Image, Text, useColorModeValue } from "@chakra-ui/react";

function Profile() {
  let boxBg = useColorModeValue("white !important", "#111c44 !important");
  let mainText = useColorModeValue("gray.800", "white");
  let secondaryText = useColorModeValue("gray.400", "gray.400");

  return (
    <Flex
      borderRadius='20px'
      bg={boxBg}
      p='20px'
      h='345px'
      w={{ base: "315px", md: "345px" }}
      alignItems='center'
      direction='column'>
      <Image
        src='https://i.ibb.co/xmP2pS6/Profile.png'
        maxW='100%'
        borderRadius='20px'
      />
      <Flex flexDirection='column' mb='30px'>
        <Image
          src='https://i.ibb.co/B3gYTYs/Profile-Image.png'
          border='5px solid red'
          mx='auto'
          borderColor={boxBg}
          width='68px'
          height='68px'
          mt='-38px'
          borderRadius='50%'
        />
        <Text
          fontWeight='600'
          color={mainText}
          textAlign='center'
          fontSize='xl'>
          Adela Parkson
        </Text>
        <Text
          color={secondaryText}
          textAlign='center'
          fontSize='sm'
          fontWeight='500'>
          Product Designer
        </Text>
      </Flex>
      <Flex justify='space-between' w='100%' px='36px'>
        <Flex flexDirection='column'>
          <Text
            fontWeight='600'
            color={mainText}
            fontSize='xl'
            textAlign='center'>
            17
          </Text>
          <Text color={secondaryText} fontWeight='500'>
            Posts
          </Text>
        </Flex>
        <Flex flexDirection='column'>
          <Text
            fontWeight='600'
            color={mainText}
            fontSize='xl'
            textAlign='center'>
            9.7k
          </Text>
          <Text color={secondaryText} fontWeight='500'>
            Followers
          </Text>
        </Flex>
        <Flex flexDirection='column'>
          <Text
            fontWeight='600'
            fontSize='xl'
            color={mainText}
            textAlign='center'>
            274
          </Text>
          <Text color={secondaryText} fontWeight='500'>
            Following
          </Text>
        </Flex>
      </Flex>
    </Flex>
  );
}

export default Profile;
