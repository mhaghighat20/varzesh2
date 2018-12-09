import React from "react";

export class News extends React.Component{
    render() {
        return (
            <div className="panel panel-primary">
                <div className="panel-heading"> News </div>
                <div className="panel-body">
                    <NewsItem title = 'First News' link = 'http://google.com'/>
                    <NewsItem title = 'Second News' link = 'http://varzesh3.com'/>
                </div>
            </div>
        );
    }
}

export default class NewsPage extends React.Component{
    render() {
        return (
            <div>

            </div>
        );
    }
}

class NewsItem extends React.Component{
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