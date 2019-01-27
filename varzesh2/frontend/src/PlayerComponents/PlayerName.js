import React from "react";
import {PlayerUtil} from "../Utilities/PlayerUtil";

export class PlayerName extends React.Component {
    constructor(props) {
        super(props);
        this.playerId = props.playerId;
        this.state = {name: ''}
    }

    componentDidMount(){
        PlayerUtil.getPlayerName(this.props.playerId)
            .then(playerName => {
                this.setState({name: playerName})
            });
    }

    render() {
        return (
            <a href={'/player?id=' + this.props.playerId}>
                <p>
                    {this.state.name}
                </p>
            </a>
        );
    }

}