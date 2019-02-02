import React from "react";
import {LeagueInfo, LeagueUtil, SelectWeek} from "./Utilities/LeagueUtil";
import {GamesFull} from "./SharedComponents/GameResult";

export default class League extends React.Component {
    handleLeagueNameClick = (leagueId) => {
        this.setState({
            allLeagueNames: this.state.allLeagueNames,
            leagueNames: this.state.leagueNames,
            selectedLeagueId: leagueId,
            leagueDetails: this.state.leagueDetails,
            weeks: this.state.weeks,
            gameIds: this.state.gameIds
        });
        LeagueUtil.getLeagueDetails(leagueId).then(leagueDetails => this.setState({
            allLeagueNames: this.state.allLeagueNames,
            leagueNames: this.state.leagueNames,
            selectedLeagueId: this.state.selectedLeagueId,
            leagueDetails: leagueDetails,
            weeks: this.state.weeks,
            gameIds: this.state.gameIds
        }));
        LeagueUtil.getLeagueWeeks(leagueId).then(weeks => {
            this.setState({
                allLeagueNames: this.state.allLeagueNames,
                leagueNames: this.state.leagueNames,
                selectedLeagueId: this.state.selectedLeagueId,
                leagueDetails: this.state.leagueDetails,
                weeks: weeks,
                gameIds: this.state.gameIds
            });
            if (this.state.weeks.length > 0)
                this.handleWeekClick(this.state.weeks[0])
        });
    };
    constructor(props) {
        super(props);
        this.searchBox = React.createRef();
        this.state = {
            allLeagueNames: [],
            leagueNames: [],
            selectedWeekId: 0,
            leagueDetails: new LeagueInfo(),
            weeks: [],
            gameIds: []
        };
    }

    componentDidMount() {
        LeagueUtil.getLeagueNames().then(leagueNames => {
            this.setState({
                allLeagueNames: leagueNames,
                leagueNames: leagueNames,
                selectedLeagueId: this.state.selectedLeagueId,
                leagueDetails: this.state.leagueDetails,
                weeks: this.state.weeks,
                gameIds: this.state.gameIds
            });
            if (this.state.leagueNames.length > 0)
                this.handleLeagueNameClick(this.state.leagueNames[0]['id']);
        });

    }

    handleSearch = () => {
        let leagueNames = [];
        for (let i = 0; i < this.state.allLeagueNames.length; i++){
            if (this.state.allLeagueNames[i]['name'].indexOf(this.searchBox.current.value) > -1)
                leagueNames.push(this.state.allLeagueNames[i]);
        }
        this.setState({
            allLeagueNames: this.state.allLeagueNames,
            leagueNames: leagueNames,
            selectedLeagueId: this.state.selectedLeagueId,
            leagueDetails: this.state.leagueDetails,
            weeks: this.state.weeks,
            gameIds: this.state.gameIds
        });
    };

    render() {
        return (
            <div className="container container-fluid">
                <div className="row">
                    <div className="col-sm-3">
                        <div className="panel">
                            <div className="panel-heading my-panel-heading">آرشیو لیگ ها</div>
                            <div className="text-center panel-body">
                                <div>
                                    <input type="text" ref={this.searchBox} onChange={this.handleSearch} placeholder="جستجو" className="form-control"/>
                                </div>
                                <LeagueList leagueNames={this.state.leagueNames} handleClick={this.handleLeagueNameClick}/>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-9">
                        <LeagueDetails leagueDetails={this.state.leagueDetails} />
                        <GamesFull title="مسابقات" gameIds={this.state.gameIds} content={<SelectWeek weeks={this.state.weeks} handleWeekClick={this.handleWeekClick}/>} />
                    </div>
                </div>
            </div>
        );
    }

    handleWeekClick(week) {
            LeagueUtil.getGames(this.state.selectedLeagueId, week).then(gameIds => {
                this.setState({
                allLeagueNames: this.state.allLeagueNames,
                leagueNames: this.state.leagueNames,
                selectedLeagueId: this.state.selectedLeagueId,
                leagueDetails: this.state.leagueDetails,
                weeks: this.state.weeks,
                gameIds: gameIds
            });
        });
    }
}

class LeagueList extends React.Component {
    constructor(props) {
        super(props);
        this.leagueNames = props.leagueNames;
        this.handleClick = props.handleClick;
    }

    render() {
        let paragraphs = [];
        for (let i = 0; i < this.props.leagueNames.length; i++) {
            paragraphs.push(<p className="my-paragraph league-name" onClick={() => this.props.handleClick(this.props.leagueNames[i]['id'])} key={i}>{this.props.leagueNames[i]['name']}</p>);
        }

        return (
            <div>
                {paragraphs}
            </div>
        )
    }
}

class LeagueDetails extends React.Component {
    constructor(props) {
        super(props);
        this.leagueDetails = props.leagueDetails;
    }

    render() {
        return (
            <div className="panel">
                <div className="panel-heading center my-panel-heading">{this.props.leagueDetails.title}</div>
                <table className="table table-striped table-responsive table-hover my-table">
                    <thead>
                        <tr>
                            <th>
                                تیم
                            </th>
                            <th>
                                بازی
                            </th>
                            <th>
                                برد
                            </th>
                            <th>
                                مساوی
                            </th>
                            <th>
                                باخت
                            </th>
                            <th>
                                گل زده
                            </th>
                            <th>
                                گل خورده
                            </th>
                            <th>
                                تفاضل
                            </th>
                            <th>
                                امتیاز
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.props.leagueDetails.data}
                    </tbody>
                </table>
            </div>
        );
    }
}

