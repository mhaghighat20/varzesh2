import React from "react";
import { SportTypeEnum } from "../SharedComponents/SportType";

export class LeagueUtil {
    static getLeagueDetails(sport, id) {
        if (id === '1' && sport === SportTypeEnum.soccer) {
            let league = new LeagueDetails();
            league.title="لیگ برتر 97-98";
            league.data = [];

            league.data.push(<TeamDetail title="پدیده" totalGames="15" wins="9" draws="4" looses="2" goleZadeh="19" goleKhordeh="8" tafazol="11" score="31" />);
            league.data.push(<TeamDetail title="سپاهان" totalGames="14" wins="8" draws="6" looses="0" goleZadeh="27" goleKhordeh="11" tafazol="16" score="30" />);
            league.data.push(<TeamDetail title="پرسپولیس" totalGames="14" wins="7" draws="7" looses="0" goleZadeh="14" goleKhordeh="5" tafazol="9" score="28" />);
            league.data.push(<TeamDetail title="تراکتورسازی" totalGames="15" wins="7" draws="5" looses="3" goleZadeh="23" goleKhordeh="14" tafazol="9" score="26" />);
            league.data.push(<TeamDetail title="پدیده" totalGames="15" wins="9" draws="4" looses="2" goleZadeh="19" goleKhordeh="8" tafazol="11" score="25" />);
            league.data.push(<TeamDetail title="سپاهان" totalGames="14" wins="8" draws="6" looses="0" goleZadeh="27" goleKhordeh="11" tafazol="16" score="24" />);
            league.data.push(<TeamDetail title="پرسپولیس" totalGames="14" wins="7" draws="7" looses="0" goleZadeh="14" goleKhordeh="5" tafazol="9" score="23" />);
            return league;
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