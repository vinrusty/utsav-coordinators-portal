import { MoonIcon, SunIcon } from '@chakra-ui/icons'
import { Avatar, ColorMode, Flex, Heading, IconButton, useColorMode } from '@chakra-ui/react'
import React from 'react'

function Navbar({colorMode, toggleColorMode}: {colorMode: ColorMode, toggleColorMode: any}) {

  return (
    <div>
        <Flex width="100%" height="70px" gap="20px" px="2rem" background={colorMode === 'dark'?"#161a21":"gray.200"} alignItems="center">
            <Avatar size="md" name="utsav-logo" />
            <Heading fontSize="lg" color="goldenrod">Coordinators Portal</Heading>
            <IconButton ml="auto" aria-label='dark-mode-icon' onClick={toggleColorMode} colorScheme='blue' borderRadius="50%" 
            icon={colorMode === 'light' ? <SunIcon /> : <MoonIcon />} />
        </Flex>
    </div>
  )
}

export default Navbar