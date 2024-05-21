import costomHook from "./../hooks/chatHook.js"
import { createContext, useContext, useState, useEffect } from "react";

export const ChatContext = createContext();


export const useChatContext = () => {
	return useContext(ChatContext);
};

export const ChatContextProvider = ({ children }) => {
   const user = costomHook();
	const [msg, setMsg] = useState(user);
	useEffect(()=>{
	   setMsg(user)
	},[user])
	return <ChatContext.Provider value={{ msg, setMsg }}>{children}</ChatContext.Provider>;
};
