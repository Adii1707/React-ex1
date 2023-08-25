import { Button, Center, FormControl, FormLabel, Input } from '@chakra-ui/react'
import React, { useState } from 'react'
import {useDispatch} from "react-redux"
import { postuserdata } from '../Redux/Auth/action';
import { useNavigate } from 'react-router-dom';
export const Signup = () => {

const [name, setName] = useState("");
const [email, setEmail] = useState("");
const [password, setPassword] = useState("");
const dispatch = useDispatch()
const navigate = useNavigate();


const HandleClick = ()=>{
     if(name && email && password){
      console.log(name, email, password)
      dispatch(postuserdata({name, email, password}))
      .then((res)=> alert("success"))
      navigate("/Login")
      
     }else{
      alert("plzz fill all the required details")
     }
}


  return (
    <Center>
    <FormControl mt="10" w={"30%"} isRequired>
  <FormLabel>Full name</FormLabel>
  <Input type='text' placeholder='Full name' value={name} onChange={(e)=> setName(e.target.value)} />
  <FormLabel mt="4">Email</FormLabel>
  <Input type='email' placeholder='Email' value={email} onChange={(e)=> setEmail(e.target.value)} />
  <FormLabel mt="4">Password</FormLabel>
  <Input type='password' placeholder='Password' value={password} onChange={(e)=> setPassword(e.target.value)} />
  <Button onClick={HandleClick} mt="4">Sign Up</Button>
</FormControl>
</Center>
  )
}
