import React from "react";
import {TeamLink} from "./TeamLink";
import {GameUtil} from "../Utilities/GameUtil";

export class GameResult extends React.Component {
    constructor(props) {
        super(props);
        this.state = {result: <td/>};
        this.gameId = props.gameId;
        this.showStatus = props.showStatus;
        this.showScore = props.showScore;
        this.selectedTeamId = props.selectedTeamId;
    }

    componentDidMount() {
        GameUtil.getGameDetails(this.props.gameId)
            .then(gameDetails => {
                let result = [];
                result.push(<TeamLink teamId={gameDetails.awayTeamId} key={0}/>);

                result.push(<td key={1}>
                    {gameDetails.awayGoals}
                </td>);

                result.push(<TeamLink teamId={gameDetails.homeTeamId} key={2}/>);

                result.push(<td key={3}>
                    {gameDetails.homeGoals}
                </td>);

                if (this.props.showStatus) {
                    const status = this.calculateStatus(gameDetails);
                    if (gameDetails.hasBeenHeld === true) {
                        result.push(<td key={4}>
                            {status}
                        </td>);
                    }
                }

                if (this.props.showScore) {
                    if (gameDetails.hasBeenHeld === true) {
                        const score = this.calculateScore(gameDetails);
                        result.push(<td key={5}>
                            {score}
                        </td>);
                    }
                }

                result.push(<td key={6}>
                    {gameDetails.date}
                </td>);

                this.setState({
                    result: result
                });
            });
    }

    calculateScore(gameDetails) {
        let score = 0;
        let thisTeamGoals = 0;
        let thatTeamGoals = 0;

        if (this.selectedTeamId === gameDetails.homeTeamId) {
            thisTeamGoals = gameDetails.homeGoals;
            thatTeamGoals = gameDetails.awayGoals;
        } else if (this.selectedTeamId === gameDetails.awayTeamId) {
            thisTeamGoals = gameDetails.awayGoals;
            thatTeamGoals = gameDetails.homeGoals;
        }

        if (thisTeamGoals > thatTeamGoals) {
            if (!gameDetails.isBasketball) {
                score = 3;
            } else {
                score = 2;
            }
        } else if (thisTeamGoals === thatTeamGoals) {
            score = 1;
        } else {
            if (gameDetails.isBasketball) {
                score = 1;
            }
        }
        return score;
    }

    calculateStatus(gameDetails) {
        let status = '';
        let thisTeamGoals = 0;
        let thatTeamGoals = 0;

        if (!gameDetails.hasBeenHeld)
            status = 'برگزار نشده';
        else {
            if (this.selectedTeamId === gameDetails.homeTeamId) {
                thisTeamGoals = gameDetails.homeGoals;
                thatTeamGoals = gameDetails.awayGoals;
            } else if (this.selectedTeamId === gameDetails.awayTeamId) {
                thisTeamGoals = gameDetails.awayGoals;
                thatTeamGoals = gameDetails.homeGoals;
            }

            if (thisTeamGoals > thatTeamGoals) {
                status = 'برد';
            } else if (thisTeamGoals === thatTeamGoals) {
                status = 'تساوی';
            } else {
                status = 'باخت';
            }
        }

        return status;
    }

    render() {
        return (
            <tr>{this.state.result}</tr>
        );
    }
}

export class GamesFull extends React.Component {
    constructor(props) {
        super(props);
        this.gameIds = props.gameIds;
        this.title = props.title;
        this.showScore = props.showScore;
        this.showStatus = props.showStatus;
        this.selectedTeamId = props.selectedTeamId;
    }

    render() {
        let headers = [];

        headers.push(<th key={0}>
            تیم رفت
        </th>);
        headers.push(<th key={1}>
            تعداد گل
        </th>);
        headers.push(<th key={2}>
            تیم برگشت
        </th>);
        headers.push(<th key={3}>
            تعداد گل
        </th>);

        if (this.props.showStatus) {
            headers.push(
                <th key={4}>
                وضعیت
                </th>);
        }

        if (this.props.showScore) {
                headers.push(
                    <th key={5}>
                        امتیاز
                    </th>);
        }

        headers.push(<th key={6}>
            تاریخ
        </th>);

        let games = [];

        for (let i = 0; i < this.props.gameIds; i++){
            games.push(<GameResult gameId={this.props.gameIds[i]} teamId={this.props.gameIds[i]} showScore={this.props.showScore} showStatus={this.props.showStatus} selectedTeamId={this.props.selectedTeamId} key={i}/>);
        }

        return (
            <div className="panel">
                <div className="panel-heading center my-panel-heading">{this.props.title}</div>
                <table className="table table-striped table-responsive table-hover my-table">
                    <thead>
                        <tr>
                            {headers}
                        </tr>
                    </thead>
                    <tbody>
                        {games}
                    </tbody>
                </table>
            </div>
        );
    }
}