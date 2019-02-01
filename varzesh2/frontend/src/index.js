import React from 'react';
import ReactDOM from 'react-dom';
import './style/css/bootstrap.min.css';
import './style/css/style.css';
import 'jquery';
import 'bootstrap/dist/js/bootstrap';
import Home from "./Home";
import NavigationBar from "./NavigationBar";
import League from "./League";
import Team from "./Team";
import Player from "./Player";
import Game from "./Game";
import NewsPage from "./News";
import LoginPage from "./Login"
import {
    Route,
    HashRouter
} from "react-router-dom";
import {CookieUtil} from "./Utilities/CookieUtil";


class Page extends React.Component {
    constructor(props) {
        super(props);
        let loggedIn;
        loggedIn = !!CookieUtil.getCookie('logintoken');
        this.state = {
            loggedIn: loggedIn
        };
    }

    render() {
        return (
            <HashRouter>
                <div>
                    <NavigationBar loggedIn={this.state.loggedIn}/>
                    <div>
                        <Route loggedIn={this.state.loggedIn} exact path="/" component={Home}/>
                        <Route loggedIn={this.state.loggedIn} path="/news" component={NewsPage}/>
                        <Route loggedIn={this.state.loggedIn} path="/league" component={League}/>
                        <Route loggedIn={this.state.loggedIn} path="/team" component={Team}/>
                        <Route loggedIn={this.state.loggedIn} path="/player" component={Player}/>
                        <Route loggedIn={this.state.loggedIn} path="/game" component={Game}/>
                        <Route loggedIn={this.state.loggedIn} path="/login" component={LoginPage}/>
                    </div>
                </div>
            </HashRouter>
        );
    }
}
// ========================================

ReactDOM.render(
    <Page />,
    document.getElementById('app')
);
