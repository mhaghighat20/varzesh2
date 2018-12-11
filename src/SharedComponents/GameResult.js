import React from "react";

export class GameResult extends React.Component {
    render() {
        return (
            <div>
                <a href={'/#/team/' + this.props.leftTeam}>
                    {this.props.leftTeam}
                </a>

                <span>
                    {this.props.leftGoals}-
                </span>

                <a href={'/#/team/' + this.props.rightTeam}>
                    {this.props.rightTeam}
                </a>
                <span>
                    {this.props.rightGoals}
                </span>
            </div>
        );
    }
}

export class GamesFull extends React.Component {
    render() {
        let Games = [];
        for (let i = 0; i < this.props.Games.length; i++) {
            Games.push(<p className="my-paragraph">{this.props.Games[i]}</p>);
        }

        return (
            <div className="panel panel-primary">
                <div className="panel-heading">{this.props.title}</div>
                <article>
                    {Games}
                </article>
            </div>
        );
    }
}