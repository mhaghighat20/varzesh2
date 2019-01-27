import {NewsUtil} from "../Utilities/NewsUtil";
import * as React from "react";
import NavLink from "react-router-dom/es/NavLink";

export class VideoList extends React.Component {
    render() {
        let videoItems = [];
        for (let i = 0; i < this.props.videoIds.length; i++){
            videoItems.push(<VideoItem id = {this.props.videoIds[i]} key={i}/>);
        }
        return (
            <div className="panel">
                <div className="panel-heading my-panel-heading">
                    {this.props.title}
                </div>
                <div className="panel-body">
                    {videoItems}
                </div>
            </div>
        );
    }
}

class VideoItem extends React.Component {
    constructor(props) {
        super(props);
        this.state = {newsDetails: <p/>}
    }

    componentDidMount() {
        NewsUtil.getNewsById(this.props.id, true).then(newsDetails => {
            this.setState({
                newsDetails: <div>
                    <img className="news-image" src={newsDetails.image.path} alt={this.props.alt}/>
                    <NavLink to={'/news?id=' + this.props.id}>
                        {newsDetails.title}
                    </NavLink>
                </div>
            });
        });
    }

    render() {
        return (
            <div>
                {this.state.newsDetails}
            </div>
        );
    }
}