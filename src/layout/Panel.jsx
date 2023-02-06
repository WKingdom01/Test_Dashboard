import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

export const Panel = ({children}) => {
    const { pathname } = useLocation()
    const [ place, setPlace ] = useState("")
    useEffect(()=>{
        if(pathname.includes('dashboard')){
            setPlace("Dashboard")
        }else if(pathname.includes('customize')){
            setPlace("Customize")
        }else if(pathname.includes('account')){
            setPlace("Account")
        }else if(pathname.includes('tools')){
            setPlace("Tools")
        }
    },[pathname])
    console.log('url', pathname);
    return(
        <div>            
            <div className="text-start mb-2">
                <span className="text-gray-400">Panel / </span>
                <span>{place}</span>
            </div>
            {children}
        </div>
    )
}