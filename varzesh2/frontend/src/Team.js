import React from "react";
import { GamesFull } from "./SharedComponents/GameResult";
import { NavLink } from "react-router-dom";
import { NewsList } from "./SharedComponents/News";
import {URLUtil} from "./Utilities/URLUtil";
import {TeamUtil} from "./Utilities/TeamUtil";

export default class Team extends React.Component {
    id;

    constructor(props) {
        super(props);
        this.id = URLUtil.getParameterByName('id', window.location.href);
        this.state = {
            name: '',
            photoPath: '',
            gameIds: [],
            members: [],
            newsIds: []
        };
    }

    componentDidMount() {
        TeamUtil.getTeamDetails(this.id).then(teamInfo => {
            this.setState({
                name: teamInfo.name,
                photoPath: teamInfo.photoPath,
                gameIds: teamInfo.gameIds,
                members: teamInfo.members,
                newsIds: teamInfo.newsIds
            })
        });
    }

    render() {
        return (
            <div>
                <div className="container-fluid">
                    <div className="parallax-team-photo" style={{ backgroundImage: `url(${this.state.photoPath})` }}>
                            <div className="transparent-title">
                                <h1>{this.state.name}</h1>
                            </div>
                    </div>
                </div>
                <div className="container container-fluid">
                <div className="row">
                    <div className="col-sm-9">
                        <GamesFull gamesId={this.state.gameIds} showScore showStatus selectedTeamId={this.id} title='بازی ها' />
                        <NewsList newsIds={this.state.newsIds} title="اخبار" />
                    </div>
                    <div className="col-sm-3">
                        <div className="panel">
                            <div className="panel-heading my-panel-heading">
                                اعضای تیم
                            </div>
                            <div className="panel-body">
                                <MembersList members={this.state.members} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        );
    }
}

class MembersList extends React.Component {
    constructor(props) {
        super(props);
        this.members = props.members;
    }

    render() {
        let members = [];
        for (let i = 0; i < this.props.members.length; i++) {
            const member = this.props.members[i];
            if (member.playerId) {
                members.push(
                    <div className="row" key={i}>
                        <div className="col-sm-5">
                            <span className="post pull-left">
                                ({member.position})
                            </span>
                        </div>
                        <div className="col-sm-7">
                            <NavLink className="pull-right" to={'/player?id=' + member.playerId}>
                                {member.firstName + ' ' + member.lastName}
                            </NavLink>
                        </div>
                    </div>
                );
            } else {
                members.push(
                    <div className="row" key={i}>
                        <div className="col-sm-5">
                            <span className="post pull-left">
                                ({member.position})
                            </span>
                        </div>
                        <div className="col-sm-7">
                            <p className="pull-right">
                                {member.firstName + ' ' + member.lastName}
                            </p>
                        </div>
                    </div>
                );
            }
        }
        return (
            <div>
                {members}
            </div>
        );
    }
}