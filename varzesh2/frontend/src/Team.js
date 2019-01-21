import React from "react";
import { GameResult, GamesFull } from "./SharedComponents/GameResult";
import { SportTypeEnum } from "./SharedComponents/SportType";
import { PlayerUtil } from "./Utilities/PlayerUtil";
import { NavLink } from "react-router-dom";
import { NewsList } from "./SharedComponents/News";

export default class Team extends React.Component {
    render() {
        let games = [];
        games.push(<GameResult leftTeam='پرسپولیس' rightTeam='ذوب آهن' leftGoals='1' rightGoals='0' date='1397/07/13' status='برد' score='3' key={0}/>);
        games.push(<GameResult leftTeam='ماشین سازی تبریز' rightTeam='پرسپولیس' leftGoals='0' rightGoals='1' date='1397/07/08' status='برد' score='3' key={1}/>);
        games.push(<GameResult leftTeam='ذوب آهن' rightTeam='پرسپولیس' leftGoals='1' rightGoals='2' date='1397/07/97' status='برد' score='3' key={2}/>);

        let members = ['1', '2', '3', '4', '3', '2', '1', '2', '3', '4', '3', '2', '1', '2', '3', '4', '3', '2', '1', '2', '3', '4', '3', '2', '1'];
        return (
            <div>
                <div className="container-fluid">
                    <div className="parallax-team-photo" style={{ backgroundImage: "url(/static/frontend/Content/perspolis.jpg)" }}>
                            <div className="transparent-title">
                            <h1>تیم پرسپولیس</h1>
                            </div>
                    </div>
                </div>
                <div className="container container-fluid">
                <div className="row">
                    <div className="col-sm-9">
                        <GamesFull Games={games} title='بازی ها' />
                        <NewsList newsIds={['1', '1']} title="اخبار" />
                    </div>
                    <div className="col-sm-3">
                        <div className="panel">
                            <div className="panel-heading my-panel-heading">
                                اعضای تیم
                            </div>
                            <div className="panel-body">
                                <PlayerList playerIds={members} />
                            </div>
                        </div>
                    </div>
                </div>
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
            players.push(
                <div className="row" key={i}>
                    <div className="col-sm-5">
                        <span className="post pull-left">
                            ({playerDetails.post})
                        </span>
                    </div>
                    <div className="col-sm-7">
                        <NavLink className="pull-right" to={'/player?id=' + this.props.playerIds[i]} >
                            {playerDetails.name}
                        </NavLink>
                    </div>
                </div>
            );
        }
        return (
            <div>
                {players}
            </div>
        );
    }
}