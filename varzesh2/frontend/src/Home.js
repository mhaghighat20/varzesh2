import React from "react";
import {NewsList} from "./SharedComponents/News";
import {SportTypeEnum} from "./SharedComponents/SportType";
import {GameStatusEnum, HomeUtil} from "./Utilities/HomeUtil";

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

        const children = <div>
            <div className="col-sm-6">
                <GameList sportType = {this.props.sportType}/>
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

        return (
            <div className="panel container-fluid" style={{alignItems: "center"}}>
                <div className="panel-heading">مسابقات</div>
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
                <div className="row">
                    <WeekList week={leagues[0].weeks[0]}/>
                </div>
            </div>
        );
    }
}

class WeekList extends React.Component{
    render() {
        let games = [];
        for (let i = 0; i < this.props.week.games.length; i++){
            games.push(<GameItem game={this.props.week.games[i]} key={i}/>);
        }
        return (
            <div>
                {games}
            </div>
        );
    }
}

class GameItem extends React.Component{
    render() {
        const game = this.props.game;
        let gameItem;
        if (game.status !== GameStatusEnum.notDoneYet){
            gameItem =
                <div className="row">
                    <div className="col-sm-3">
                        {game.homeTeam}
                    </div>
                    <div className="col-sm-1">
                        {game.homeGoals}
                    </div>
                    <div className="col-sm-1">
                        {game.awayGoals}
                    </div>
                    <div className="col-sm-3">
                        {game.awayTeam}
                    </div>
                    <div className="col-sm-4">
                        {game.date}
                    </div>
                </div>;
        }
        else{
            gameItem =
                <div className="row">
                    <div className="col-sm-3">
                        {game.homeTeam}
                    </div>
                    <div className="col-sm-1">

                    </div>
                    <div className="col-sm-1">

                    </div>
                    <div className="col-sm-3">
                        {game.awayTeam}
                    </div>
                    <div className="col-sm-4">
                        {game.date}
                    </div>
                </div>;
        }

        return (
            <div className="game-item">
                {gameItem}
            </div>
        );
    }
}