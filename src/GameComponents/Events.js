import React from "react";

export class EventsFull extends React.Component {
    render() {
        let eventItems = [];
        for (let i = 0; i < this.props.EventItems.length; i++) {
            eventItems.push(<div>{this.props.EventItems[i]}</div>);
        }

        return (
            <div className="panel panel-primary">
                <article>
                    {eventItems}
                </article>
            </div>
        );
    }
}

export class EventItem extends React.Component {
    render() {
        return (
            <div>
                <span>
                    {this.props.player}-
                </span>
                <span>
                    {this.props.act}-
                </span>
                <span>
                    {this.props.minute}
                </span>
            </div>
        );
    }
}