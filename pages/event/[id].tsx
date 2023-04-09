import EventForms from '@/components/Events/EventForms'
import Header from '@/components/Header/Header'
import { useRouter } from 'next/router'
import React from 'react'

function New() {

  const router = useRouter();
  const { id } = router.query;

  return (
    <div>
        <Header path={id?.toString()} title={id?.toString().toUpperCase()} />
        <EventForms />
    </div>
  )
}

export default New