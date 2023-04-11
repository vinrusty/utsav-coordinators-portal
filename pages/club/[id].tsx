import React from 'react'
import ClubForm from '@/components/Club/ClubForms';
import Header from '@/components/Header/Header';
import { useRouter } from 'next/router';
import Navbar from '@/components/Header/Navbar';
import { useColorMode } from '@chakra-ui/react';


function ClubForms() {

  const router = useRouter();
  const { id } = router.query;
  const { colorMode, toggleColorMode } = useColorMode()

  return (
    <div>
        <Navbar colorMode={colorMode} toggleColorMode={toggleColorMode} />
        <Header path={id} title={id?.toString().toUpperCase()} />
        <ClubForm path={id?.toString()} />
    </div>
  )
}

export default ClubForms;