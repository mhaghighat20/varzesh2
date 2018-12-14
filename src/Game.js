import React from "react";
import { GameResult, GamesFull } from "./SharedComponents/GameResult";
import { EventItem, EventsFull } from "./GameComponents/Events";

export default class Game extends React.Component{
    render() {
        let events = [];
        events.push(<EventItem leftOrRight='1' player='علیپور' act='کارت زرد' minute='4' />);
        events.push(<EventItem leftOrRight='1' player='علیپور' act='پنالتی' minute='8' />);
        events.push(<EventItem leftOrRight='1' player='نورالهی' act='کارت زرد' minute='36' />);
        events.push(<EventItem leftOrRight='1' player='عالیشاه -> گادوین منشا' act='تعویض' minute='67' />);
        events.push(<EventItem leftOrRight='1' player='کامیابی نیا' act='کارت زرد' minute='73' />);
        events.push(<EventItem leftOrRight='0' player='گرامی' act='کارت زرد' minute='75' />);
        events.push(<EventItem leftOrRight='0' player='صدری' act='کارت زرد' minute='80' />);
        let eventsFull = <EventsFull EventItems={events} leftTeam="پرسپولیس" rightTeam="پدیده" />;


        let games = [];
        games.push(<GameResult leftTeam='پرسپولیس' rightTeam='پدیده' leftGoals='1' rightGoals='0' date='1397/07/13' />);
        games.push(<GameResult leftTeam='پدیده' rightTeam='پرسپولیس' leftGoals='0' rightGoals='1' date='1397/07/08' />);
        games.push(<GameResult leftTeam='پدیده' rightTeam='ذوب آهن' leftGoals='1' rightGoals='0' date='1397/07/03' />);

        let gamesFull = <GamesFull Games={games} title='بازی های رو در رو' />;

        return (
            <div className="game">
                {eventsFull}
                {gamesFull}
            </div>
        );

    }
}