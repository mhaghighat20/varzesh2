import React from "react";
import {
    NavLink
} from "react-router-dom";

export default class NavigationBar extends React.Component{
    render() {
        return (
            <div className=".nav .navbar-nav navbar-default">
                <div className="container-fluid my-nav-bar">
                    <div className="navbar-header">
                        <a href="/">
                            <div className="logo"/>
                        </a>
                    </div>
                    <ul className="nav navbar-nav">
                        <li><NavLink exact to="/" className="navbar-link">خانه</NavLink></li>
                        <li><NavLink isActive={(_, { pathname }) => pathname.startsWith('/news')} to="/news?id=1" className="navbar-link">خبر</NavLink></li>
                        <li><NavLink isActive={(_, { pathname }) => pathname.startsWith('/league')} to="/league" className="navbar-link">لیگ‌</NavLink></li>
                        <li><NavLink isActive={(_, { pathname }) => pathname.startsWith('/team')} to="/team" className="navbar-link">تیم</NavLink></li>
                        <li><NavLink isActive={(_, { pathname }) => pathname.startsWith('/player')} to="/player?id=1" className="navbar-link">بازیکن</NavLink></li>
                        <li><NavLink isActive={(_, { pathname }) => pathname.startsWith('/game')} to="/game" className="navbar-link">بازی</NavLink></li>
                    </ul>
                </div>
            </div>
        );
    }
}