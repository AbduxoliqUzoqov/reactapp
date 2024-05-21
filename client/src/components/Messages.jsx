import React, { useRef, useState, useEffect } from 'react';
import { useNavigate, Link } from "react-router-dom";
import { useAuthContext } from "./../context/AuthContext.jsx";
import useScroll from "./../hooks/useScroll.js";
import { useChatContext } from "./../context/ChatContent.jsx";
import axios from "axios";
import moment from "moment";

const Messages = () => {
   let token = localStorage.getItem("token");
   const [newmsg, setNewmsg] = useState(false);
   const [pastga, setPastga] = useState(true);
   const textRef = useRef();
   const chatScrollTo = useRef();
   const { authUser, setAuthUser } = useAuthContext();
   const { msg, setMsg } = useChatContext();
   
   
   const hendleSend = async()=>{
		try {
			const url = "https://reactchatapp-server.vercel.app/api/msg/send";
	    	const {data: res }= await axios.post(url,{token,sendtext:newmsg});
	    	setMsg(res)
	     textRef.current.value = "";
	      setNewmsg("")
		} catch (error) {
			console.log("error",error)
		}
   }
   
   const handleChange = (e)=>{
      setNewmsg(e.target.value)
      setPastga(false)
   }
   useEffect( ()=>{
      textRef.current.style.height = "auto";
      textRef.current.style.height = textRef.current.scrollHeight + "px";
   },[newmsg]);
   useEffect( ()=>{
      chatScrollTo.current.scrollTop = chatScrollTo.current.scrollHeight;
   },[pastga]);
   
  return (
    <div>
      <section className="flex3">
         <div ref={chatScrollTo} className="chat-area">
            {msg?.map((m,i)=>{
               if(m.sender._id != authUser._id){
               return (<div key={i} className="xabar-keldi">
               <img src={m.sender.image} alt=""/>
               <div className="ds">
                  <span className="name">{m.sender.fristName}</span>
                  <p>{m.text}</p>
                  <span className="time">{moment(m.createAt).format('HH:mm:ss')}</span>
               </div>
            </div>)
            }else{
               return (<div class="xabar-jonatildi">
               <div class="ds">
                  <span
                  class="name"><span>{m.sender.fristName}</span> <span>{m.sender.lastName}</span></span>
                  <p>{m.text}</p>
                  <span class="time">{moment(m.createAt).format('HH:mm:ss')}</span>
               </div>
            </div>)
               }
            
            })}
         </div>
         <button onClick={()=>setPastga(false)} className={pastga ?
         "pastgago" : "pastgago not"}>⏬</button>
         <div className="form-input">
            <div className="df">
               <textarea onChange={handleChange} ref={textRef} placeholder="Enter ....."></textarea>
               <button onClick={hendleSend}>➡️</button>
            </div>
         </div>
      </section>
   </div>);
}

export default Messages