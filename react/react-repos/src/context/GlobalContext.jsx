import{
  createContext,
  useReducer
}from 'react'
export const GlobalContext=createContext();
import {
  repoReducer
}from '@/reducers/repoReducer'

const initialState={
  repos:[],
  loading:false,
  error:null,
}

export const GlobalProvider=({children})=>{
  const [state,dispatch]=useReducer(repoReducer,initialState)
  return(
    // state 应用状态
    <GlobalContext.Provider value={{state,dispatch}}>
     {children}
    </GlobalContext.Provider>
  )
}