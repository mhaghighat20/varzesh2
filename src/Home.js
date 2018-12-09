import React from "react";
import {News} from "./News";

export default class Home extends React.Component{
    render() {
        return (
            <main className="container container-fluid" style={{marginTop: '20px'}}>
                <div className="container container-fluid">
                    <News/>
                </div>
            </main>
        );
    }
}