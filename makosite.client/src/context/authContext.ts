import {IAuthContextProps} from "../interfaces/IAuthContextProps.ts";
import {createContext} from "react";

export const AuthContext = createContext<IAuthContextProps | undefined>(undefined);