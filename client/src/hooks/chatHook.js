import { useEffect, useState } from "react";
const chatMsg = () =>{
   const [msg,setMsg] = useState([]);
   useEffect(()=>{
	   const fetAp = async () =>{
	      const url = await fetch(
          `https://reactchatapp-server.vercel.app/api/msg/get`
        );
	      const data = await url.json()
	      setMsg(data)
	   }
	   fetAp()
	},[]);
	return msg;
}

export default chatMsg;