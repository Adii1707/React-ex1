import { Button, Center, FormControl, FormLabel, Input } from '@chakra-ui/react'
import React from 'react'

export const Signup = () => {

const HandleClick = ()=>{
  
}


  return (
    <Center>
    <FormControl mt="10" w={"30%"} isRequired>
  <FormLabel>Full name</FormLabel>
  <Input placeholder='Full name' />
  <FormLabel mt="4">Email</FormLabel>
  <Input placeholder='Email' />
  <FormLabel mt="4">Password</FormLabel>
  <Input placeholder='Password' />
  <Button onClick={HandleClick} mt="4">Sign Up</Button>
</FormControl>
</Center>
  )
}
