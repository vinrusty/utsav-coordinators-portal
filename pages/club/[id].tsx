import React from 'react'
import ClubForm from '@/components/Club/ClubForms';
import Header from '@/components/Header/Header';
import { useRouter } from 'next/router';


function ClubForms() {

  const router = useRouter();
  const { id } = router.query;

  return (
    <div>
        <Header path={id} title={id?.toString().toUpperCase()} />
        <ClubForm path={id?.toString()} />
    </div>
  )
}

export default ClubForms;