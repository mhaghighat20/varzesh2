import React from "react";
import {News} from "./News";

const SportTypeEnum = {"basketball": 1, "soccer": 2};

export default class Home extends React.Component{
    render() {
        return (
            <main>
                <SportNavTab/>
            </main>
        );
    }
}

class SportTab extends React.Component{
    render() {
        if (this.props.isActive === true){
            return (
                <li>
                    <div className="active" onClick={this.props.onClick}>{this.props.title}</div>
                </li>
            );
        }else {
            return(
                <li>
                    <div onClick={this.props.onClick}>{this.props.title}</div>
                </li>
            )
        }
    }
}

class SportNavTab extends React.Component{
    constructor(props) {
        super(props);
        this.state = {sportType: SportTypeEnum.soccer};
    }

    switchSportType = (sportType) => {
        let state = Object.assign({}, this.state);
        state.sportType = sportType;
        this.setState(state);
    };
    render() {
        const basketballIsActive = this.state.sportType === SportTypeEnum.basketball;
        const soccerIsActive = this.state.sportType === SportTypeEnum.soccer;
        let basketballTab = <SportTab isActive = {basketballIsActive} title="بسکتبال" onClick={() => this.switchSportType(SportTypeEnum.basketball)}/>;
        let soccerTab = <SportTab isActive = {soccerIsActive} title="فوتبال" onClick={() => this.switchSportType(SportTypeEnum.soccer)}/>;

        const basketballChildren = <div>
            <div className="left-side-bar">
                <Standings/>
                This is basketball!!!
            </div>
            <div className="middle-panel">
                <News/>
            </div>
        </div>;

        const soccerChildren = <div>
            <div className="left-side-bar">
                <Standings/>
                This is soccer!!!
            </div>
            <div className="middle-panel">
                <News/>
            </div>
        </div>;

        return (
            <div className="tab-content">
                <ul className="nav nav-tabs">
                    {soccerTab}
                    {basketballTab}
                </ul>
                <TabPane children = {soccerChildren} isActive = {soccerIsActive}/>
                <TabPane children = {basketballChildren} isActive = {basketballIsActive}/>
            </div>
        );
    }
}

export class Standings extends React.Component{
    render() {
        return (
            <aside className="panel panel-primary">
                <div className="panel-heading">Standings</div>
                Testing standing
                it's amazing
            </aside>
        );
    }
}

class TabPane extends React.Component{
    render() {
        const displayType = this.props.isActive ? 'block' : 'none';
        return (
            <div className="tab-pane container container-fluid" style={{display: displayType}}>
                {this.props.children}
            </div>
        );
    }
}