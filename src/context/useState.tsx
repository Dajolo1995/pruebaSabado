import { FC, useReducer } from "react";
import { HomeworkContext } from "./userContext";
import { HomeworkReducer } from "./userReducer";
import { Homework } from "../interface/index";
import clienteAxios from "../config/clienteAxios";

import Swal from "sweetalert2";

export interface taskStateInterfaz {
  data: Homework[];
  dataId: object;
  dataEmail: boolean;
}

interface propsChildren {
  children: JSX.Element | JSX.Element[];
}

const UseState: FC<propsChildren> = ({ children }) => {
  const taskInitialState: taskStateInterfaz = {
    data: [],
    dataId: {},
    dataEmail: false,
  };

  const [state, dispatch] = useReducer(HomeworkReducer, taskInitialState);

  const dataUserEmail = async (props: any) => {
    try {
      const res = await clienteAxios("/user");

      const filterState = res.data.filter((f: any) => f.email === props);

      if (filterState.length === 0) {
        const values = true;
        dispatch({ type: "GET_EMAIL", payload: values });
      } else {
        const values = false;
        dispatch({ type: "GET_EMAIL", payload: values });
      }

console.log(state.dataEmail)
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <HomeworkContext.Provider
      value={{
        data: state.data,
        dataEmail: state.dataEmail,
        dataUserEmail,
      }}
    >
      {children}
    </HomeworkContext.Provider>
  );
};

export default UseState;
