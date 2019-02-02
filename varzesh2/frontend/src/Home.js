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
        this.state = {
            sportType: SportTypeEnum.soccer
        };
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
            <div className="tab-content container container-fluid">
                <div className="row">
                    <div className="col-xs-4">
                            <label className="switch pull-left">
                                <input type="checkbox"/>
                                <span className="slider round"/>
                            </label>
                    </div>
                    <ul className="nav nav-tabs my-nav-bar col-xs-8">
                        {soccerTab}
                        {basketballTab}
                    </ul>
                </div>
                <div className="row">
                    <TabPane sportType = {SportTypeEnum.soccer} isActive = {soccerIsActive}/>
                    <TabPane sportType = {SportTypeEnum.basketball} isActive = {basketballIsActive}/>
                </div>
            </div>
        );
    }
}

class TabPane extends React.Component{
    constructor(props) {
        super(props);
        this.sportType = props.sportType;
        this.state = {
            from: 0,
            size: 10,
            newsIds: []
        };
    }

    componentDidMount() {
        HomeUtil.getLatestNews(this.state.from, this.state.size, this.props.sportType === SportTypeEnum.basketball, false).then(newsIds => {
            let news = this.state.newsIds.concat(newsIds);
            this.setState({
                newsIds: news,
                from: this.state.from,
                size: this.state.size
            });
        });
    }


    render() {
        const displayType = this.props.isActive ? 'block' : 'none';

        const children = <div className="row">
            <div className="col-sm-6">
                <GameList isFavorite={this.props.isFavorite}/>
            </div>
            <div className="col-sm-6">
                <NewsList newsIds = {this.state.newsIds} title="اخبار"/>
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
    constructor(props) {
        super(props);
        this.sportType = props.sportType;
        this.isFavorite = props.isFavorite;
        this.leagueSelect = React.createRef();
        this.weekSelect = React.createRef();
        this.state = {
            games: {},
            gameIds: [],
            content: <div/>
        };
    }

    componentDidMount() {
        HomeUtil.getNewGames(this.props.sportType, this.props.isFavorite).then(result => {
            let leagueOptions = [];
            let weekOptions = [];
            Object.keys(result).forEach((leagueName) => {
                leagueOptions.push(<option value={leagueName}>{leagueName}</option>);
                Object.keys(result[leagueName]).forEach((weekName) => {
                    weekOptions.push(<option value={weekName}>{weekName}</option>);
                });
        });
        let content = <div>
                    <div className="row">
                        <select ref={this.leagueSelect} onChange={this.handleChange}>
                            {leagueOptions}
                        </select>
                    </div>
                    <div className="row">
                        <select ref={this.weekSelect} onChange={this.handleChange}>
                            {weekOptions}
                        </select>
                    </div>
                </div>;
            this.setState({
                games: result,
                gameIds: this.state.gameIds,
                content: content
            });
            this.handleChange();
        });
    }

    handleChange = () => {
            if (this.leagueSelect.current
                && this.leagueSelect.current.value in this.state.games
                && this.weekSelect.current
                && this.weekSelect.current.value in this.state.games[this.leagueSelect.current.value]) {
                this.setState({
                    games: this.state.games,
                    gameIds: this.state.games[this.leagueSelect.current.value][this.weekSelect.current.value],
                    content: this.state.content
                });
            }
    };

    render() {
        return (
            <div>
                    <GamesFull title={'مسابقات'} content={this.state.content} showScore={false} showStatus={false} gameIds={this.state.gameIds}/>
            </div>
        );
    }
}