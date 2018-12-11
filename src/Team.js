import React from "react";
import { GameResult, GamesFull } from "./SharedComponents/GameResult";
import {SportTypeEnum} from "./SharedComponents/SportType";
import {PlayerUtil} from "./Utilities/PlayerUtil";
import {NavLink} from "react-router-dom";

export default class Team extends React.Component {
    render() {
        let games = [];
        games.push(<GameResult leftTeam='پرسپولیس' rightTeam='ذوب آهن' leftGoals='1' rightGoals='0' date='1397/07/13' />);
        games.push(<GameResult leftTeam='ماشین سازی تبریز' rightTeam='پرسپولیس' leftGoals='0' rightGoals='1' date='1397/07/08' />);
        games.push(<GameResult leftTeam='پرسپولیس' rightTeam='ذوب آهن' leftGoals='1' rightGoals='0' date='1397/07/97' />);

        let gamesFull = <GamesFull Games={games} />;
        let members = ['1', '2', '3', '4'];

        return (
            <div className="container container-fluid">
                {gamesFull}

                <div className="panel panel-primary">
                    <div className="panel-heading">اعضای تیم</div>
                    <div className="panel-body">
                        <PlayerList playerIds = {members}/>
                    </div>
                </div>

            </div>
        );
    }
}

class PlayerList extends React.Component{
    render() {
        let players = [];
        for (let i = 0; i < this.props.playerIds.length; i++) {
            let playerDetails = PlayerUtil.getPlayerDetails(SportTypeEnum.soccer, this.props.playerIds[i]);
            players.push(<p className="my-paragraph"><NavLink to={'/player?id=' + this.props.playerIds[i]} >{playerDetails.name}</NavLink></p>);
        }
        return (
            <div>
                {players}
            </div>
        );
    }
}