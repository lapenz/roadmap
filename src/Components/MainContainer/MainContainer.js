import React from 'react';
import './MainContainer.css';
import Lanes from "../Lanes/Lanes";

import $ from 'jquery';
import 'jquery-ui-bundle';
import 'jquery-ui-bundle/jquery-ui.css';

const style = {
    color: 'grey',
    padding: '1rem',
    fontSize: '1rem',
    lineHeight: 'normal',
    float: 'left',
    minHeight: '100px',
    backgroundColor: '#f0f3f5',
    width: '100%'
};

class MainContainer extends React.Component {

    componentDidMount() {

        $("#newLane").droppable({
            accept: "#addLane",
            classes: {
                "ui-droppable-hover": "newLane-hover",
                "ui-droppable-active": "newLane-active"
            },
            drop: (event, ui) => {
                this.props.addLane();
            }
        });


    }
    render() {
        return (
            <>
                <div style={{...style}}>
                    <Lanes lanes={this.props.lanes} addBar={this.props.addBar}>
                    </Lanes>
                    <div id={'newLane'} style={{...style, textAlign: 'center'}} ></div>
                </div>
            </>
        );
    }


};
export default MainContainer;
