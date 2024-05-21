import React from 'react'
import { AuthContextProvider } from "./context/AuthContext.jsx";
import { ChatContextProvider } from "./context/ChatContent.jsx";
import { BrowserRouter } from "react-router-dom";
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthContextProvider>
      <ChatContextProvider>
         <BrowserRouter>
            <App />
         </BrowserRouter>
      </ChatContextProvider>
    </AuthContextProvider>
  </React.StrictMode>
)
