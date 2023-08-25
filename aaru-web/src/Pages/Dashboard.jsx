import { Box, Flex, Heading } from '@chakra-ui/react'
import React from 'react'
import { Link } from 'react-router-dom'
import { Tracker } from '../Components/Tracker'

export const Dashboard = () => {
  return (
    <Box>
    {/* <Flex bg={"darkgrey"} justifyContent={"space-evenly"}>
      <Link to={"/Tracker"} >  <Heading size={"md"} color={"white"}>Tracker</Heading></Link>
      <Link to={"/Analytics"}>  <Heading size={"md"} color={"white"}>Analytics</Heading></Link>
       <Link to = {"/History"}> <Heading size={"md"} color={"white"}>History</Heading></Link>
    </Flex> */}
    <Tracker />
    </Box>
  )
}
