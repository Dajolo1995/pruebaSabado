import { createContext } from "react";
import { Homework } from "../interface/index";

interface ContextProps {
  data: any;
  dataEmail: boolean;
  dataLogin: any;
  
dataId:any
  dataUserEmail: (props: any) => Promise<void>;
  dataUserAuth: (props: any) => Promise<void>;
  dataUser: () => Promise<void>;
}

export const HomeworkContext = createContext({} as ContextProps);
