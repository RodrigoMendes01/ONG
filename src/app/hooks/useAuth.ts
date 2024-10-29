import { useContext } from "react";
import { AuthContext } from "@app/context/authContext";

export function useAuth() {
	return useContext(AuthContext);
}
