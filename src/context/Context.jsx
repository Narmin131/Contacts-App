import React from 'react'
import { createContext,useReducer } from 'react'
import Reducer from "./Reducer"
//Initial state

const initialState = {
  users:[
    {
      id:"1",
      name:"John",
      number:"01234567"
    },
    {
      id:"2",
      name:"Bob",
      number:"23454312"
    },
    {
      id:'3',
      name:"Alice",
      number:"98424156"
    }
  ]
}

//Create Context
export const GlobalContext = createContext(initialState);

//Provider Component

export const ContextProvider = ({children}) => {

  const [state,dispatch] = useReducer(Reducer,initialState);

  //Actions start

   const addUser = (user) =>{
    dispatch({
      type:"Add_user",
      payload:user
    })
   }

    const removeUser = (id) =>{
      dispatch({
        type:"Remove_user",
        payload:id
      })
    }

    const editUser = (user)=>{
      dispatch({
        type:"Edit_user",
        payload:user
      })
    }
  
    //Actions end

    return(
      <GlobalContext.Provider value={{
        users:state.users,
        addUser,editUser,removeUser
      }}>
        {children}
      </GlobalContext.Provider>
    )
}

  


