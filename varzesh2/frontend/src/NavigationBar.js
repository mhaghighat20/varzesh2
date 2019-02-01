import React from "react";
import {
    NavLink
} from "react-router-dom";
import {FetchUtil} from "./Utilities/FetchUtil";
import {CookieUtil} from "./Utilities/CookieUtil";

export default class NavigationBar extends React.Component{
    constructor(props) {
        super(props);
        this.loggedIn = props.loggedIn;
    }

    logout = (() => {
        const loginToken = CookieUtil.getCookie('logintoken');
        if (loginToken) {
            CookieUtil.eraseCookie('logintoken');
            let url = `/api/accounts/logout/${loginToken}/`;
            FetchUtil.fetchFromUrl(url)
                .then(response => {
                    console.log(response);
                    window.location.reload();
                })
                .catch(err => console.log(err));
        } else {
            window.location.reload();
        }
    });

    render() {
        let loginOptions;
        if (this.props.loggedIn){
            loginOptions = <ul className="nav navbar-nav my-navbar-left">
                            <li>
                                <a href={''} onClick={this.logout}>
                                    خروج
                                </a>
                            </li>
                        </ul>;
        } else{
            loginOptions = <ul className="nav navbar-nav my-navbar-left">
                            <li>
                                <NavLink to="/login">
                                    ورود
                                </NavLink>
                            </li>
                        </ul>;
        }
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
                                <NavLink isActive={(_, { pathname }) => pathname.startsWith('/team')} to="/team?id=1">
                                    تیم
                                </NavLink>
                            </li>
                            <li>
                                <NavLink isActive={(_, { pathname }) => pathname.startsWith('/player')} to="/player?id=1">
                                    بازیکن
                                </NavLink>
                            </li>
                            <li><NavLink isActive={(_, { pathname }) => pathname.startsWith('/game')} to="/game?id=1">
                                بازی
                            </NavLink></li>
                        </ul>
                        {loginOptions}
                    </div>
                </div>
            </nav>
        );
    }
}