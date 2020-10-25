import React from 'react';
import BarContainer from "../BarContainer/BarContainer";
import Card from "react-bootstrap/Card";
import {faCaretDown} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

const style = {
    marginBottom: '1.0rem',
};

class Lane extends React.Component {

    renderItems() {
        return this.props.lane.containers.map((item, i) =>
            <BarContainer key={item.id} laneId={this.props.lane.id} container={item} addBar={this.props.addBar}/>
        );
    }

    render() {
        return (
            <>
                <Card style={{...style}}>
                    <Card.Header style={{backgroundColor: '#ee5900', color: 'white'}}><FontAwesomeIcon
                        icon={faCaretDown}/> {this.props.lane.name}</Card.Header>
                    <Card.Body>
                        {this.renderItems()}
                    </Card.Body>
                </Card>
            </>
        );
    }

};
export default Lane;
