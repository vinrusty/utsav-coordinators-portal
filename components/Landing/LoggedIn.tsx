import { CheckCircleIcon } from '@chakra-ui/icons'
import { Box, Heading, List, ListIcon, ListItem } from '@chakra-ui/react'
import Link from 'next/link'
import React from 'react'

function LoggedIn({data}:any) {

    console.log(data)
  return (
    <div>
        <Box width="100%" padding="2rem">
            <Heading size="md" color="teal.200">Club and Event Coordinators Dashboard</Heading>
            <List mt="2rem" ml="2rem" color="gold">
                <ListItem>
                    <ListIcon as={CheckCircleIcon} color="gold" />
                    <Link href="/event/new">Add New Event</Link>
                </ListItem>
            </List>
            <Box mt="20px"></Box>
            <Heading size="md" color="teal.200">Your Clubs/Departments are</Heading>
            <List mt="2rem" ml="2rem" color="gold">
                <ListItem>
                    <ListIcon as={CheckCircleIcon} color="gold" />
                    <Link href="/club/ise">ISE</Link>
                </ListItem>
            </List>
            <Box mt="20px"></Box>
            <Heading size="md" color="teal.200">Your Events are</Heading>
            <List mt="2rem" ml="2rem" color="gold">
                <ListItem>
                    <ListIcon as={CheckCircleIcon} color="gold" />
                    <Link href="/event/ISEASD">ISEASD</Link>
                </ListItem>
            </List>
        </Box>
    </div>
  )
}


export async function getStaticProps() {
    const res = await fetch("http://localhost:5500"+"/api/getAllEvents",{
        method: "POST",
        headers: {
            "Content-Type": "Application/json",
            "Authorization": "Bearer 346433c5cdf018029041"
        },
        body: JSON.stringify({email: "vineethh.is20@bmsce.ac.in"})
    });
    const data = res.json()
    console.log(data)
    return {
        props: {
            data,
        }
    }
}

export default LoggedIn