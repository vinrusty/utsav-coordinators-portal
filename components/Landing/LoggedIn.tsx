import { CheckCircleIcon } from '@chakra-ui/icons'
import { Box, Heading, List, ListIcon, ListItem , ColorModeScript, useColorMode} from '@chakra-ui/react'
import Link from 'next/link'
import React from 'react'
import theme from '@/components/Theme/theme'
import { mode } from "@chakra-ui/theme-tools";


    const getClubEvents=(club:string,data:any):Array<string | any>=>{
        let events=[];
        if(data && data[club])
        {
          events=data[club];
        }
        return events;
        
    }

function LoggedIn({data}:any) {
    // const { colorMode, toggleColorMode } = useColorMode()
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
            <List mt="1.2rem" ml="2rem" color="gold">
                {
                    getClubEvents("ise", data).map((item, index) => (
                        <ListItem mt="20px" key={index}>
                            <ListIcon as={CheckCircleIcon} color="gold" />
                            <Link href="/event/ISEASD">{item}</Link>
                        </ListItem>
                    ))
                }
            </List>
        </Box>
    </div>
  )
}

export default LoggedIn