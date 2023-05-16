import { useContext } from "react";
import { AuthContext } from "@src/providers/auth/AuthProvider";

export function useAuth() {
  return useContext(AuthContext);
}