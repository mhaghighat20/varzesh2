import React from "react";

export class GameResult extends React.Component {
    render() {
        let result = [];
        result.push(<td href={'/#/team/' + this.props.leftTeam}>
            {this.props.leftTeam}
        </td>);

        result.push(<td>
            {this.props.leftGoals}
        </td>);

        result.push(<td href={'/#/team/' + this.props.rightTeam}>
            {this.props.rightTeam}
        </td>);

        result.push(<td>
            {this.props.rightGoals}
        </td>);

        if (this.props.score != null) {
            result.push(<td>
                {this.props.status}
            </td>);
            result.push(<td>
                {this.props.score}
            </td>);
        }

        result.push(<td>
            {this.props.date}
        </td>);

        return (
            <tr>{result}</tr>
        );
    }
}

export class GamesFull extends React.Component {
    render() {
        let Games = [];
        for (let i = 0; i < this.props.Games.length; i++) {
            Games.push(this.props.Games[i]);
        }

        let headers = [];

        headers.push(<th>
            تیم رفت
        </th>);
        headers.push(<th>
            تعداد گل
        </th>);
        headers.push(<th>
            تیم برگشت
        </th>);
        headers.push(<th>
            تعداد گل
        </th>);

        if (this.props.noScore != '1') {
            headers.push(<th>
                وضعیت</th>);

            headers.push(<th>
                امتیاز</th>);
        }

        headers.push(<th>
            تاریخ
        </th>);

        return (
            <div className="panel">
                <div className="panel-heading center">{this.props.title}</div>
                <table>
                    <thead>
                        <tr>
                            {headers}
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