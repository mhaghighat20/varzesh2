import React from "react";

export class EventsFull extends React.Component {
    render() {
        let items = [];
        for (let i = 0; i < this.props.EventItems.length; i++) {
            items.push(this.props.EventItems[i]);
        }

        return (
            <DoubleTeam rightTitle={this.props.rightTeam} leftTitle={this.props.leftTeam} mainTitle="دقیقه" Items={this.props.EventItems}/>
        );
    }
}


export class EventItem extends React.Component {
    leftOrRight;

    render() {

        let leftString, rightString = '';
        if (this.props.leftOrRight === '1')
            leftString = this.props.act + ' ' + this.props.player;
        else
            rightString = this.props.act + ' ' + this.props.player;

        return (
            <DoubleTeamItem rightString={rightString} leftString={leftString} middleString={"'" + this.props.minute}></DoubleTeamItem>
        );
    }
}

export class DoubleTeam extends React.Component {
    render() {
        let items = [];
        for (let i = 0; i < this.props.Items.length; i++) {
            items.push(this.props.Items[i]);
        }

        return (
            <div className="panel panel-primary">
                <table className="event">
                    <thead>
                        <tr>
                            <td>
                                {this.props.rightTitle}
                            </td>
                            <td>
                                {this.props.mainTitle}
                            </td>
                            <td>
                                {this.props.leftTitle}
                            </td>
                        </tr>
                    </thead>
                    <tbody>
                        {items}
                    </tbody>
                </table>
            </div>
        );
    }
}

export class DoubleTeamItem extends React.Component {
    render() {
        return (
            <tr>
                <td>
                    {this.props.rightString}
                </td>
                <td>
                    {this.props.middleString}
                </td>
                <td>
                    {this.props.leftString}
                </td>
            </tr>
        );
    }
}