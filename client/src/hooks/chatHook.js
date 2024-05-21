import { useEffect, useState } from "react";
const chatMsg = () =>{
   const [msg,setMsg] = useState([]);
   useEffect(()=>{
	   const fetAp = async () =>{
	      const url = await fetch(
          `https://reactapp-api.vercel.app/api/msg/get`
        );
	      const data = await url.json()
	      setMsg(data)
	   }
	   fetAp()
	},[]);
	return msg;
}

export default chatMsg;
