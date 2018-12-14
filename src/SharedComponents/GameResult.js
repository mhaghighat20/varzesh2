import React from "react";

export class GameResult extends React.Component {
    render() {
        return (
            <tr>
                <td href={'/#/team/' + this.props.leftTeam}>
                    {this.props.leftTeam}
                </td>

                <td>
                    {this.props.leftGoals}
                </td>

                <td href={'/#/team/' + this.props.rightTeam}>
                    {this.props.rightTeam}
                </td>
                <td>
                    {this.props.rightGoals}
                </td>
                <td>
                    {this.props.status}
                </td>
                <td>
                    {this.props.score}
                </td>
                <td>
                    {this.props.date}
                </td>
            </tr>
        );
    }
}

export class GamesFull extends React.Component {
    render() {
        let Games = [];
        for (let i = 0; i < this.props.Games.length; i++) {
            Games.push(this.props.Games[i]);
        }

        return (
            <div className="panel">
                <div className="panel-heading center">{this.props.title}</div>
                <table>
                    <thead>
                        <tr>
                            <th>
                                تیم رفت
                            </th>
                            <th>
                                تعداد گل
                            </th>
                            <th>
                                تیم برگشت
                            </th>
                            <th>
                                تعداد گل
                            </th>
                            <th>
                                وضعیت
                            </th>
                            <th>
                                امتیاز
                            </th>
                            <th>
                                تاریخ
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {Games}
                    </tbody>
                </table>
            </div>
        );
    }
}