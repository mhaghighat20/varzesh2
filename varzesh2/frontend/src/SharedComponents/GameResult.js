import React from "react";

export class GameResult extends React.Component {
    render() {
        let result = [];
        result.push(<td href={'/#/team/' + this.props.leftTeam} key={0}>
            {this.props.leftTeam}
        </td>);

        result.push(<td key={1}>
            {this.props.leftGoals}
        </td>);

        result.push(<td href={'/#/team/' + this.props.rightTeam} key={2}>
            {this.props.rightTeam}
        </td>);

        result.push(<td key={3}>
            {this.props.rightGoals}
        </td>);

        if (this.props.score != null) {
            result.push(<td key={4}>
                {this.props.status}
            </td>);
            result.push(<td key={5}>
                {this.props.score}
            </td>);
        }

        result.push(<td key={6}>
            {this.props.date}
        </td>);

        return (
            <tr>{result}</tr>
        );
    }
}

export class GamesFull extends React.Component {
    render() {
        let headers = [];

        headers.push(<th key={0}>
            تیم رفت
        </th>);
        headers.push(<th key={1}>
            تعداد گل
        </th>);
        headers.push(<th key={2}>
            تیم برگشت
        </th>);
        headers.push(<th key={3}>
            تعداد گل
        </th>);

        if (this.props.noScore !== '1') {
            headers.push(
                <th key={4}>
                وضعیت
                </th>);

            headers.push(
                <th key={5}>
                    امتیاز
                </th>);
        }

        headers.push(<th key={6}>
            تاریخ
        </th>);

        return (
            <div className="panel">
                <div className="panel-heading center my-panel-heading">{this.props.title}</div>
                <table className="table table-striped table-responsive table-hover my-table">
                    <thead>
                        <tr>
                            {headers}
                        </tr>
                    </thead>
                    <tbody>
                        {this.props.Games}
                    </tbody>
                </table>
            </div>
        );
    }
}