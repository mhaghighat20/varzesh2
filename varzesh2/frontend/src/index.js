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


class Page extends React.Component {
    render() {
        return (
            <HashRouter>
                <div>
                    <NavigationBar/>
                    <div>
                        <Route exact path="/" component={Home}/>
                        <Route path="/news" component={NewsPage}/>
                        <Route path="/league" component={League}/>
                        <Route path="/team" component={Team}/>
                        <Route path="/player" component={Player}/>
                        <Route path="/game" component={Game}/>
                        <Route path="/login" component={LoginPage}/>
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
