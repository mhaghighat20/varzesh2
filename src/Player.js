import React from "react"
import {URLUtil} from "./Utilities/URLUtil";
import {PlayerUtil} from "./Utilities/PlayerUtil";
import {SportTypeEnum} from "./SharedComponents/SportType";

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
            </div>
        );
    }
}

class PlayerDetails extends React.Component{
    render() {
        return (
            <div className="panel panel-primary">
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
        return (
            <div>

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