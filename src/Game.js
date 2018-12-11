import React from "react";
import { GameResult, GamesFull } from "./SharedComponents/GameResult";
import { EventItem, EventsFull } from "./GameComponents/Events";

export default class Game extends React.Component{
    render() {
        let events = [];
        events.push(<EventItem player='شجاعی' act='گل' minute='25' />)
        let eventsFull = <EventsFull EventItems={events} />;


        let games = [];
        games.push(<GameResult leftTeam='پرسپولیس' rightTeam='ذوب آهن' leftGoals='1' rightGoals='0' date='1397/07/13' />);
        games.push(<GameResult leftTeam='ماشین سازی تبریز' rightTeam='پرسپولیس' leftGoals='0' rightGoals='1' date='1397/07/08' />);
        games.push(<GameResult leftTeam='پرسپولیس' rightTeam='ذوب آهن' leftGoals='1' rightGoals='0' date='1397/07/97' />);

        let gamesFull = <GamesFull Games={games} title='بازی های رو در رو' />;

        return (
            <div>
                {eventsFull}
                {gamesFull}
            </div>
        );

    }
}