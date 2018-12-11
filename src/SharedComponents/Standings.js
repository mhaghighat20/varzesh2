import React from "react";
import {SportTypeEnum} from "./SportType";

export class Standings extends React.Component{
    render() {
        let text;
        if (this.props.sportType === SportTypeEnum.soccer)
            text = <p>This is soccer standings</p>;
        else
            text = <p>This is basketball standings</p>;
        return (
            <aside className="panel panel-primary">
                <div className="panel-heading">Standings</div>
                {text}
            </aside>
        );
    }
}