import React from "react";
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
                <div className="panel-heading my-panel-heading">{this.props.title}</div>
                <div className="panel-body">
                    {newsItems}
                </div>
            </div>
        );
    }
}

class NewsItem extends React.Component {
    constructor(props) {
        super(props);
        this.state = {newsDetails: <p/>}
    }

    componentDidMount() {
        NewsUtil.getNewsById(this.props.id, false).then(newsDetails =>{
            this.setState({
                newsItem: <NavLink to={'/news?id=' + this.props.id}>
                    {newsDetails.title}
                </NavLink>
            });
        });
    }

    render() {
        return (
            <div>
                {this.state.newsItem}
            </div>
        );
    }
}