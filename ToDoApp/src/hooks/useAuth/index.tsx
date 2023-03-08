import { useContext } from "react";
import { AuthContext, AuthContextData } from "./context";

export function useAuth(): AuthContextData {
  const context = useContext(AuthContext);
  return context;
}
