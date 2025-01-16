import React from 'react';
import Button from 'react-bootstrap/Button'
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Popover from "react-bootstrap/Popover";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";

import $ from 'jquery';
import 'jquery-ui-bundle';
import 'jquery-ui-bundle/jquery-ui.css';

class AddLaneButton extends React.Component {

    componentDidMount() {
        $("#addLane").draggable({
            helper: "clone",
            cancel: false
        });

    }

    render() {
        return (
            <>
                <OverlayTrigger
                    show={this.props.showLaneTip}
                    placement={'left-start'}
                    overlay={
                        <Popover id={'lanePopover'}>
                            <img alt={'Lane instructions'} src={"/img/toolTip.png"} width={250}/>
                            <br/>
                            <br/>
                            <h4>We'll start with a Lane</h4>
                            <strong>Lanes</strong> represent high level categories, such as teams,
                            product lines, or strategic initiatives. Add a color and description to your lane
                            to communicate valuable details to stakeholders.
                            Drag and drop a lane to get started
                            <br/>
                            <br/>
                            <Button id={'closeLaneTipBtn'} onClick={this.props.closeLaneTip} variant={'primary'}>Got it</Button>
                        </Popover>
                    }
                >

                    <Button id={'addLane'} variant={'light'}><FontAwesomeIcon icon={faBars}/> Add
                        lane</Button>
                </OverlayTrigger>

            </>
        );
    }


}
export default AddLaneButton;
