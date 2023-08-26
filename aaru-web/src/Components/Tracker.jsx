import { Box, Button, Center, Flex, FormControl, FormLabel, Heading, Input, Select } from '@chakra-ui/react'
import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom'
import { postTrackingData } from '../Redux/App/action';

export const Tracker = () => {
const navigate = useNavigate();
const [Type, setType] = useState("");
const [category, setCategory] = useState("");
const [amount, setAmount] = useState("");
const [date, setDate] = useState("");
const dispatch = useDispatch();
let usermail = localStorage.getItem("usermail");
 

console.log("usermail",usermail)
const HandleClick = ()=> {
        if(usermail && Type && category && amount && date) {
          dispatch(postTrackingData({usermail, Type, category, amount, date}));
          alert("Data Saved");
          navigate("/Analytics")
          
        }else{
          alert("Please fill all the details!")
        }
}

  return (
    <Box>
    <Flex bg={"darkgrey"} justifyContent={"space-evenly"}>
      <Link to={"/Tracker"} >  <Heading size={"md"} color={"white"}>Tracker</Heading></Link>
      <Link to={"/Analytics"}>  <Heading size={"md"} color={"white"}>Analytics</Heading></Link>
       <Link to = {"/History"}> <Heading size={"md"} color={"white"}>History</Heading></Link>
    </Flex>
    <Center>
    <FormControl mt="10" w={"30%"} isRequired>
  <FormLabel>Type</FormLabel>
   
    <Select placeholder='Select Type' value={Type} onChange={(e)=> setType(e.target.value)}>
  <option value='Income'>Income</option>
  <option value='Expense'>Expense</option>
</Select>
<FormLabel mt="4">Category</FormLabel>
{
Type=="Income"? <Select placeholder='Select Category' value={category} onChange={(e)=> setCategory(e.target.value)} >
  <option value='Salary'>Salary</option>
  <option value='Gifts'>Gifts</option>
  <option value='Refunds'>Refunds</option>
  <option value='Others'>Others</option>
</Select> :
<Select placeholder='Select Category' value={category} onChange={(e)=> setCategory(e.target.value)} >
  <option value='Food & Drinks'>Food & Drinks</option>
  <option value='Shopping'>Shopping</option>
  <option value='Housing'>Housing</option>
  <option value='Bills'>Bills</option>
  <option value='Vehicle & Transport'>Vehicle & Transport</option>
  <option value='LifeStyle'>LifeStyle</option>

</Select>
}
  <FormLabel mt="4">Amount</FormLabel>
  <Input type='number' placeholder='Amount' value={amount} onChange={(e)=> setAmount(e.target.value)} />
  <FormLabel mt="4">Date</FormLabel>
  <Input type='date' placeholder='Date' value={date} onChange={(e)=> setDate(e.target.value)} />
  <Button onClick={HandleClick} mt="4">Save Data</Button>
</FormControl>
</Center>
    </Box>
  )
}
