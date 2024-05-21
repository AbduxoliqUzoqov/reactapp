import { useEffect, useState } from "react";
import axios from "axios";
const useAuth = () =>{
   const [token,setToken] = useState(localStorage.getItem("token") || null);
   const [user,setUser] = useState({
      "_id": "",
      "fristName": "",
      "lastName": "",
      "image": "https://avatar.iran.liara.run/public/boy?username=markx9b",
      "email": "",
      "password": "",
      "__v": 0});
   useEffect(()=>{
	   const fetAp = async () =>{
	      const { data } = await axios.post(
          "https://reactapp-api.vercel.app/api/token/",
          { token }
        );
	      setUser(data)
	   }
	   fetAp()
	},[]);
	return user;
}

export default useAuth;
