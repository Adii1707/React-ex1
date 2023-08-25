import { Box, Flex, Heading } from '@chakra-ui/react'
import React from 'react'
import { Link } from 'react-router-dom'

export const Navbar = () => {
  return (
   <Flex bg={"blue.500"} pt={"5px"} justifyContent={"space-between"}>

  
    <Box>
      <Heading size={"lg"}>Expense Tracker App</Heading>   
    </Box>

  <Flex mr={"5%"} width={"40%"} justifyContent={"space-around"}>
    <Link to="/"  size={"md"}>Dashboard</Link>
    <Link to="/Login" size={"md"}>Login</Link>
    <Link to="/Signup" size={"md"}>Signup</Link>
  </Flex>


    </Flex>
  )
}
