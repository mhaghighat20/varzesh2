import React from "react";
import { GameResult, GamesFull } from "./SharedComponents/GameResult";
import { EventItem, EventsFull, DoubleTeamItem, DoubleTeam } from "./GameComponents/Events";

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

        let stats = [];
        stats.push(<DoubleTeamItem leftString="2" middleString="تعداد گل" rightString="1" />)
        stats.push(<DoubleTeamItem leftString="67%" middleString="درصد مالکیت توپ" rightString="33%" />)
        stats.push(<DoubleTeamItem leftString="2" middleString="کرنر" rightString="3" />)
        stats.push(<DoubleTeamItem leftString="3" middleString="خطا" rightString="1" />)
        stats.push(<DoubleTeamItem leftString="3" middleString="موقعیت گل" rightString="4" />)
        stats.push(<DoubleTeamItem leftString="2" middleString="کارت زرد" rightString="1" />)
        stats.push(<DoubleTeamItem leftString="0" middleString="کارت قرمز" rightString="0" />)
        stats.push(<DoubleTeamItem leftString="صدری" middleString="بهترین بازیکن زمین" rightString="" />)


        let games = [];
        games.push(<GameResult leftTeam='پرسپولیس' rightTeam='پدیده' leftGoals='1' rightGoals='0' date='1397/07/13' />);
        games.push(<GameResult leftTeam='پدیده' rightTeam='پرسپولیس' leftGoals='0' rightGoals='1' date='1397/07/08' />);
        games.push(<GameResult leftTeam='پدیده' rightTeam='پرسپولیس' leftGoals='1' rightGoals='0' date='1397/07/03' />);

        let gamesFull = <GamesFull Games={games} title='بازی های رو در رو' noScore="1" />;

        return (
            <div className="game">
                {eventsFull}
                <DoubleTeam Items={stats}></DoubleTeam>
                {gamesFull}
            </div>
        );

    }
}