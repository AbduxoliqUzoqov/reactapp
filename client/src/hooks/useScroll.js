import { useEffect, useState } from "react";
const useScrool = (refs) =>{
   useEffect( ()=>{
      refs.current.scrollTop = refs.current.scrollHeight;
   },[]);
	return
}

export default useScrool;