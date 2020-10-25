import React from 'react';

import $ from 'jquery';
import 'jquery-ui-bundle';
import 'jquery-ui-bundle/jquery-ui.css';

const style = {
    border: '1px solid lightgrey',
    backgroundColor: '#1973b8',
    color: 'white',
    padding: '0.3rem 1.0rem',
    marginTop: '0.5rem',
    marginBottom: '0.5rem',
    float: 'left',
    width: '10rem',
    height: '2rem'
};

class Bar extends React.Component {

    componentDidMount() {
        $('.draggable-bar').draggable({ revert: "invalid", cursor: "move" })
        $('.draggable-bar').resizable({
            handles: 'e, w',
            stop: ( event, ui ) => {
                alert('Size changed event')
            }
        })

    }


    render() {
        return (
            <>
                <div id={this.props.id} className="draggable-bar bar draggable" style={{...style}}>
                    {this.props.name}
                </div>
            </>
        );
    }

};
export default Bar;
