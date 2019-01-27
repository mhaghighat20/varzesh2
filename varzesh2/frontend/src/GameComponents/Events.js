import React from "react";

export class EventsFull extends React.Component {
    constructor(props) {
        super(props);
        this.leftTeamId = props.leftTeamId;
        this.rightTeamId = props.rightTeamId;

        this.state = {
            leftTeam: '',
            rightTeam: ''
        };
    }


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
                <GameStatistics rightTitle={this.props.rightTeam} leftTitle={this.props.leftTeam} mainTitle="دقیقه" items={this.props.eventItems} tableClassName="event"/>
            </div>
        );
    }
}


export class EventItem extends React.Component {
    constructor(props) {
        super(props);
        this.leftOrRight = props.leftOrRight;
        this.player = props.player;
        this.act = props.act;
    }

    render() {
        let leftString, rightString = '';
        if (this.props.leftOrRight === '1')
            leftString = this.props.act + ' ' + this.props.player;
        else
            rightString = this.props.act + ' ' + this.props.player;

        return (
            <GameStatisticItem rightString={rightString} leftString={leftString} middleString={"'" + this.props.minute}/>
        );
    }
}

export class GameStatistics extends React.Component {
    constructor(props) {
        super(props);
        this.tableClassName = props.tableClassName;
        this.rightTitle = props.rightTitle;
        this.mainTitle = props.mainTitle;
        this.leftTitle = props.leftTitle;
        this.items = props.items;
    }

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

export class GameStatisticItem extends React.Component {
    constructor(props) {
        super(props);
        this.rightString = props.rightString;
        this.middleString = props.middleString;
        this.leftString = props.this.middleString;
    }


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