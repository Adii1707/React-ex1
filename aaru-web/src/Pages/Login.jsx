import { Button, Center, FormControl, FormLabel, Input } from '@chakra-ui/react';
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { getdata } from '../Redux/Auth/action';
import { useNavigate } from 'react-router-dom';



export const Login = () => {
  const [email, setEmail] = useState("");
//  let [isAuth, setIsAuth] = useState(false);
const [Password, setPassword] = useState("");
const dispatch = useDispatch();
let user = useSelector((store)=> store.reducer.Data);
const navigate = useNavigate();



useEffect(()=>{
  dispatch(getdata());
  },[dispatch])

const HandleClick = ()=>{
     if(email && Password){
      
      user=  user.filter((el)=> email==el.email && Password==el.password)

     if(user[0]?.email == email && user[0]?.password==Password)
     { 
      alert("Success")
      
      localStorage.setItem("username",user[0]?.name);
      
      const storageEvent = new StorageEvent("storage", {
           key: "username",
          newValue: user[0].name
});
window.dispatchEvent(storageEvent);

      localStorage.setItem("usermail",email);
      
      // setIsAuth(true);
      navigate("/")
    } 
     else
      {alert("Wrong Credential")};
    
  }else{
      alert("plzz fill all the required details")
     }
}


  return (
    <Center>
    <FormControl mt="10" w={"30%"} isRequired>
  <FormLabel>Email</FormLabel>
  <Input type='text' placeholder='Email' value={email} onChange={(e)=> setEmail(e.target.value)} />
  <FormLabel mt="4">Password</FormLabel>
  <Input type='password' placeholder='Password' value={Password} onChange={(e)=> setPassword(e.target.value)} />
  <Button  onClick={HandleClick} mt="4">Login</Button>
</FormControl>
</Center>
  )
}
