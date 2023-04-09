import React from 'react'
import { Box, Breadcrumb, BreadcrumbItem, BreadcrumbLink, Center, Flex, Heading } from '@chakra-ui/react'
import Link from 'next/link'

function Header({path, title}: {path: string | string[] | undefined, title: string | string[] | undefined}) {
  return (
    <div>
        <Flex justifyContent="center" alignItems="center" direction="column">
            <Box padding="2rem" width="70%">
                <Box>
                    <Breadcrumb>
                        <BreadcrumbItem>
                            <BreadcrumbLink as={Link} href="/" fontSize="xl">Home</BreadcrumbLink>
                        </BreadcrumbItem>
                        <BreadcrumbItem>
                            <BreadcrumbLink as={Link} href={`/${path}`} fontSize="xl">{title}</BreadcrumbLink>
                        </BreadcrumbItem>
                    </Breadcrumb>
                </Box>
                <Box mt="1.5rem">
                    <Heading>
                    {title}
                    </Heading>
                </Box>
            </Box>
        </Flex>
    </div>
  )
}

export default Header