import React from "react";

export default class Star extends React.Component {
    constructor(props) {
        super(props);
        this.filled = props.filled;
        this.onClick = props.onClick;
        this.show = props.show;
    }

    render() {
        const className = this.props.filled ? "star-filled" : "star-empty";
        if (this.props.show) {
            return (
                <div className={className} onClick={this.props.onClick}/>);
        } else {
                    return(<div/>);
        }
    }
}