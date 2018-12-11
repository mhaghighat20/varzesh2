import React from "react";
import {NewsUtil} from "./Utilities/NewsUtil";
import {URLUtil} from "./Utilities/URLUtil"

export default class NewsPage extends React.Component {
    render() {
        const id = URLUtil.getParameterByName('id', window.location.href);

        let newsDetails = NewsUtil.getNewsById(id, true);

        let news = <NewsFull
            paragraphs = {newsDetails.paragraphs}
            image = {newsDetails.image}
            publishDate = {newsDetails.publishDate}
            title = {newsDetails.title}
        />;
        return (
            <div className="container container-fluid">
                {news}
            </div>
        );
    }
}

class NewsFull extends React.Component {
    render() {
        let paragraphs = [];
        for (let i = 0; i < this.props.paragraphs.length; i++) {
            paragraphs.push(<p className="my-paragraph">{this.props.paragraphs[i]}</p>);
        }
        return (
            <div className="panel panel-primary">
                <h1 className="news-title">{this.props.title}</h1>
                <Image base64={this.props.image.base64} alt={this.props.image.alt} />
                <article>
                    {paragraphs}
                </article>
                <Date value={this.props.publishDate} />
            </div>
        );
    }
}

class Image extends React.Component {
    render() {
        return (
            <img className="news-image" src={'data:image/jpeg;base64,' + this.props.base64} alt={this.props.alt} />
        );
    }
}

class Date extends React.Component {
    render() {
        return (
            <p className="my-paragraph" style={{ direction: 'ltr' }}>
                {'تاریخ انتشار: ' + this.props.value}
            </p>
        );
    }
}