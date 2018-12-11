import React from "react";
import { GameResult, GamesFull } from "./SharedComponents/GameResult";

export default class Team extends React.Component {
    render() {
        let games = [];
        games.push(<GameResult leftTeam='پرسپولیس' rightTeam='ذوب آهن' leftGoals='1' rightGoals='0' date='1397/07/13' />);
        games.push(<GameResult leftTeam='ماشین سازی تبریز' rightTeam='پرسپولیس' leftGoals='0' rightGoals='1' date='1397/07/08' />);
        games.push(<GameResult leftTeam='پرسپولیس' rightTeam='ذوب آهن' leftGoals='1' rightGoals='0' date='1397/07/97' />);

        let gamesFull = <GamesFull Games={games} title='بازی ها' />;
        let members = ['کمال کامیابی نیا', 'بشار رسن', 'حسین ماهینی', 'شجاع خلیل زاده'];
        let membersHtml = [];
        for (let i = 0; i < members.length; i++) {
            membersHtml.push(<p className="my-paragraph">{members[i]}</p>);
        }

        return (
            <div className="container">
                {gamesFull}

                
                <div className="panel panel-primary">
                    <h1 className="news-title">اعضای تیم</h1>
                    <article>
                        {membersHtml}
                    </article>
                    
                </div>

            </div>
        );
    }
}