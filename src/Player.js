import React from "react"
import {URLUtil} from "./Utilities/URLUtil";
import {PlayerUtil} from "./Utilities/PlayerUtil";
import {SportTypeEnum} from "./SharedComponents/SportType";
import {NewsList} from "./SharedComponents/News";

export default class Player extends React.Component{
    render() {
        const id = URLUtil.getParameterByName('id', window.location.href);
        const details = PlayerUtil.getPlayerDetails(SportTypeEnum.soccer, id);
        const statistics = PlayerUtil.getPlayerStatistics(SportTypeEnum.soccer, id);
        const newsIds = PlayerUtil.getPlayerNews(SportTypeEnum.soccer, id);
        return (
            <div className="container container-fluid">
                <PlayerDetails details = {details}/>
                <PlayerStatistics statistics = {statistics}/>
                <NewsList newsIds = {newsIds}/>
            </div>
        );
    }
}

class PlayerDetails extends React.Component{
    render() {
        return (
            <div className="panel panel-primary">
                <div className="panel-heading">مشخصات</div>
                <img className="news-image" src={this.props.details.imagePath} alt={this.props.details.name}/>
                <div>
                    <KeyValue colName="نام" value = {this.props.details.name}/>
                    <KeyValue colName="سن" value = {this.props.details.age + ' سال'}/>
                    <KeyValue colName="قد" value = {this.props.details.height + ' سانتی‌متر'}/>
                    <KeyValue colName="وزن" value = {this.props.details.weight + ' کیلوگرم'}/>
                    <KeyValue colName="تیم کنونی" value = {this.props.details.currentTeam}/>
                    <KeyValue colName="ملیت" value = {this.props.details.nationality}/>
                    <KeyValue colName="پست" value = {this.props.details.post}/>
                </div>
            </div>
        );
    }
}

class PlayerStatistics extends React.Component{
    render() {
        let statistics = [];
        for (let i = 0; i < this.props.statistics.length; i++){
            statistics.push(
                <tr>
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
            <div className="panel panel-primary">
                <div className="panel-heading">آمار</div>
                <table className="table table-bordered">
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

class KeyValue extends React.Component{
    render() {
        return (
            <p className="my-paragraph">
                {this.props.colName + ': ' + this.props.value}
            </p>
        );
    }
}