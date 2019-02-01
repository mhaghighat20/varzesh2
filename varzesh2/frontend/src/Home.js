import React from "react";
import {NewsList} from "./SharedComponents/News";
import {SportTypeEnum} from "./SharedComponents/SportType";
import {GameStatusEnum, HomeUtil} from "./Utilities/HomeUtil";
import {GamesFull} from "./SharedComponents/GameResult";

export default class Home extends React.Component{
    render() {
        return (
            <main className="container container-fluid">
                <SportNavTab/>
            </main>
        );
    }
}

class SportTab extends React.Component{
    render() {
        if (this.props.isActive === true){
            return (
                <li onClick={this.props.onClick}>
                    <a className="tab tab-active">{this.props.title}</a>
                </li>
            );
        }else {
            return(
                <li onClick={this.props.onClick}>
                    <a className="tab">{this.props.title}</a>
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
                <ul className="nav nav-tabs my-nav-bar">
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

        const children = <div className="row">
            <div className="col-sm-6">
                <GameList/>
            </div>
            <div className="col-sm-6">
                <NewsList newsIds = {['1']} title="اخبار"/>
            </div>
        </div>;

        return (
            <div className="tab-pane container container-fluid" style={{display: displayType}}>
                {children}
            </div>
        );
    }
}

class GameList extends React.Component{
    render() {
        let leagues = HomeUtil.getNewGames(this.props.sportType);

        let leagueName = leagues[0].name;
        let weekName = leagues[0].weeks[0].name;

        let content = <div>
                    <div className="row">
                        <select>
                            <option value="2">{leagueName}</option>
                        </select>
                    </div>
                    <div className="row">
                        <select>
                            <option value="15">{weekName}</option>
                        </select>
                    </div>
                </div>;
        return (
            <div>
                    <GamesFull title={'مسابقات'} content={content} showScore={false} showStatus={false} gameIds={leagues[0].weeks[0].games}/>
            </div>
        );
    }
}