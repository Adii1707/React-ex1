import { useToast } from "@chakra-ui/react";
// import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

const PrivateRoute = ({ children }) => {
  const toast = useToast();
//   const  isAuth  = useSelector((state) => state.reducer.isAuth);
     let email = localStorage.getItem("usermail");
  console.log(email)
  if (email) {
    return children;
  } else {
    toast({
      description: "Please Login",
      status: "info",
      duration: 3000,
      isClosable: true,
      position: "top-center",
    });
    return <Navigate to={"/Login"} replace={true} />;
  }
};

export default PrivateRoute;