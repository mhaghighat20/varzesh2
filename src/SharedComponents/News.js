import React from "react";
import {SportTypeEnum} from "./SportType";

export class NewsList extends React.Component {
    render() {
        let newsItem;
        if (this.props.sportType === SportTypeEnum.soccer)
            newsItem = <NewsItem id='Football News' link='https://www.skysports.com/football' />;
        else {
            newsItem = <NewsItem title='Basketball News' link='https://en.wikipedia.org/wiki/Basketball' />;
        }
        return (
            <div className="panel panel-primary">
                <div className="panel-heading"> اخبار </div>
                <div className="panel-body">
                    {newsItem}
                </div>
            </div>
        );
    }
}

class NewsItem extends React.Component {
    render() {
        return (
            <div>
                <a href={this.props.link}>
                    {this.props.title}
                </a>
            </div>
        );
    }
}