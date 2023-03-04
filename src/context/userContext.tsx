import { createContext } from "react";
import { Homework } from "../interface/index";

interface ContextProps {
  data: Homework[];
  dataEmail: boolean
  dataUserEmail: (props:any) => Promise<void>;

}

export const HomeworkContext = createContext({} as ContextProps);
