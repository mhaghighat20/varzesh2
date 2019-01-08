import React from "react";
import { NewsList } from "./SharedComponents/News";
import { LeagueUtil, TeamDetail, LeagueWeek } from "./Utilities/LeagueUtil";
import { SportTypeEnum } from "./SharedComponents/SportType";

export default class League extends React.Component {
    render() {
        let paragraphs = [];
        paragraphs.push("لیگ برتر 97-98");
        paragraphs.push("لیگ برتر 96-97");
        paragraphs.push("لیگ برتر 95-96");
        paragraphs.push("لیگ برتر 94-95");
        paragraphs.push("لیگ برتر 93-94");

        paragraphs.push("لیگ بسکتبال 97-98");
        paragraphs.push("لیگ بسکتبال 96-97");
        paragraphs.push("لیگ بسکتبال 95-96");
        paragraphs.push("لیگ بسکتبال 94-95");
        paragraphs.push("لیگ بسکتبال 93-94");

        let leagueDetails = LeagueUtil.getLeagueDetails(SportTypeEnum.soccer, '1');
        let week = LeagueUtil.getLeagueWeek(SportTypeEnum.soccer, '1', '10');

        return (
            <div>
                <div className="side-bar panel">
                    <div className="panel-heading">آرشیو لیگ ها</div>
                    <div className="">
                        <LeagueList paragraphs={paragraphs} />
                    </div>
                </div>
                <div className="content-main-wrapper">
                    <LeagueDetails title={leagueDetails.title} data={leagueDetails.data} />
                    <LeagueWeek count={week.count} data={week.data} />
                </div>
            </div>
        );
    }
}

class LeagueList extends React.Component {
    render() {
        let paragraphs = [];
        for (let i = 0; i < this.props.paragraphs.length; i++) {
            paragraphs.push(<p className="my-paragraph" key={i}>{this.props.paragraphs[i]}</p>);
        }

        return (
            <div>
                {paragraphs}
            </div>
        )
    }
}

class LeagueDetails extends React.Component {
    render() {
        return (
            <div className="panel">
                <div className="panel-heading center">{this.props.title}</div>
                <table>
                    <thead>
                        <tr>
                            <td>
                                تیم
                            </td>
                            <td>
                                بازی
                            </td>
                            <td>
                                برد
                            </td>
                            <td>
                                مساوی
                            </td>
                            <td>
                                باخت
                            </td>
                            <td>
                                گل زده
                            </td>
                            <td>
                                گل خورده
                            </td>
                            <td>
                                تفاضل
                            </td>
                            <td>
                                امتیاز
                            </td>
                        </tr>
                    </thead>
                    <tbody>
                        {this.props.data}
                    </tbody>
                </table>
            </div>
        );
    }
}

