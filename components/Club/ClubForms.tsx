import React, {useState, useEffect} from 'react'
import { Formik, FieldArray } from 'formik'
import { FormControl, FormLabel, Input, Box, Flex, Button, Select, Center } from '@chakra-ui/react'
import { Clubs } from './clubs'
import { AddIcon, ChevronDownIcon } from '@chakra-ui/icons'
import { getClubData } from './backend'

function ClubForm({path}:{path:string | undefined}) {

  const initialValues = {
    clubId: "",
    clubName: "",
    description: "",
    logoLink: "",
    sponsorLink: "",
    socials: [
      {
        link: ""
      }
    ],
    coordinators: [
      {
        name: "",
        email: "",
        phone: "",
        imageLink: ""
      }
    ],
  }

  const [values, setValues] = useState(null);

  useEffect(() => {
    getClubData("ise")
    .then((res:any) => {
      setValues({...res})
    })
    .catch(err => {
      console.error
    })
  }, [])
  
  return (
    <div style={{padding: "2rem"}}>
        <Formik initialValues={values || initialValues} enableReinitialize onSubmit={(data, {setSubmitting}) => {
          setSubmitting(true)
          console.log(data)
          setSubmitting(false)
        }}>
          {({values, isSubmitting, handleChange, handleSubmit}) => (
            <form onSubmit={handleSubmit}>
              <Flex alignItems="center" justifyContent="center">
                <Box width="70%">
                  <Box>
                    <FormControl isRequired={true}>
                      <FormLabel color = {"teal.300"} >Club ID</FormLabel>
                      <Select borderRadius={"md"} onChange={handleChange} name="clubId" variant = "outline" disabled={false} icon = {<ChevronDownIcon/>}>
                        <option value="">Select Club</option>
                        {Object.keys(Clubs).map((option:string,index)=>{
                          return <option color="white" key={index} value={Clubs[option]}>{option}</option>
                        })}
                      </Select>
                      
                      </FormControl>
                  </Box>
                  <FormControl isRequired={true}>
                      <Box mt="10px">
                        <FormLabel color={"teal.200"}>Club Name</FormLabel>
                        <Input value={values.clubName} onChange={handleChange} type="text" name="clubName" disabled={false} placeholder="Club Name" _placeholder={{color: 'whitealpha.600'}} />
                      </Box>
                  </FormControl>
                  <FormControl isRequired={true}>
                      <Box mt="10px">
                        <FormLabel color={"teal.200"}>Club Description</FormLabel>
                        <Input value={values.description} onChange={handleChange} type="text" name="clubDesc" disabled={false} placeholder="Club Description" _placeholder={{color: 'whitealpha.600'}} />
                      </Box>
                  </FormControl>
                  <FormControl isRequired={false}>
                      <Box mt="10px">
                        <FormLabel color={"teal.200"}>Logo Drive Link</FormLabel>
                        <Input value={values.logoLink} onChange={handleChange} type="text" name="logoLink" disabled={false} placeholder="Logo Drive Link" _placeholder={{color: 'whitealpha.600'}} />
                      </Box>
                  </FormControl>

                </Box>
              </Flex>
              <Flex direction="column" alignItems="center" justifyContent="center">
              <Box padding="2rem" backgroundColor="gray.200" borderRadius="10px" width="70%" mt="20px">
              <FieldArray
                name="socials"
                render = {({remove, push}) => (
                  <>
                  <Center>
                    <Button colorScheme='blue' onClick={() => push({link: ""})} leftIcon={<AddIcon />}>Add Social Media URL</Button>
                  </Center>
                    {
                      values.socials.map((item: any, index:any) => (
                        <Box key={index} padding="2rem">
                              <FormControl isRequired={true}>
                                  <Box mt="10px">
                                    <FormLabel color={"teal.200"}>Social Media Link #{index+1}</FormLabel>
                                    <Input onChange={handleChange} type="text" name={`socials.${index}.link`} disabled={false} placeholder={`Social Media link #${index+1}`} _placeholder={{color: 'whitealpha.600'}} />
                                  </Box>
                              </FormControl>
                              <Button colorScheme='red' onClick={() => remove(index)} mt="20px">Remove Social Link</Button>
                          </Box>
                      ))
                  }
                  </>
                )}
               />
               </Box>
               <Box padding="2rem" backgroundColor="gray.200" borderRadius="10px" width="70%" mt="20px">
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
                    )} leftIcon={<AddIcon />}>Add Coordinators</Button>
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
                    values === null ?
                    "Submit"
                    :
                    "Update"
                  }
                </Button>
                <Button size={"md"} colorScheme="teal">
                  Clear Values
                </Button>
              </Flex>
              </Flex>
            </form>
          )}
        </Formik>
    </div>
  )
}

export default ClubForm