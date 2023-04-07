import React from 'react'
import { Field, FieldArray, reduxForm } from 'redux-form'
import { Container, Flex, FormControl, FormLabel, Input, FormErrorMessage, Button, Box, Select } from '@chakra-ui/react';
import { ChevronDownIcon } from '@chakra-ui/icons';
import { Clubs } from './clubs';

const renderField = ({ label, isRequired, type, input, disabled, meta: {touched, error} }:any) : React.ReactElement => {
    return(
    <FormControl isRequired={isRequired}>
        <Box mt="10px">
          <FormLabel color={"teal.200"}>{label}</FormLabel>
          <Input {...input} type={type} name="clubId" disabled={disabled} placeholder={label} _placeholder={{color: 'whitealpha.600'}} />
        </Box>
    </FormControl>
    );
}

const renderDropDown = ({ input, label, isRequired , type, disabled, meta: { touched, error } }:any) => (
    <Box>
      <FormControl isRequired={isRequired}>
        <FormLabel color = {"teal.300"} >{label}</FormLabel>
        <Select borderRadius={"md"} variant = "outline" {...input} disabled={disabled} icon = {<ChevronDownIcon/>}>
          <option value="">Select Club</option>
          {Object.keys(Clubs).map((option:string,index)=>{
            return <option color="white" key={index} value={Clubs[option]}>{option}</option>
          })}
        </Select>
        {touched && error && <span>{error}</span>}
        </FormControl>
    </Box>
    
  );

const renderSocials = ({fields}: any): React.ReactElement => {
    return(
        <Box padding="2rem" backgroundColor="gray.200" borderRadius="10px" width="70%" mt="20px">
            <Button colorScheme='blue' onClick={() => fields.push({})}>Add Social Media URL</Button>
            {
                fields.map((item: any, index:any) => (
                    <Box key={index} padding="2rem">
                        <Field
                            name={item}
                            label={`Social Media URL #${index+1}`}
                            type="text"
                            component={renderField}
                            disabled={false}
                            isRequired={true}
                        />
                        <Button colorScheme='red' onClick={() => fields.remove(index)} mt="20px">Remove Social Link</Button>
                    </Box>
                ))
            }
        </Box>
    )
}

const renderCoordinators = ({fields}: any) : React.ReactElement => {
    return(
        <Box padding="2rem" backgroundColor="gray.200" borderRadius="10px" width="70%" mt="20px">
            <Button colorScheme='blue' onClick={() => fields.push({})}>Add Coordinator</Button>
            {
                fields.map((item: any, index:any) => (
                    <Box key={index} padding="2rem">
                        <Field
                            name={`${item}.name`}
                            label="Name"
                            type="text"
                            component={renderField}
                            disabled={false}
                            isRequired={true}
                        />
                        <Field
                            name={`${item}.email`}
                            label="Email"
                            type="email"
                            component={renderField}
                            disabled={false}
                            isRequired={true}
                        />
                        <Field
                            name={`${item}.phone`}
                            label="Phone Number"
                            type="number"
                            component={renderField}
                            disabled={false}
                            isRequired={true}
                        />
                        <Field
                            name={`${item}.image`}
                            label="Image Drive Link"
                            type="text"
                            component={renderField}
                            disabled={false}
                            isRequired={false}
                        />
                        <Button colorScheme='red' onClick={() => fields.remove(index)} mt="20px">Remove Coordinator</Button>
                    </Box>
                ))
            }
        </Box>
    )
}

function ClubForm({ handleSubmit }:any) {
  return (
    <div style={{padding: "2rem"}}>
        <Container>
            <Field
                name="clubId"
                label="Club ID"
                component={renderDropDown}
                type="text"
                disabled={false}
                isRequired={true}
            />
            <Field
                name="clubName"
                label="Club Name"
                component={renderField}
                type="text"
                disabled={false}
                isRequired={true}
            />
            <Field
                name="description"
                label="Description"
                component={renderField}
                type="text"
                disabled={false}
                isRequired={true}
            />
            <Field
                name="Logo Drive Link"
                label="Logo Drive Link"
                component={renderField}
                type="text"
                disabled={false}
                isRequired={false}
            />
            <Field
                name="Sponsor Drive Link"
                label="Sponsor Drive Link"
                component={renderField}
                type="text"
                disabled={false}
                isRequired={false}
            />
        </Container>
        <Flex direction="column" alignItems="center" justifyContent="center">
            <FieldArray
                name="coordinators"
                component={renderCoordinators}
            />
            <FieldArray
                name="social-media-url"
                component={renderSocials}
            />
            <Flex gap="10px" mt="20px"> 
          
                <Button size={"md"} colorScheme="red">
                Submit
                </Button>
                <Button size={"md"} colorScheme="teal">
                Clear Values
            </Button>
      </Flex>
        </Flex>
    </div>
  )
}

const CF = reduxForm({
    form: 'club-form'
})(ClubForm);

export default CF;