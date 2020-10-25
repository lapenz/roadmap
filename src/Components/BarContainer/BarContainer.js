import React from 'react';
import Bar from "../Bar/Bar";

import $ from 'jquery';
import 'jquery-ui-bundle';
import 'jquery-ui-bundle/jquery-ui.css';


const style = {
    color: 'grey',
    fontSize: '1rem',
    lineHeight: 'normal',
    float: 'left',
    minHeight: '50px',
    width: '100%'
};


class BarContainer extends React.Component {

    componentDidMount() {

        $("#bar-container" + this.props.container.id).droppable({
            accept: ".bar",
            classes: {
                "ui-droppable-hover": "ui-state-hover",

            },

            drop: (event, ui) => {
                if(ui.draggable.attr('id') === 'addBar') {
                    this.props.addBar(this.props.laneId, this.props.container.id);
                } else {
                    alert('Bar changed event')
                }
            }
        });

    }

    renderItems() {
        return this.props.container.bars.map((bar, i) =>
            <Bar
                name={bar.name}
                id={bar.id}
                containerId={this.props.container.id}
                key={bar.id}
            />
        );
    }


    render() {
        return (
            <>
                <div id={'bar-container' + this.props.container.id} style={{...style}}>
                    {this.renderItems()}
                </div>

            </>
        )
    }
};
export default BarContainer;

