import React from "react";
import { SportTypeEnum } from "../SharedComponents/SportType";
import { GameResult, GamesFull } from "../SharedComponents/GameResult";

export class LeagueUtil {
    static getLeagueDetails(sport, id) {
        if (id === '1' && sport === SportTypeEnum.soccer) {
            let league = new LeagueDetails();
            league.title = "لیگ برتر 97-98";
            league.data = [];

            league.data.push(<TeamDetail title="پدیده" totalGames="15" wins="9" draws="4" looses="2" goleZadeh="19" goleKhordeh="8" tafazol="11" score="31" key={0}/>);
            league.data.push(<TeamDetail title="سپاهان" totalGames="14" wins="8" draws="6" looses="0" goleZadeh="27" goleKhordeh="11" tafazol="16" score="30" key={1}/>);
            league.data.push(<TeamDetail title="پرسپولیس" totalGames="14" wins="7" draws="7" looses="0" goleZadeh="14" goleKhordeh="5" tafazol="9" score="28" key={2}/>);
            league.data.push(<TeamDetail title="تراکتورسازی" totalGames="15" wins="7" draws="5" looses="3" goleZadeh="23" goleKhordeh="14" tafazol="9" score="26" key={3}/>);
            league.data.push(<TeamDetail title="پدیده" totalGames="15" wins="9" draws="4" looses="2" goleZadeh="19" goleKhordeh="8" tafazol="11" score="25" key={4}/>);
            league.data.push(<TeamDetail title="سپاهان" totalGames="14" wins="8" draws="6" looses="0" goleZadeh="27" goleKhordeh="11" tafazol="16" score="24" key={5}/>);
            league.data.push(<TeamDetail title="پرسپولیس" totalGames="14" wins="7" draws="7" looses="0" goleZadeh="14" goleKhordeh="5" tafazol="9" score="23" key={6}/>);
            return league;
        }
    }

    static getLeagueWeek(sport, id, count) {
        if (id === '1' && sport === SportTypeEnum.soccer && count === '10') {
            let week = new LeagueWeek();
            week.count = '10';
            week.data = [];
            week.data.push(<GameResult leftTeam='پرسپولیس' rightTeam='ذوب آهن' leftGoals='1' rightGoals='0' date='1397/07/13' status='برد' score='3' key={0}/>);
            week.data.push(<GameResult leftTeam='ماشین سازی تبریز' rightTeam='پرسپولیس' leftGoals='0' rightGoals='1' date='1397/07/08' status='برد' score='3' key={1}/>);
            week.data.push(<GameResult leftTeam='ذوب آهن' rightTeam='پرسپولیس' leftGoals='1' rightGoals='2' date='1397/07/97' status='برد' score='3' key={3}/>);

            return week;
        }
    }
}

class LeagueDetails {
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


export class LeagueWeek extends React.Component {
    count;
    data;

    render() {
        return (
            <div className="panel">
                <GamesFull Games={this.props.data} title={<SelectWeek limit={this.props.count}/>} />;
            </div>
        );
    }
}

class SelectWeek extends React.Component {
    limit;
    render() {
        let options = [];
        for (let i = 1; i <= this.props.limit; i++)
            options.push(<option key={i}>{'هفته ' + i}</option>);

        return (
            <select>
                {options}
            </select>
        );
    }
}