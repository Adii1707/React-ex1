import { Box, Center, Flex, Heading } from '@chakra-ui/react'
import React from 'react'
import { Link } from 'react-router-dom'
import { Income } from './Income'
import { Expense } from './Expense'

export const Analytics = () => {
  return (
    <Box>
    <Flex bg={"darkgrey"} justifyContent={"space-evenly"}>
      <Link to={"/Tracker"} >  <Heading size={"md"} color={"white"}>Tracker</Heading></Link>
      <Link to={"/Analytics"}>  <Heading size={"md"} color={"white"}>Analytics</Heading></Link>
       <Link to = {"/History"}> <Heading size={"md"} color={"white"}>History</Heading></Link>
    </Flex>
    <Center>
    <Flex w={"full"} justifyContent={"space-around"}>
      <Box width={"30%"} mt={5}>
      <Heading mb={5}>Income Chart</Heading>
    <Income />
      </Box>

      <Box width={"30%"} mt={5} ml={20}>
      <Heading mb={5}>Expense Chart</Heading>
      <Expense />
      </Box>

    </Flex>
    </Center>
    </Box>
  )
}
