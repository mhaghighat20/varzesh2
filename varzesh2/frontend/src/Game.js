import React from "react";
import { GameResult, GamesFull } from "./SharedComponents/GameResult";
import { EventItem, EventsFull, DoubleTeamItem, DoubleTeam } from "./GameComponents/Events";
import { NewsList } from "./SharedComponents/News";
import {VideoList} from "./GameComponents/VideoList";

export default class Game extends React.Component {
    render() {
        let events = [];
        events.push(<EventItem leftOrRight='1' player='علیپور' act='کارت زرد' minute='4' key={1}/>);
        events.push(<EventItem leftOrRight='1' player='علیپور' act='پنالتی' minute='8' key={2}/>);
        events.push(<EventItem leftOrRight='1' player='نورالهی' act='کارت زرد' minute='36' key={3}/>);
        events.push(<EventItem leftOrRight='1' player='عالیشاه -> گادوین منشا' act='تعویض' minute='67' key={4}/>);
        events.push(<EventItem leftOrRight='1' player='کامیابی نیا' act='کارت زرد' minute='73' key={5}/>);
        events.push(<EventItem leftOrRight='0' player='گرامی' act='کارت زرد' minute='75' key={6}/>);
        events.push(<EventItem leftOrRight='0' player='صدری' act='کارت زرد' minute='80' key={7}/>);
        let eventsFull = <EventsFull eventItems={events} leftTeam="پرسپولیس" rightTeam="پدیده" key={8}/>;

        let stats = [];
        stats.push(<DoubleTeamItem leftString="2" middleString="تعداد گل" rightString="1" key={1}/>);
        stats.push(<DoubleTeamItem leftString="67%" middleString="درصد مالکیت توپ" rightString="33%" key={2}/>);
        stats.push(<DoubleTeamItem leftString="2" middleString="کرنر" rightString="3" key={3}/>);
        stats.push(<DoubleTeamItem leftString="3" middleString="خطا" rightString="1" key={4}/>);
        stats.push(<DoubleTeamItem leftString="3" middleString="موقعیت گل" rightString="4" key={5}/>);
        stats.push(<DoubleTeamItem leftString="2" middleString="کارت زرد" rightString="1" key={6}/>);
        stats.push(<DoubleTeamItem leftString="0" middleString="کارت قرمز" rightString="0" key={7}/>);
        stats.push(<DoubleTeamItem leftString="" middleString="بهترین بازیکن زمین" rightString="صدری" key={8} />);


        let games = [];
        games.push(<GameResult leftTeam='پرسپولیس' rightTeam='پدیده' leftGoals='1' rightGoals='0' date='1397/07/13' key={0}/>);
        games.push(<GameResult leftTeam='پدیده' rightTeam='پرسپولیس' leftGoals='0' rightGoals='1' date='1397/07/08' key={1}/>);
        games.push(<GameResult leftTeam='پدیده' rightTeam='پرسپولیس' leftGoals='1' rightGoals='0' date='1397/07/03' key={2}/>);

        let gamesFull = <GamesFull Games={games} title='بازی های رو در رو' noScore="1" />;

        return (
            <div className="container container-fluid">
                {eventsFull}
                <div className="panel">
                    <div className="panel-heading my-panel-heading">
                        آمار
                    </div>
                    <DoubleTeam items={stats} tableClassName="table table-stripped table-hover table-responsive my-table"/>
                </div>
                <div className="panel">
                    <div className="panel-heading my-panel-heading">
                        بازیکنان
                    </div>
                    <div className="panel-body">
                        <table className="event">
                            <tbody>
                                <tr>
                                    <td>
                                        <div>
                                            <p>محمد ناصری G</p>
                                            <p>علی نعمتی</p>
                                            <p>سید عبدالله حسینی</p>
                                            <p>مسعود ریگی</p>
                                            <p>محمد ناصری</p>
                                            <p>علی نعمتی</p>
                                            <p>سید عبدالله حسینی</p>
                                            <p>مسعود ریگی</p>
                                            <p>محمد ناصری</p>
                                            <p>علی نعمتی</p>
                                            <p>سید عبدالله حسینی</p>
                                            <p>مسعود ریگی</p>
                                        </div>
                                    </td>
                                    <td/>
                                    <td>
                                        <div>
                                            <p>سیامک نعمتی</p>
                                            <p>بشار رسن</p>
                                            <p>سید جلال حسینی</p>
                                            <p>شجاع خلیل زاده</p>
                                            <p>سیامک نعمتی</p>
                                            <p>بشار رسن</p>
                                            <p>سید جلال حسینی</p>
                                            <p>شجاع خلیل زاده</p>
                                            <p>سیامک نعمتی</p>
                                            <p>بشار رسن</p>
                                            <p>سید جلال حسینی</p>
                                            <p>شجاع خلیل زاده</p>
                                        </div>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
                {gamesFull}
                <NewsList newsIds={['2', '1']} title="اخبار" />
                <VideoList videoIds={['3']} title="ویدیو های بازی" />
            </div>
        );

    }
}