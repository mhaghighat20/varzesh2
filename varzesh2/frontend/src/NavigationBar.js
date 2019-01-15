import React from "react";
import {
    NavLink
} from "react-router-dom";

export default class NavigationBar extends React.Component{
    render() {
        return (
            <nav className="navbar navbar-default my-navbar">
                <div className="container-fluid">
                    <div className="navbar-header pull-right">
                        <a href="/">
                            <div className="navbar-brand" className="logo"/>
                        </a>
                    </div>
                    <button type="button" className="navbar-toggle pull-left" data-toggle="collapse"
                            data-target="#myNavbar">
                        <span className="icon-bar"/>
                        <span className="icon-bar"/>
                        <span className="icon-bar"/>
                    </button>
                    <div className="collapse navbar-collapse" id="myNavbar">
                        <ul className="nav navbar-nav my-navbar-right">
                            <li>
                                <NavLink exact to="/">
                                    خانه
                                </NavLink>
                            </li>
                            <li>
                                <NavLink isActive={(_, { pathname }) => pathname.startsWith('/news')} to="/news?id=1">
                                    خبر
                                </NavLink>
                            </li>
                            <li>
                                <NavLink isActive={(_, { pathname }) => pathname.startsWith('/league')} to="/league">
                                    لیگ‌
                                </NavLink>
                            </li>
                            <li>
                                <NavLink isActive={(_, { pathname }) => pathname.startsWith('/team')} to="/team">
                                    تیم
                                </NavLink>
                            </li>
                            <li>
                                <NavLink isActive={(_, { pathname }) => pathname.startsWith('/player')} to="/player?id=1">
                                    بازیکن
                                </NavLink>
                            </li>
                            <li><NavLink isActive={(_, { pathname }) => pathname.startsWith('/game')} to="/game">
                                بازی
                            </NavLink></li>
                        </ul>
                    </div>
                </div>
            </nav>
        );
    }
}