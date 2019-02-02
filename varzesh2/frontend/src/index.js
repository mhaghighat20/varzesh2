import React from 'react';
import ReactDOM from 'react-dom';
import './style/css/bootstrap.min.css';
import './style/css/style.css';
import './style/css/switch.css'
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
import {FetchUtil} from "./Utilities/FetchUtil";
import SignupPage from "./Signup";


class Page extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            loggedIn: false
        };
        let loginToken = CookieUtil.getCookie('logintoken');
        if (loginToken){
            const url = `/api/accounts/is_logged_in/${loginToken}/`;
            FetchUtil.fetchFromUrl(url)
                .then(response => {
                    if (response['loggedIn'] === true)
                        this.setState({
                            loggedIn: true
                        });
                });
        }
    }

    render() {
        return (
            <HashRouter>
                <div>
                    <NavigationBar loggedIn={this.state.loggedIn}/>
                    <div>
                        <Route exact path="/" render={() => <Home loggedIn={this.state.loggedIn}/>}/>
                        <Route path="/news" render={() => <NewsPage loggedIn={this.state.loggedIn}/>}/>
                        <Route path="/league" render={() => <League loggedIn={this.state.loggedIn}/>}/>
                        <Route path="/team" render={() => <Team loggedIn={this.state.loggedIn}/>}/>
                        <Route path="/player" render={() => <Player loggedIn={this.state.loggedIn}/>}/>
                        <Route path="/game" render={() => <Game loggedIn={this.state.loggedIn}/>}/>
                        <Route path="/login" render={() => <LoginPage loggedIn={this.state.loggedIn}/>}/>
                        <Route path="/signup" render={() => <SignupPage loggedIn={this.state.loggedIn}/>}/>
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
