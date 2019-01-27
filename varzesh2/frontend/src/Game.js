import React from "react";
import { GameResult, GamesFull } from "./SharedComponents/GameResult";
import { EventItem, EventsFull, GameStatisticItem, GameStatistics } from "./GameComponents/Events";
import { NewsList } from "./SharedComponents/News";
import {VideoList} from "./GameComponents/VideoList";
import {GameUtil} from "./Utilities/GameUtil";
import {URLUtil} from "./Utilities/URLUtil";
import {PlayerName} from "./PlayerComponents/PlayerName";

export default class Game extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            eventsFull: <div/>,
            stats: <div/>,
            awayPlayers: [],
            homePlayers: [],
            gamesFull: <div/>,
            relatedNewsIds: [],
            relatedMediaIds: []
        };
    }

    componentDidMount() {
        const gameId = URLUtil.getParameterByName('id', window.location.href);
        GameUtil.getGameDetails(gameId)
            .then(gameDetails => {
                this.loadAgainstGames(gameDetails.homeTeamId, gameDetails.awayTeamId);
                this.loadStatistics(gameId, gameDetails.isBasketball);
                this.loadEvents(gameId, gameDetails.homeTeamId, gameDetails.awayTeamId);
            });

        this.loadPlayers(gameId);
        this.loadRelatedNews(gameId);
        this.loadRelatedMedia(gameId);
    }

    render() {
        return (
            <div className="container container-fluid">
                {this.state.eventsFull}
                <div className="panel">
                    <div className="panel-heading my-panel-heading">
                        آمار
                    </div>
                    <GameStatistics items={this.state.stats} tableClassName="table table-stripped table-hover table-responsive my-table"/>
                </div>
                <div className="panel">
                    <div className="panel-heading my-panel-heading">
                        بازیکنان
                    </div>
                    <div className="panel-body">
                        <table className="event">
                            <tbody>
                                <tr>
                                    <td>
                                        <div>
                                            {this.state.homePlayers}
                                        </div>
                                    </td>
                                    <td/>
                                    <td>
                                        <div>
                                            {this.state.awayPlayers}
                                        </div>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
                {this.state.gamesFull}
                <NewsList newsIds={this.state.relatedNewsIds} title="اخبار" />
                <VideoList videoIds={this.state.relatedMediaIds} title="ویدیو های بازی" />
            </div>
        );

    }

    loadAgainstGames(firstTeamId, secondTeamId) {
        GameUtil.getAgainstGamesIdsByTeamIds(firstTeamId, secondTeamId)
            .then(gameIds => {
                let gamesFull = <GamesFull gamesId={gameIds} title='بازی های رو در رو' />;
                this.setState({
                    gamesFull: gamesFull,
                    eventsFull: this.state.eventsFull,
                    stats: this.state.stats,
                    awayPlayers: this.state.awayPlayers,
                    homePlayers: this.state.homePlayers,
                    relatedNewsIds: this.state.relatedNewsIds,
                    relatedMediaIds: this.state.relatedMediaIds
                })
            });
    }

    loadStatistics(gameId, isBasketball) {
        GameUtil.getGameStatistics(gameId)
            .then(statistics => {
                let stats = [];

                if (isBasketball) {
                    stats.push(<GameStatisticItem leftString={statistics['goals']['away']} middleString="تعداد گل"
                                                  rightString={statistics['goals']['home']} key={1}/>);
                    stats.push(<GameStatisticItem leftString={statistics['ballPossession']['away']}
                                                  middleString="درصد مالکیت توپ"
                                                  rightString={statistics['ballPossession']['home']} key={2}/>);
                    stats.push(<GameStatisticItem leftString={statistics['corners']['away']} middleString="کرنر"
                                                  rightString={statistics['corners']['home']} key={3}/>);
                    stats.push(<GameStatisticItem leftString={statistics['fouls']['away']} middleString="خطا"
                                                  rightString={statistics['fouls']['home']} key={4}/>);
                    stats.push(<GameStatisticItem leftString={statistics['goalOpportunities']['away']}
                                                  middleString="موقعیت گل"
                                                  rightString={statistics['goalOpportunities']['home']} key={5}/>);
                    stats.push(<GameStatisticItem leftString={statistics['yellowCards']['away']} middleString="کارت زرد"
                                                  rightString={statistics['yellowCards']['home']} key={6}/>);
                    stats.push(<GameStatisticItem leftString={statistics['redCards']['away']} middleString="کارت قرمز"
                                                  rightString={statistics['redCards']['home']} key={7}/>);
                    stats.push(<GameStatisticItem leftString={statistics['bestPlayer']['away']}
                                                  middleString="بهترین بازیکن زمین"
                                                  rightString={statistics['corners']['away']} key={8}/>);
                } else {
                    // TODO implement basketball
                }
                this.setState({
                    stats: stats,
                    gamesFull: this.state.gamesFull,
                    eventsFull: this.state.eventsFull,
                    awayPlayers: this.state.awayPlayers,
                    homePlayers: this.state.homePlayers,
                    relatedNewsIds: this.state.relatedNewsIds,
                    relatedMediaIds: this.state.relatedMediaIds
                });
            });
    }

    loadEvents(gameId, homeTeamId, awayTeamId) {
        GameUtil.getGameEvents(gameId)
            .then(events => {
                let eventItems = [];
                for (let i = 0; i < events.length; i++) {
                    eventItems.push(<EventItem leftOrRight={events[i].leftOrRight} player={events[i].player} act={events[i].act} minute={events[i].minute} key={i}/>);
                }
                let eventsFull = <EventsFull eventItems={this.state.events} leftTeamId={awayTeamId} rightTeamId={homeTeamId}/>;
                this.setState({
                    eventsFull: eventsFull,
                    gamesFull: this.state.gamesFull,
                    stats: this.state.stats,
                    awayPlayers: this.state.awayPlayers,
                    homePlayers: this.state.homePlayers,
                    relatedNewsIds: this.state.relatedNewsIds,
                    relatedMediaIds: this.state.relatedMediaIds
                });
            });
    }

    loadPlayers(gameId) {
        GameUtil.getPlayers(gameId)
            .then(playerIds => {
                let homePlayers = [];
                for (let i = 0; i < playerIds.home.length; i++){
                    homePlayers.push(<PlayerName playerId={playerIds[i]}/>)
                }
                let awayPlayers = [];
                    for (let i = 0; i < playerIds.away.length; i++){
                    awayPlayers.push(<PlayerName playerId={playerIds[i]}/>)
                }
                this.setState({
                    homePlayers: homePlayers,
                    awayPlayers: awayPlayers,
                    gamesFull: this.state.gamesFull,
                    eventsFull: this.state.eventsFull,
                    stats: this.state.stats,
                    relatedNewsIds: this.state.relatedNewsIds,
                    relatedMediaIds: this.state.relatedMediaIds
                });
            });
    }

    loadRelatedNews(gameId) {
        GameUtil.getRelatedNewsIds(gameId)
            .then(relatedNewsIds => {
                this.setState({
                    relatedNewsIds: relatedNewsIds,
                    gamesFull: this.state.gamesFull,
                    eventsFull: this.state.eventsFull,
                    stats: this.state.stats,
                    awayPlayers: this.state.awayPlayers,
                    homePlayers: this.state.homePlayers,
                    relatedMediaIds: this.state.relatedMediaIds
                });
            });
    }

    loadRelatedMedia(gameId) {
        GameUtil.getRelatedMediaIds(gameId)
            .then(relatedMediaIds => {
                this.setState({
                    relatedMediaIds: relatedMediaIds,
                    gamesFull: this.state.gamesFull,
                    eventsFull: this.state.eventsFull,
                    stats: this.state.stats,
                    awayPlayers: this.state.awayPlayers,
                    homePlayers: this.state.homePlayers,
                    relatedNewsIds: this.state.relatedNewsIds,
                });
            });
    }
}