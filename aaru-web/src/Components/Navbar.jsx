import { Box, Flex, Heading, Text } from '@chakra-ui/react'
import React from 'react'
import { Link } from 'react-router-dom'

export const Navbar = () => {


  
  let name = localStorage.getItem("username");

  return (
   <Flex bg={"blue.500"} pt={"5px"} justifyContent={"space-between"}>

  
    <Box>
      <Heading size={"lg"}>Expense Tracker App</Heading>   
    </Box>

  <Flex mr={"5%"} width={"40%"} justifyContent={"space-around"}>
    <Link to="/"  size={"md"}>Dashboard</Link>
    <Link   to="/Login" size={"md"}><Text color={name? "white" : "black"} >{name? `${name}`: "Login"}</Text> </Link>
    <Link to="/Signup" size={"md"}>Signup</Link>
  </Flex>


    </Flex>
  )
}
