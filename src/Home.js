import React from "react";
import {News} from "./News";
import {LeftAsideBar} from "./NavigationBar"

export default class Home extends React.Component{
    render() {
        return (
            <main className="container container-fluid" style={{marginTop: '20px'}}>
                <div className="left-side-bar">
                    <LeftAsideBar/>
                </div>
                <div className="middle-panel">
                    <News/>
                </div>
            </main>
        );
    }
}