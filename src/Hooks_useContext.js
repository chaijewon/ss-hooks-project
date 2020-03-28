import React,{createContext,useContext} from "react";
/*
     **useState
     **useEffect
     useContext : 테마 ,CSS
     **useMemo
     **useCallback
     *useRef
     **useReducer
     **사용자 정의
 */
const Hooks_useContext=()=>{
    return (
        <MyContext />
    )
}

const MyContext=()=>{
    const ThemeContext=createContext('red')
    const tm=useContext(ThemeContext)
    const style={
        width:'24px',
        height:'24px',
        background:tm
    }
    return <div style={style}/>
}

export default Hooks_useContext;
