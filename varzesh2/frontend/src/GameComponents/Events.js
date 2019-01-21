import React from "react";

export class EventsFull extends React.Component {
    render() {
        let items = [];
        for (let i = 0; i < this.props.eventItems.length; i++) {
            items.push(this.props.eventItems[i]);
        }

        return (
            <div className="panel">
                <div className="panel-heading my-panel-heading">
                    رخدادها
                </div>
                <DoubleTeam rightTitle={this.props.rightTeam} leftTitle={this.props.leftTeam} mainTitle="دقیقه" items={this.props.eventItems} tableClassName="event"/>
            </div>
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
            <DoubleTeamItem rightString={rightString} leftString={leftString} middleString={"'" + this.props.minute}/>
        );
    }
}

export class DoubleTeam extends React.Component {
    render() {
        let items = [];
        for (let i = 0; i < this.props.items.length; i++) {
            items.push(this.props.items[i]);
        }

        return (
            <div>
                <table className={this.props.tableClassName}>
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