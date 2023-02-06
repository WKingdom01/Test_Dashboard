import React from "react";
import { Header } from "./Header";
import { Panel } from "./Panel";
import { Menubar } from "./Menubar";
import { Routes, Route, Link, Navigate } from "react-router-dom";
import { Dashboard, Account, Customize, Tools } from "../pages";
const Layout = () => {
    return(
        <div>
            <Header/>
            <div className="flex flex-col md:flex-row gap-2">
                <Menubar/>
                <div className="w-full p-[30px]">
                    <Routes>
                        <Route path="/"  element={<Navigate to="/dashboard"/>}/>
                        <Route path="/dashboard" 
                            element={
                                <Panel>
                                    <Dashboard/>
                                </Panel>
                                
                            }
                        />
                        <Route path="/account" 
                            element={
                                <Panel>
                                    <Account/>
                                </Panel>
                                
                            }
                        />
                        <Route path="/customize" 
                            element={
                                <Panel>
                                    <Customize/>
                                </Panel>
                                
                            }
                        />
                        <Route path="/tools" 
                            element={
                                <Panel>
                                    <Tools/>
                                </Panel>
                                
                            }
                        />
                    </Routes> 
                </div>
                          
            </div>
        </div>
    )
}

export default Layout;