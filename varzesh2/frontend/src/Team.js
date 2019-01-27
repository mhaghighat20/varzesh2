import React from "react";
import { GameResult, GamesFull } from "./SharedComponents/GameResult";
import { SportTypeEnum } from "./SharedComponents/SportType";
import { PlayerUtil } from "./Utilities/PlayerUtil";
import { NavLink } from "react-router-dom";
import { NewsList } from "./SharedComponents/News";
import {URLUtil} from "./Utilities/URLUtil";

export default class Team extends React.Component {
    id;

    constructor(props) {
        super(props);
        this.id = URLUtil.getParameterByName('id', window.location.href);
        this.state = {
            team: {
                name: 'سپاهان',
                photoPath: '',
                gameIds: ['1'],
                memberIds: ['1', '2', '3', '4']
            }
        };
    }

    componentDidMount() {
    }

    render() {
        return (
            <div>
                <div className="container-fluid">
                    <div className="parallax-team-photo" style={{ backgroundImage: `url(${this.state.team.photoPath})` }}>
                            <div className="transparent-title">
                                <h1>{this.state.team.name}</h1>
                            </div>
                    </div>
                </div>
                <div className="container container-fluid">
                <div className="row">
                    <div className="col-sm-9">
                        <GamesFull gamesId={this.state.team.gameIds} showScore showStatus selectedTeamId={this.id} title='بازی ها' />
                        <NewsList newsIds={['1', '1']} title="اخبار" />
                    </div>
                    <div className="col-sm-3">
                        <div className="panel">
                            <div className="panel-heading my-panel-heading">
                                اعضای تیم
                            </div>
                            <div className="panel-body">
                                <PlayerList playerIds={this.state.team.memberIds} />
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
    constructor(props) {
        super(props);
        this.playerIds = props.playerIds;
        this.state = {
          players: <div/>
        };
    }

    componentDidMount() {
        let players = [];
        for (let i = 0; i < this.props.playerIds.length; i++) {
            PlayerUtil.getPlayerDetails(this.props.playerIds[i]).then(playerDetails => {
                players.push(
                    <div className="row" key={i}>
                        <div className="col-sm-5">
                            <span className="post pull-left">
                                ({playerDetails.post})
                            </span>
                        </div>
                        <div className="col-sm-7">
                            <NavLink className="pull-right" to={'/player?id=' + this.props.playerIds[i]} >
                                {playerDetails.firstName + ' ' + playerDetails.lastName}
                            </NavLink>
                        </div>
                    </div>
                );
                this.setState({
                   players: players
                });
            });
        }
    }

    render() {
        return (
            <div>
                {this.state.players}
            </div>
        );
    }
}