import React from "react";
import {TeamUtil} from "../Utilities/TeamUtil";
import {NavLink}from "react-router-dom";

export class TeamLink extends React.Component{
    constructor(props) {
        super(props);
        this.teamId = props.teamId;
        this.state = {name: ''}
    }

    componentDidMount() {
        TeamUtil.getTeamName(this.props.teamId)
            .then(name => {
                this.setState({name: name});
            });
    }

    render() {
        return(<td>
            <a href={'/#/team?id=' + this.props.teamId}>
                {this.state.name}
            </a>
        </td>);
    }

}