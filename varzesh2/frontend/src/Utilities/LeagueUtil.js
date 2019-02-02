import React from "react";
import { SportTypeEnum } from "../SharedComponents/SportType";
import { GameResult, GamesFull } from "../SharedComponents/GameResult";
import {FetchUtil} from "./FetchUtil";

export class LeagueUtil {
    static getLeagueDetails(id) {
        const url = `/api/league/statistics/${id}/`;
        return FetchUtil.fetchFromUrl(url).then(response => {
            let league = new LeagueInfo();
            league.title = response.title;
            league.data = [];

            for (let i = 0; i < response.data.length; i++){
                const teamInfo = response.data[i];
                league.data.push(<TeamDetail title={teamInfo['title']} totalGames={teamInfo['totalGames']} wins={teamInfo['wins']} draws={teamInfo['draw']} looses={teamInfo['loses']} goleZadeh={teamInfo['goleZadeh']} goleKhordeh={teamInfo['goleKhordeh']} tafazol={teamInfo['tafazol']} score={teamInfo['score']} key={0}/>);
            }

            return league;
        });


    }

    static getLeagueWeeks(leagueId) {
        const url = `/api/league/weeks/${leagueId}/`;

        return FetchUtil.fetchFromUrl(url).then(response => response);
    }

    static getLeagueNames(){
        const url = '/api/league/get_all_leagues/';
        return FetchUtil.fetchFromUrl(url);
    }

    static getGames(leagueId, week) {
        const url = `/api/league/games_by_week/${leagueId}/${week}/`;
        return FetchUtil.fetchFromUrl(url);
    }
}

export class LeagueInfo {
    title;
    data;
}

export class TeamDetail extends React.Component {
    title;
    totalGames;
    wins;
    draws;
    looses;
    goleZadeh;
    goleKhordeh;
    tafazol;

    render() {
        return (
            <tr>
                <td>
                    {this.props.title}
                </td>
                <td>
                    {this.props.totalGames}
                </td>
                <td>
                    {this.props.wins}
                </td>
                <td>
                    {this.props.draws}
                </td>
                <td>
                    {this.props.looses}
                </td>
                <td>
                    {this.props.goleZadeh}
                </td>
                <td>
                    {this.props.goleKhordeh}
                </td>
                <td>
                    {this.props.tafazol}
                </td>
                <td>
                    {this.props.score}
                </td>
            </tr>
        );
    }

}

export class SelectWeek extends React.Component {
    constructor(props) {
        super(props);
        this.weeks = props.weeks;
        this.handleWeekClick = props.handleWeekClick;
    }

    render() {
        let options = [];
        for (let i = 0; i < this.props.weeks.length; i++)
            options.push(<option onClick={() => this.props.handleWeekClick(this.props.weeks[i])} key={i}>{'هفته ' + this.props.weeks[i]}</option>);

        return (
            <select>
                {options}
            </select>
        );
    }
}