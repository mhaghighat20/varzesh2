import React from "react"
import { URLUtil } from "./Utilities/URLUtil";
import { PlayerUtil } from "./Utilities/PlayerUtil";
import { SportTypeEnum } from "./SharedComponents/SportType";
import { NewsList } from "./SharedComponents/News";

export default class Player extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            details: <div/>,
            statistics: [],
            newsIds: []
        };
        this.id = URLUtil.getParameterByName('id', window.location.href);
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        const id = URLUtil.getParameterByName('id', window.location.href);
        if (id !== this.id)
            window.location.reload();
    }

    componentDidMount() {
        PlayerUtil.getPlayerDetails(this.id)
            .then(details => {
                const playerDetails = <PlayerDetails details={details} />;
                this.setState({
                    details: playerDetails,
                    statistics: this.state.statistics,
                    newsIds: this.state.newsIds
                });
            });
        PlayerUtil.getPlayerStatistics(this.id)
            .then(statistics => {
                this.setState({
                    details: this.state.details,
                    statistics: statistics,
                    newsIds: this.state.newsIds
                });
            });
        PlayerUtil.getPlayerNews(this.id)
            .then(newsIds => {
                this.setState({
                    details: this.state.details,
                    statistics: this.state.statistics,
                    newsIds: newsIds
                });
            });
    }


    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-sm-7 col-sm-push-5">
                        {this.state.details}
                    </div>
                    <div className="col-sm-5 col-sm-pull-7">
                        <div>
                            <PlayerStatistics statistics={this.state.statistics} />
                        </div>
                        <div>
                            <NewsList newsIds={this.state.newsIds} title="اخبار" />
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

class PlayerDetails extends React.Component {
    render() {
        return (
            <div className="panel">
                <div className="panel-heading my-panel-heading">مشخصات</div>
                <div className="row">
                    <div className="col-sm-6 pull-left">
                        <img src={this.props.details.imagePath} alt={this.props.details.firstName + ' ' + this.props.details.lastName} />
                    </div>
                    <div className="col-sm-6">
                        <KeyValue colName="نام" value={this.props.details.firstName + ' ' + this.props.details.lastName} />
                        <KeyValue colName="سن" value={this.props.details.age + ' سال'} />
                        <KeyValue colName="قد" value={this.props.details.height + ' سانتی‌متر'} />
                        <KeyValue colName="وزن" value={this.props.details.weight + ' کیلوگرم'} />
                        <KeyValue colName="تیم کنونی" value={this.props.details.currentTeam} />
                        <KeyValue colName="ملیت" value={this.props.details.nationality} />
                        <KeyValue colName="پست" value={this.props.details.post} />
                    </div>
                </div>
            </div>
        );
    }
}

class PlayerStatistics extends React.Component {
    constructor(props) {
        super(props);
        this.statistics = props.statistics;
    }

    render() {
        let statistics = [];
        for (let i = 0; i < this.props.statistics.length; i++) {
            statistics.push(
                <tr key={i}>
                    <td>
                        {this.props.statistics[i].goals}
                    </td>
                    <td>
                        {this.props.statistics[i].assists}
                    </td>
                    <td>
                        {this.props.statistics[i].yellowCards}
                    </td>
                    <td>
                        {this.props.statistics[i].redCards}
                    </td>
                    <td>
                        {this.props.statistics[i].season}
                    </td>
                </tr>
            );
        }
        return (
            <div className="panel">
                <div className="panel-heading my-panel-heading">آمار</div>
                <table className="table table-responsive table-striped table-hover my-table">
                    <thead>
                        <tr>
                            <th>
                                گل‌های زده
                        </th>
                            <th>
                                پاس گل‌ها
                        </th>
                            <th>
                                کارت‌های زرد
                        </th>
                            <th>
                                کارت‌های قرمز
                        </th>
                            <th>
                                فصل
                        </th>
                        </tr>
                    </thead>
                    <tbody>
                        {statistics}
                    </tbody>
                </table>
            </div>
        );
    }
}

class KeyValue extends React.Component {
    constructor(props) {
        super(props);
        this.colName = props.colName;
        this.value = props.value;
    }

    render() {
        return (
            <div>
                <p className="my-paragraph">
                    {this.props.colName + ': ' + this.props.value}
                </p>
            </div>
        );
    }
}