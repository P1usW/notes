import React from "react";
import { useAuth } from "@src/hooks/useAuth";
import { useLocation, Navigate, useNavigate } from "react-router";


interface RequireAuthProps {
  children: React.ReactNode
}

const RequireAuth = ({children}: RequireAuthProps) => {
  const location = useLocation();
  const user = useAuth(); 
  if (!user) {
    return <Navigate to='/login' state={
      {
        from: location
      }
    }/>
  }

  
  return children
}