import React, { Component } from "react";
import { Sidebar, Menu, MenuItem, SubMenu } from 'react-pro-sidebar';
import { AiOutlineDashboard as IconDashboard, AiOutlineUser as IconUser} from 'react-icons/ai';
import { BiEdit as IconCustomzie } from 'react-icons/bi';
import { VscTools as IconTool } from 'react-icons/vsc';
import { Link } from "react-router-dom";
export const Menubar = () => {
    return(
        <div>            
            <Sidebar backgroundColor="transparent" rootStyles={{border:'none'}}>
                <Menu rootStyles={{textAlign:"start"}}>
                    <MenuItem component={<Link to="dashboard" />} icon={<IconDashboard/>} label="Dashboard">Dashboard</MenuItem>
                    <SubMenu icon={<IconCustomzie/>} label="Customize">
                        <MenuItem component={<Link to="customize" />}> Color </MenuItem>
                        <MenuItem component={<Link to="customize" />}> Layout </MenuItem>
                    </SubMenu>
                    <SubMenu icon={<IconTool/>} label="Tools">
                        <MenuItem component={<Link to="tools" />}> Bill </MenuItem>
                        <MenuItem component={<Link to="tools" />}> Offer </MenuItem>
                    </SubMenu>
                    <SubMenu icon={<IconUser/>} label="Account">
                        <MenuItem component={<Link to="account" />}> Balance </MenuItem>
                        <MenuItem component={<Link to="account" />}> Products </MenuItem>
                    </SubMenu>
                </Menu>
            </Sidebar>
        </div>
    )
}