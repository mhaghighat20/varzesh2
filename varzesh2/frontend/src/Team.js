import React from "react";
import { GamesFull } from "./SharedComponents/GameResult";
import { NavLink } from "react-router-dom";
import { NewsList } from "./SharedComponents/News";
import {URLUtil} from "./Utilities/URLUtil";
import {TeamUtil} from "./Utilities/TeamUtil";
import Star from "./SharedComponents/Star";

export default class Team extends React.Component {
    handleFavorite = () => {
        TeamUtil.toggleFavorite(this.id).catch(err => console.log(err));
        this.setState({
                    name: this.state.name,
                    photoPath: this.state.photoPath,
                    gameIds: this.state.gameIds,
                    members: this.state.members,
                    newsIds: this.state.newsIds,
                    isFavorite: !this.state.isFavorite
                });
    };
    constructor(props) {
        super(props);
        this.id = URLUtil.getParameterByName('id', window.location.href);
        this.loggedIn = props.loggedIn;
        this.state = {
            name: '',
            photoPath: '',
            gameIds: [],
            members: [],
            newsIds: [],
            isFavorite: false
        };
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        const id = URLUtil.getParameterByName('id', window.location.href);
        if (id !== this.id)
            window.location.reload();
    }

    sortGames(sortMode){
        TeamUtil.getTeamGames(this.id, sortMode).then(gameIds => {
                this.setState({
                    name: this.state.name,
                    photoPath: this.state.photoPath,
                    gameIds: gameIds,
                    members: this.state.members,
                    newsIds: this.state.newsIds,
                    isFavorite: this.state.isFavorite
                });
            });
    }

    componentDidMount() {
        TeamUtil.getTeamDetails(this.id).then(teamInfo => {
            this.setState({
                name: teamInfo.name,
                photoPath: teamInfo.photoPath,
                gameIds: this.state.gameIds,
                members: teamInfo.members,
                newsIds: teamInfo.newsIds,
                isFavorite: this.state.isFavorite
            });
        });

        this.sortGames(1);

        TeamUtil.getFavoriteState(this.id).then(isFavorite => {
            this.setState({
                name: this.state.name,
                photoPath: this.state.photoPath,
                gameIds: this.state.gameIds,
                members: this.state.members,
                newsIds: this.state.newsIds,
                isFavorite: isFavorite
            });
        });
    }

    render() {
        const dropDown = <div className="dropdown">
            <button className="btn btn-primary dropdown-toggle" type="button" data-toggle="dropdown">  مرتب سازی بر اساس
                <span className="caret"></span></button>
            <ul className="dropdown-menu">
                <li><a href onClick={() => this.sortGames(1)}>تاریخ</a></li>
                <li><a href onClick={() => this.sortGames(2)}>وضعیت</a></li>
                <li><a href onClick={() => this.sortGames(3)}>تیم حریف</a></li>
            </ul>
        </div>;
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
                        <GamesFull dropDown={dropDown} gameIds={this.state.gameIds} showScore showStatus selectedTeamId={this.id} title='بازی ها' />
                        <NewsList star={<Star show={this.props.loggedIn} filled={this.state.isFavorite} onClick={this.handleFavorite}/>} newsIds={this.state.newsIds} title="اخبار" />
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