import React from "react";
import { LeagueUtil, LeagueWeek } from "./Utilities/LeagueUtil";
import { SportTypeEnum } from "./SharedComponents/SportType";

export default class League extends React.Component {
    constructor(props) {
        super(props);
        this.allLeagueNames = LeagueUtil.getLeagueNames();
        this.searchBox = React.createRef();
        this.state = {leagueNames: this.allLeagueNames}
    }

    handleSearch = () => {
        let leagueNames = [];
        for (let i = 0; i < this.allLeagueNames.length; i++){
            if (this.allLeagueNames[i].indexOf(this.searchBox.current.value) > -1)
                leagueNames.push(this.allLeagueNames[i]);
        }
        this.setState({leagueNames: leagueNames});
    };

    render() {
        let leagueDetails = LeagueUtil.getLeagueDetails(SportTypeEnum.soccer, '1');
        let week = LeagueUtil.getLeagueWeek(SportTypeEnum.soccer, '1', '10');

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
                                <LeagueList leagueNames={this.state.leagueNames} />
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-9">
                        <div className="row">
                            <LeagueDetails title={leagueDetails.title} data={leagueDetails.data} />
                        </div>
                        <div className="row">
                            <LeagueWeek count={week.count} data={week.data} />
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

class LeagueList extends React.Component {
    render() {
        let paragraphs = [];
        for (let i = 0; i < this.props.leagueNames.length; i++) {
            paragraphs.push(<p className="my-paragraph" key={i}>{this.props.leagueNames[i]}</p>);
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
                <div className="panel-heading center my-panel-heading">{this.props.title}</div>
                <table className="table table-striped table-responsive table-hover my-table">
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

