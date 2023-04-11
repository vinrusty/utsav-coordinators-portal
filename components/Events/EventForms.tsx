import React, { useEffect, useState } from 'react'
import { Field, Form, Formik, FieldArray } from 'formik'
import { Box, Button, Center, Checkbox, Flex, FormControl, FormLabel, Input, Select, Text } from '@chakra-ui/react'
import { Clubs } from '../Club/clubs'
import { AddIcon, ChevronDownIcon } from '@chakra-ui/icons'
import { Category } from './Category'
import { EventType, eventParticipationType, status } from './EventType'

function EventForms({data}: Object|any) {

    const initialValues = {
        eventName: "",
        eventId: "",
        description: "",
        club: "",
        category: "",
        eventMode: "",
        eventType: [],
        regFee: 0,
        isRegIeee: "false",
        ieeeFee: 0,
        venue: "",
        eventDate: "",
        lastRegDate: "",
        stoponlineregs: "false",
        stopallregs: "false",
        stopspotregs: "false",
        posterLink: "",
        prize: [],
        rules: [],
        resourcePerson: [
            {
                name: "",
                role: "",
                linkedInUrl: ""
            }
        ],
        coordinators: [
            {
                name: "",
                email: "",
                phone: ""
            }
        ],
        sponsorDetails: [
            {
                name: "",
                websiteLink: "",
                description: "",
                imageLink: ""
            }
        ],
        eventParticipation: [
            {
                participationType: "",
                maxParticipants: 0,
                minParticipants: 0,
                createdAt: "",
                updatedAt: ""
            }
        ],
        createdAt: ""
    }

    const [preValues, setPreValues] = useState(null)
    useEffect(() => {
        setPreValues(data.eventCoordinator)
    }, [])

    console.log(preValues)

  return (
    <Box padding="2rem">
        <Formik initialValues={preValues || initialValues} enableReinitialize onSubmit={(data) => {
            
        }}>
            {({values, isSubmitting, handleChange}) => (
                <Form>
                    <Flex alignItems="center" justifyContent="center">
                        <Box width="70%">
                        <FormControl isRequired={true}>
                            <Box mt="10px">
                                <FormLabel color={"teal.200"}>Event Name</FormLabel>
                                <Input value={values.eventName} onChange={handleChange} type="text" name="eventName" disabled={false} placeholder="Event Name" _placeholder={{color: 'whitealpha.600'}} />
                            </Box>
                        </FormControl>
                        <FormControl isRequired={true}>
                            <Box mt="10px">
                                <FormLabel color={"teal.200"}>Event ID</FormLabel>
                                <Input value={values.eventId} onChange={handleChange} type="text" name="eventId" disabled={false} placeholder="Event ID" _placeholder={{color: 'whitealpha.600'}} />
                            </Box>
                        </FormControl>
                        <FormControl isRequired={true}>
                            <Box mt="10px">
                                <FormLabel color={"teal.200"}>Description</FormLabel>
                                <Input value={values.description} onChange={handleChange} type="text" name="description" disabled={false} placeholder="Description" _placeholder={{color: 'whitealpha.600'}} />
                            </Box>
                        </FormControl>
                        <Box mt="10px">
                            <FormControl isRequired={true}>
                            <FormLabel color = {"teal.300"} >Club/Org</FormLabel>
                            <Select value={values.club} borderRadius={"md"} onChange={handleChange} name="club" variant = "outline" disabled={false} icon = {<ChevronDownIcon/>}>
                                <option value="">Select Club</option>
                                {Object.keys(Clubs).map((option:string,index)=>{
                                return <option color="white" value={Clubs[option]} key={index}>{option}</option>
                                })}
                            </Select>
                            
                            </FormControl>
                        </Box>
                        <Box mt="10px">
                            <FormControl isRequired={true}>
                            <FormLabel color = {"teal.300"} >Category</FormLabel>
                            <Select value={values.category} borderRadius={"md"} onChange={handleChange} name="category" variant = "outline" disabled={false} icon = {<ChevronDownIcon/>}>
                                <option value="">Select Category</option>
                                {Category.map((option:string,index)=>{
                                return <option color="white" key={index} value={Category[index]}>{option}</option>
                                })}
                            </Select>
                            </FormControl>
                        </Box>
                        <FormControl isRequired={true}>
                            <Box mt="10px">
                                <FormLabel color={"teal.200"}>Event Type</FormLabel>
                                
                                {
                                    EventType.map((type, index) => (
                                        <div key={index} style={{marginTop: "10px"}}>
                                            <Checkbox name="eventType" value={type} isChecked={values.eventType.filter((i) => i === type)[0] === type}>{type}</Checkbox>
                                        </div>
                                    ))
                                }
                            </Box>
                        </FormControl>
                        <FormControl isRequired={true}>
                            <Box mt="10px">
                                <FormLabel color={"teal.200"}>Registration Fee</FormLabel>
                                <Input value={values.regFee} onChange={handleChange} type="text" name="regFee" disabled={false} placeholder="Description" _placeholder={{color: 'whitealpha.600'}} />
                            </Box>
                        </FormControl>
                        <FormControl isRequired={false}>
                            <Box mt="10px">
                                <FormLabel color={"teal.200"}>Is it an IEEE event</FormLabel>
                                <Select borderRadius={"md"} onChange={handleChange} name="isRegIeee" variant = "outline" disabled={false} icon = {<ChevronDownIcon/>}>
                                    <option value="">Choose</option>
                                    {
                                        status.map((state, i) => (
                                            <>
                                                <option key={i} value={(state==="no"? "false":"true")} >{state}</option>
                                            </>
                                        ))
                                    }
                                </Select>
                            </Box>
                        </FormControl>
                        {
                            Boolean(values.isRegIeee) == false ?
                            <></>
                            :
                            <Box paddingLeft="2rem">
                                <FormControl isRequired={false}>
                                    <Box mt="10px">
                                        <FormLabel color={"teal.200"}>Enter IEEE Registration Fee</FormLabel>
                                        <Input value={values.ieeeFee} onChange={handleChange} type="text" name="ieeeFee" disabled={false} placeholder="Enter IEEE Registration Fee" _placeholder={{color: 'whitealpha.600'}} />
                                    </Box>
                                </FormControl>
                            </Box>
                        }
                        <FormControl isRequired={true}>
                            <Box mt="10px">
                                <FormLabel color={"teal.200"}>Venue</FormLabel>
                                <Input value={values.venue} onChange={handleChange} type="text" name="venue" disabled={false} placeholder="Venue" _placeholder={{color: 'whitealpha.600'}} />
                            </Box>
                        </FormControl>
                        <FormControl isRequired={true}>
                            <Box mt="10px">
                                <FormLabel color={"teal.200"}>Event Date</FormLabel>
                                <Input value={values.eventDate} onChange={handleChange} type="text" name="eventDate" disabled={false} placeholder="Event Date" _placeholder={{color: 'whitealpha.600'}} />
                            </Box>
                        </FormControl>
                        <FormControl isRequired={true}>
                            <Box mt="10px">
                                <FormLabel color={"teal.200"}>Last Date to Register</FormLabel>
                                <Input value={values.lastRegDate} onChange={handleChange} type="date" name="lastRegDate" disabled={false} placeholder="Last Registration Date" _placeholder={{color: 'whitealpha.600'}} />
                            </Box>
                        </FormControl>
                        <Flex gap="20px" mt="20px" alignItems="center" justifyContent="center">
                            <FormControl isRequired={false}>
                                <FormLabel color={"yellow.300"}>Stop Website Registrations</FormLabel>
                                <Select value={values.stoponlineregs} borderRadius={"md"} onChange={handleChange} name="stoponlineregs" variant = "outline" disabled={false} icon = {<ChevronDownIcon/>}>
                                    <option value="">Status</option>
                                    {
                                        status.map((state, i) => (
                                            <>
                                                <option key={i} value={(state==="no"? "false":"true")} >{state}</option>
                                            </>
                                        ))
                                    }
                                </Select>
                            </FormControl>
                            <FormControl isRequired={false}>
                                <FormLabel color={"yellow.300"}>Stop Spot Registrations</FormLabel>
                                <Select value={values.stopspotregs} borderRadius={"md"} onChange={handleChange} name="stopspotregs" variant = "outline" disabled={false} icon = {<ChevronDownIcon/>}>
                                    <option value="">Status</option>
                                    {
                                        status.map((state, i) => (
                                            <>
                                                <option key={i} value={(state==="no"? "false":"true")} >{state}</option>
                                            </>
                                        ))
                                    }
                                </Select>
                            </FormControl>
                            <FormControl isRequired={false}>
                                <FormLabel color={"yellow.300"}>Stop All Registrations</FormLabel>
                                <Select value={values.stopallregs} borderRadius={"md"} onChange={handleChange} name="stopallregs" variant = "outline" disabled={false} icon = {<ChevronDownIcon/>}>
                                    <option value="">Status</option>
                                    {
                                        status.map((state, i) => (
                                            <>
                                                <option key={i} value={(state==="no"? "false":"true")} >{state}</option>
                                            </>
                                        ))
                                    }
                                </Select>
                            </FormControl>
                        </Flex>
                        <Box padding="2rem" backgroundColor="gray.200" borderRadius="10px" width="100%" mt="20px">
                            <FieldArray
                                name="sponsorDetails"
                                render = {({remove, push}) => (
                                <>
                                <Center>
                                    <Button colorScheme='blue' onClick={() => push(
                                        {
                                        name: "",
                                        websiteLink: "",
                                        description: "",
                                        imageLink: ""
                                        }
                                    )}
                                    leftIcon={<AddIcon />}>Sponsor Details</Button>
                                </Center>
                                    {
                                    values.sponsorDetails && values.sponsorDetails.map((item: any, index:any) => (
                                        <Box key={index} padding="2rem">
                                            <FormControl isRequired={true}>
                                                <Box mt="10px">
                                                    <FormLabel color={"teal.200"}>Name</FormLabel>
                                                    <Input value={item.name} onChange={handleChange} type="text" name={`sponsorDetails.${index}.name`} disabled={false} placeholder="Name" _placeholder={{color: 'whitealpha.600'}} />
                                                </Box>
                                            </FormControl>
                                            <FormControl isRequired={true}>
                                                <Box mt="10px">
                                                    <FormLabel color={"teal.200"}>Sponsor Website Link</FormLabel>
                                                    <Input value={item.websiteLink} onChange={handleChange} type="text" name={`sponsorDetails.${index}.websiteLink`} disabled={false} placeholder="Sponsor Website Link" _placeholder={{color: 'whitealpha.600'}} />
                                                </Box>
                                            </FormControl>
                                            <FormControl isRequired={true}>
                                                <Box mt="10px">
                                                    <FormLabel color={"teal.200"}>Sponsor Description</FormLabel>
                                                    <Input value={item.description} onChange={handleChange} type="text" name={`sponsorDetails.${index}.description`} disabled={false} placeholder="Sponsor Description" _placeholder={{color: 'whitealpha.600'}} />
                                                </Box>
                                            </FormControl>
                                            <FormControl isRequired={true}>
                                                <Box mt="10px">
                                                    <FormLabel color={"teal.200"}>Sponsor Image Link</FormLabel>
                                                    <Input value={item?.imageLink} onChange={handleChange} type="text" name={`sponsorDetails.${index}.imageLink`} disabled={false} placeholder="Sponsor Image Link" _placeholder={{color: 'whitealpha.600'}} />
                                                </Box>
                                            </FormControl>
                                            <Button colorScheme='red' onClick={() => remove(index)} mt="20px">Remove Sponsor</Button>
                                        </Box>
                                    ))
                                }
                                </>
                                )}
                                />
                        </Box>
                        {
                            preValues === null ?
                            <></>
                            :
                            <Box padding="2rem" backgroundColor="gray.200" borderRadius="10px" width="100%" mt="20px">
                                <FieldArray
                                    name="resourcePerson"
                                    render = {({remove, push}) => (
                                    <>
                                    <Center>
                                        <Button colorScheme='blue' onClick={() => push(
                                            {
                                            name: "",
                                            role: "",
                                            linkedInUrl: ""
                                            }
                                        )}
                                        leftIcon={<AddIcon />}>Resorce Person Details</Button>
                                    </Center>
                                        {
                                        values.resourcePerson.map((item: any, index:any) => (
                                            <Box key={index} padding="2rem">
                                                <FormControl isRequired={true}>
                                                    <Box mt="10px">
                                                        <FormLabel color={"teal.200"}>Name</FormLabel>
                                                        <Input value={item.name} onChange={handleChange} type="text" name={`resourcePerson.${index}.name`} disabled={false} placeholder="Name" _placeholder={{color: 'whitealpha.600'}} />
                                                    </Box>
                                                </FormControl>
                                                <FormControl isRequired={true}>
                                                    <Box mt="10px">
                                                        <FormLabel color={"teal.200"}>Role</FormLabel>
                                                        <Input value={item.role} onChange={handleChange} type="text" name={`resourcePerson.${index}.role`} disabled={false} placeholder="Role" _placeholder={{color: 'whitealpha.600'}} />
                                                    </Box>
                                                </FormControl>
                                                <FormControl isRequired={true}>
                                                    <Box mt="10px">
                                                        <FormLabel color={"teal.200"}>LinkedIn URL</FormLabel>
                                                        <Input value={item.linkedInUrl} onChange={handleChange} type="text" name={`resourcePerson.${index}.linkedInUrl`} disabled={false} placeholder="LinkedIn URL" _placeholder={{color: 'whitealpha.600'}} />
                                                    </Box>
                                                </FormControl>
                                                <Button colorScheme='red' onClick={() => remove(index)} mt="20px">Remove Resource Person</Button>
                                            </Box>
                                        ))
                                    }
                                    </>
                                    )}
                                    />
                            </Box>
                        }
                        <Box padding="2rem" backgroundColor="gray.200" borderRadius="10px" width="100%" mt="20px">
                            <FieldArray
                                name="eventParticipation"
                                render = {({remove, push}) => (
                                <>
                                <Center>
                                    <Button colorScheme='blue' onClick={() => push(
                                        {
                                            participationType: "",
                                            maxParticipants: 0,
                                            minParticipants: 0,
                                            createdAt: "",
                                            updatedAt: ""
                                        }
                                    )}
                                    leftIcon={<AddIcon />}
                                    >Event Details</Button>
                                </Center>
                                    {
                                    values.eventParticipation.map((item: any, index:any) => (
                                        <Box key={index} padding="2rem">
                                            <FormControl isRequired={true}>
                                                <Box mt="10px">
                                                    <FormLabel color={"teal.200"}>Indivisual/Team Event</FormLabel>
                                                    <Select value={values.eventParticipation[index].participationType} borderRadius={"md"} onChange={handleChange} name={`eventParticipation.${index}.participationType`} variant = "outline" disabled={false} icon = {<ChevronDownIcon/>}>
                                                        <option value="">Select Event</option>
                                                        {
                                                            eventParticipationType.map((state, i) => (
                                                                <>
                                                                    <option key={i} value={state} >{state}</option>
                                                                </>
                                                            ))
                                                        }
                                                    </Select>
                                                </Box>
                                            </FormControl>
                                            <Text color="yellow.300">
                                            If the event is an individual event, then the number of participants should be 1.
                                            Ignore the Minimum and Maximum number of participants if the event is an individual event.
                                            If the event is a team event, then add minimum and maximum number of participants.
                                            </Text>
                                            <FormControl isRequired={true}>
                                                <Box mt="10px">
                                                    <FormLabel color={"teal.200"}>Minimum Number of Participants</FormLabel>
                                                    <Input value={item.minParticipants} onChange={handleChange} type="number" name={`eventParticipation.${index}.minParticipants`} disabled={false} placeholder="Minimum Number of Participants" _placeholder={{color: 'whitealpha.600'}} />
                                                </Box>
                                            </FormControl>
                                            <FormControl isRequired={true}>
                                                <Box mt="10px">
                                                    <FormLabel color={"teal.200"}>Maximum Number of Participants</FormLabel>
                                                    <Input value={item.maxParticipants} onChange={handleChange} type="number" name={`eventParticipation.${index}.maxParticipants`} disabled={false} placeholder="Maximum Number of Participants" _placeholder={{color: 'whitealpha.600'}} />
                                                </Box>
                                            </FormControl>
                                            <Button colorScheme='red' onClick={() => remove(index)} mt="20px">Remove Detail</Button>
                                        </Box>
                                    ))
                                }
                                </>
                                )}
                                />
                        </Box>
                        <Box padding="2rem" backgroundColor="gray.200" borderRadius="10px" width="100%" mt="20px">
                            <FieldArray
                                name="rules"
                                render = {({remove, push}) => (
                                <>
                                <Center>
                                    <Button colorScheme='blue' onClick={() => push(
                                        ""
                                    )}
                                    leftIcon={<AddIcon />}
                                    >Add Rule</Button>
                                </Center>
                                    {
                                    values.rules.map((item: any, index:any) => (
                                        <Box key={index} padding="2rem">
                                        
                                            <FormControl isRequired={true}>
                                                <Box mt="10px">
                                                    <FormLabel color={"teal.200"}>Rule #{index+1}</FormLabel>
                                                    <Input value={values.rules[index]} name={values.rules[index]} onChange={handleChange} type="text" disabled={false} placeholder="Rule" _placeholder={{color: 'whitealpha.600'}} />
                                                </Box>
                                            </FormControl>
                                            
                                            <Button colorScheme='red' onClick={() => remove(index)} mt="20px">Remove Rule</Button>
                                        </Box>
                                    ))
                                }
                                </>
                                )}
                                />
                        </Box>
                        <Box padding="2rem" backgroundColor="gray.200" borderRadius="10px" width="100%" mt="20px">
                            <FieldArray
                                name="prize"
                                render = {({remove, push}) => (
                                <>
                                <Center>
                                    <Button colorScheme='blue' onClick={() => push(
                                        ""
                                    )}
                                    leftIcon={<AddIcon />}
                                    >Add Winner Price</Button>
                                </Center>
                                    {
                                    values.prize.map((item: any, index:any) => (
                                        <Box key={index} padding="2rem">
                                        
                                            <FormControl isRequired={true}>
                                                <Box mt="10px">
                                                    <FormLabel color={"teal.200"}>Winner Price #{index+1}</FormLabel>
                                                    <Input value={values.prize[index]} name={values.prize[index]} onChange={handleChange} type="text" disabled={false} placeholder={`Winner price #${index+1}`} _placeholder={{color: 'whitealpha.600'}} />
                                                </Box>
                                            </FormControl>
                                            
                                            <Button colorScheme='red' onClick={() => remove(index)} mt="20px">Remove Winner Price</Button>
                                        </Box>
                                    ))
                                }
                                </>
                                )}
                                />
                        </Box>
                        <Box padding="2rem" backgroundColor="gray.200" borderRadius="10px" width="100%" mt="20px">
                        <FieldArray
                            name="coordinators"
                            render = {({remove, push}) => (
                            <>
                            <Center>
                                <Button colorScheme='blue' onClick={() => push(
                                    {
                                    name: "",
                                    email: "",
                                    phone: "",
                                    imageLink: ""
                                    }
                                )}
                                leftIcon={<AddIcon />}>Add Coordinators</Button>
                            </Center>
                                {
                                values.coordinators.map((item: any, index:any) => (
                                    <Box key={index} padding="2rem">
                                        <FormControl isRequired={true}>
                                            <Box mt="10px">
                                                <FormLabel color={"teal.200"}>Name</FormLabel>
                                                <Input value={item.name} onChange={handleChange} type="text" name={`coordinators.${index}.name`} disabled={false} placeholder="Name" _placeholder={{color: 'whitealpha.600'}} />
                                            </Box>
                                        </FormControl>
                                        <FormControl isRequired={true}>
                                            <Box mt="10px">
                                                <FormLabel color={"teal.200"}>Email</FormLabel>
                                                <Input value={item.email} onChange={handleChange} type="email" name={`coordinators.${index}.email`} disabled={false} placeholder="Email" _placeholder={{color: 'whitealpha.600'}} />
                                            </Box>
                                        </FormControl>
                                        <FormControl isRequired={true}>
                                            <Box mt="10px">
                                                <FormLabel color={"teal.200"}>Phone</FormLabel>
                                                <Input value={item.phone} onChange={handleChange} type="text" name={`coordinators.${index}.phone`} disabled={false} placeholder="Phone Number" _placeholder={{color: 'whitealpha.600'}} />
                                            </Box>
                                        </FormControl>
                                        <FormControl isRequired={true}>
                                            <Box mt="10px">
                                                <FormLabel color={"teal.200"}>Image Drive Link</FormLabel>
                                                <Input value={item?.imageLink} onChange={handleChange} type="text" name={`coordinators.${index}.imageLink`} disabled={false} placeholder="Image Drive Link" _placeholder={{color: 'whitealpha.600'}} />
                                            </Box>
                                        </FormControl>
                                        <Button colorScheme='red' onClick={() => remove(index)} mt="20px">Remove Coordinator</Button>
                                    </Box>
                                ))
                            }
                            </>
                            )}
                            />
                        </Box>
                        <Flex gap="10px" mt="20px" justifyContent="center">
                            <Button type="submit" size={"md"} colorScheme="red">
                            {
                                preValues === null ?
                                "Submit"
                                :
                                "Update"
                            }
                            </Button>
                            <Button size={"md"} colorScheme="teal">
                            Clear Values
                            </Button>
                        </Flex>
                        </Box>
                    </Flex>
                </Form>
            )}
        </Formik>
    </Box>
  )
}

export default EventForms