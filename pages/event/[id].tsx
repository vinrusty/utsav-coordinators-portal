import EventForms from '@/components/Events/EventForms'
import Header from '@/components/Header/Header'
import { GetServerSideProps } from 'next';
import { AppContext } from 'next/app';
import { useRouter } from 'next/router'
import React from 'react'

export async function getServerSideProps(context:any){
  const { id } = context.query
  const res = await fetch("http://localhost:5500"+`/api/event/${id}`, {
    method: "POST",
    headers: {
      "Content-Type": "Application/json",
      "Authorization": "Bearer 346433c5cdf018029041"
    },
    body: JSON.stringify({email: "vineethh.is20@bmsce.ac.in"})
  });
  const data = await res.json();
  return {
    props: {
      data
    }
  }
}

function New({data}:any) {

  const router = useRouter();
  const { id } = router.query;

  return (
    <div>
        <Header path={id?.toString()} title={id?.toString().toUpperCase()} />
        <EventForms data={data} />
    </div>
  )
}

export default New