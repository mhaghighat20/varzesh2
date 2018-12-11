import React from "react";
import {NewsList} from "./SharedComponents/News";
import {SportTypeEnum} from "./SharedComponents/SportType";
import {Standings} from "./SharedComponents/Standings";

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

        return (
            <div className="tab-content">
                <ul className="nav nav-tabs">
                    {soccerTab}
                    {basketballTab}
                </ul>
                <TabPane sportType = {SportTypeEnum.soccer} isActive = {soccerIsActive}/>
                <TabPane sportType = {SportTypeEnum.basketball} isActive = {basketballIsActive}/>
            </div>
        );
    }
}

class TabPane extends React.Component{
    render() {
        const displayType = this.props.isActive ? 'block' : 'none';

        const children = <div>
            <div className="left-side-bar">
                <Standings sportType = {this.props.sportType}/>
            </div>
            <div className="middle-panel">
                <NewsList newsIds = {['1']}/>
            </div>
        </div>;

        return (
            <div className="tab-pane container container-fluid" style={{display: displayType}}>
                {children}
            </div>
        );
    }
}