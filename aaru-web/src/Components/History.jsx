import { Box, Button, Center, Flex, Heading, IconButton, Text } from '@chakra-ui/react'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom'
import { getTrackingData } from '../Redux/App/action';

export const History = () => {


  const dispatch = useDispatch();
  let  Data = useSelector((store)=> store.appreducer.Data) || [];
  
  useEffect(()=>{
    dispatch(getTrackingData())
  },[dispatch])




  return (
    <>
    <Flex bg={"darkgrey"} justifyContent={"space-evenly"}>
      <Link to={"/Tracker"} >  <Heading size={"md"} color={"white"}>Tracker</Heading></Link>
      <Link to={"/Analytics"}>  <Heading size={"md"} color={"white"}>Analytics</Heading></Link>
       <Link to = {"/History"}> <Heading size={"md"} color={"white"}>History</Heading></Link>
    </Flex>
    <Heading>History</Heading>
    <Center>
      <Box m="20px" w={"50%"}>
       {
        Data?.map((el)=>
         {
          return (<Flex p="10px" flexDirection={"column"}  borderRadius={"5px"} mt="10px"  bg={"ivory"} height={"100"} boxShadow={"md"} >
                 <Flex w={"full"} justifyContent={"space-between"}>
                 <Text m="8px" fontWeight={"semibold"}>{el.Category}</Text>
                 <Text m="8px" color={el.Type == "Income"? "green.400": "red.400"} fontWeight={"medium"} >{el.Type == "Income"? "+"+el.Amount : "-"+el.Amount}</Text>
                 </Flex>
                 <Flex justifyContent={"space-between"}>
                 <Text m="8px" fontWeight={"semibold"}>{el.Date}</Text>
                  <Flex justifyContent={"space-around"}>
                    <Button>
                      Edit
                      </Button>
                      <Button Button ml="4px">
                       Delete
                      </Button>
                  </Flex>
                 </Flex>
            </Flex>)
          
        })
       }
      </Box>
    </Center>
    </>
  )
}
