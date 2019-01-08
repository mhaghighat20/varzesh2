import React from "react";
import {SportTypeEnum} from "./SportType";
import {NewsUtil} from "../Utilities/NewsUtil";
import {NavLink} from "react-router-dom";

export class NewsList extends React.Component {
    render() {
        let newsItems = [];
        for (let i = 0; i < this.props.newsIds.length; i++){
            newsItems.push(<NewsItem id = {this.props.newsIds[i]} key={i}/>);
        }
        return (
            <div className="panel">
                <div className="panel-heading">{this.props.title}</div>
                <div className="panel-body">
                    {newsItems}
                </div>
            </div>
        );
    }
}

class NewsItem extends React.Component {
    render() {
        const newsDetails = NewsUtil.getNewsById(this.props.id, false);
        return (
            <div>
                <NavLink to={'/news?id=' + this.props.id}>
                    {newsDetails.title}
                </NavLink>
            </div>
        );
    }
}