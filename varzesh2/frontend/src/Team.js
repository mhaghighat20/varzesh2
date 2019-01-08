import React from "react";
import { GameResult, GamesFull } from "./SharedComponents/GameResult";
import { SportTypeEnum } from "./SharedComponents/SportType";
import { PlayerUtil } from "./Utilities/PlayerUtil";
import { NavLink } from "react-router-dom";
import { NewsList } from "./SharedComponents/News";

export default class Team extends React.Component {
    render() {
        let games = [];
        games.push(<GameResult leftTeam='پرسپولیس' rightTeam='ذوب آهن' leftGoals='1' rightGoals='0' date='1397/07/13' status='برد' score='3' />);
        games.push(<GameResult leftTeam='ماشین سازی تبریز' rightTeam='پرسپولیس' leftGoals='0' rightGoals='1' date='1397/07/08' status='برد' score='3' />);
        games.push(<GameResult leftTeam='ذوب آهن' rightTeam='پرسپولیس' leftGoals='1' rightGoals='2' date='1397/07/97' status='برد' score='3' />);

        let members = ['1', '2', '3', '4', '3', '2', '1', '2', '3', '4', '3', '2', '1', '2', '3', '4', '3', '2', '1', '2', '3', '4', '3', '2', '1'];
        return (
            <div className="team-page">
                <div className="main-wrapper" style={{ backgroundImage: "url(/static/frontend/Content/perspolis.jpg)" }}>
                    <div className="transparent-title">
                        <h1>تیم پرسپولیس</h1>
                    </div>
                </div>
                <div className="side-bar panel">
                    <div className="panel-heading">اعضای تیم</div>
                    <div className="">
                        <PlayerList playerIds={members} />
                    </div>
                </div>
                <div className="content-main-wrapper">
                    <GamesFull Games={games} title='بازی ها' />
                    <NewsList newsIds={['1', '1']} title="اخبار" />
                </div>
            </div>
        );
    }
}

class PlayerList extends React.Component {
    render() {
        let players = [];
        for (let i = 0; i < this.props.playerIds.length; i++) {
            let playerDetails = PlayerUtil.getPlayerDetails(SportTypeEnum.soccer, this.props.playerIds[i]);
            players.push(<p className=""><NavLink to={'/player?id=' + this.props.playerIds[i]} >{playerDetails.name}</NavLink><span className="post">({playerDetails.post})</span></p>);
        }
        return (
            <div>
                {players}
            </div>
        );
    }
}