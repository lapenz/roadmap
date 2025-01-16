import React from 'react';
import Button from 'react-bootstrap/Button'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faBars} from '@fortawesome/free-solid-svg-icons'

import $ from 'jquery';
import 'jquery-ui-bundle';
import 'jquery-ui-bundle/jquery-ui.css';
import Popover from "react-bootstrap/Popover";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";

class AddBarButton extends React.Component {
    componentDidMount() {
        $("#addBar").draggable({
            helper: "clone",
            cancel: false
        });

    }

    render() {
        return (
            <>
                <OverlayTrigger
                    show={this.props.showBarTip}
                    rootClose={true}
                    placement={'left-start'}
                    overlay={
                        <Popover >
                            <img alt={'Bar instructions'} src={"/img/barTip.png"} width={250}/>
                            <br/>
                            <br/>
                            <h4>Awesome! Now let's add few bars.</h4>
                            Bars are your specific initiative. Use them to represent your epics, projects,
                            or tasks, and provide an at a glance view of priority, relationship and progress.
                            <br/>
                            Drag and drop a bar to get started
                            <br/>
                            <br/>
                            <Button id={'closeBarTipBtn'} onClick={this.props.closeBarTip} variant={'primary'}>Got it</Button>
                        </Popover>
                    }
                >
                    <Button id={'addBar'} variant={'light'} className={'bar'} ><FontAwesomeIcon
                        icon={faBars}/> Add bar</Button>
                </OverlayTrigger>

            </>
        );
    }

}
export default AddBarButton;
