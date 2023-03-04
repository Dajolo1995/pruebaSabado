import { FC, useReducer } from "react";
import { HomeworkContext } from "./userContext";
import { HomeworkReducer } from "./userReducer";
import { Homework } from "../interface/index";
import clienteAxios from "../config/clienteAxios";

import Swal from "sweetalert2";

export interface taskStateInterfaz {
  data: any;
  dataId: any;
  dataEmail: boolean;
  dataLogin: any;
}

interface propsChildren {
  children: JSX.Element | JSX.Element[];
}

const UseState: FC<propsChildren> = ({ children }) => {
  const taskInitialState: taskStateInterfaz = {
    data: [],
    dataId: [],
    dataEmail: false,
    dataLogin: [],
  };

  const [state, dispatch] = useReducer(HomeworkReducer, taskInitialState);

  const dataUser = async () => {
    try {
      const res = await clienteAxios("/user");

      console.log(res.data)

      dispatch({ type: "GET_TASKS", payload: res.data });


    } catch (error) {
      console.log(error);
    }
  };

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
    } catch (error) {
      console.log(error);
    }
  };

  const dataUserAuth = async (props: any) => {
    try {
      console.log(props);

      const res = await clienteAxios.get("/user");

      const filterState = res.data.filter(
        (f: any) => f.email === props.email && f.password === props.password
      );

      if (filterState.length === 1) {
        dispatch({ type: "GET_EMAIL_USER", payload: filterState });
      } else {
        dispatch({ type: "GET_EMAIL_USER", payload: [] });
      }
    } catch (error) {
      console.log(error);
    }
  };


  

  return (
    <HomeworkContext.Provider
      value={{
        data: state.data,
        dataEmail: state.dataEmail,
        dataLogin: state.dataLogin,
        dataId:state.dataId,
        dataUserEmail,
        dataUserAuth,
        dataUser,
      }}
    >
      {children}
    </HomeworkContext.Provider>
  );
};

export default UseState;
