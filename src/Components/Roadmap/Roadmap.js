import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import MainContainer from "../MainContainer/MainContainer";
import Nav from "react-bootstrap/Nav";
import AddLaneButton from "../AddLaneButton/AddLaneButton";
import AddBarButton from "../AddBarButton/AddBarButton";
import React from "react";

class Roadmap extends React.Component {

    state = {
        lanes: [],
        laneId: 0,
        containerId: 0,
        barId: 0,
        showLaneTip: true,
        showBarTip: false

    }

    closeLaneTip = () => {
        let state = {...this.state};
        state.showLaneTip = false;
        this.setState(state);
    }

    closeBarTip = () => {
        let state = {...this.state};
        state.showBarTip = false;
        this.setState(state);
    }

    addLane = () => {
        let lanes = [...this.state.lanes]
        let laneId = this.state.laneId + 1;
        let containerId = this.state.containerId + 1;
        lanes.push({
            id: laneId, name: 'Lane ' + laneId, containers: [
                {id: containerId, bars: []},
                {id: ++containerId, bars: []}
            ]
        });
        this.setState({
            lanes: lanes, laneId: laneId,
            containerId: containerId,
            barId: this.state.barId,
            showLaneTip: false,
            showBarTip: lanes.length === 1 ? true : false
        });
    }

    addBar = (laneId, containerId) => {
        const lanes = [...this.state.lanes];
        let lane = lanes.find(p => p.id === laneId);
        let container = lane.containers.find(p => p.id === containerId);
        let barId = this.state.barId + 1;
        container.bars.push({id: barId, name: 'Bar ' + barId})
        this.setState({
            lanes: lanes, laneId: this.state.laneId,
            containerId: this.state.containerId,
            barId: barId,
            showLaneTip: false,
            showBarTip: false
        });
    }

    render() {
        return (
            <>
                <Row>

                    <Col md="10">
                        <MainContainer
                            allowedDropEffect={"lane"}
                            lanes={this.state.lanes}
                            addLane={this.addLane}
                            addBar={this.addBar}
                        />

                    </Col>

                    <Col md="2" className={'borderLeft'}>
                        <Nav>
                            <Nav.Link>
                                <AddLaneButton showLaneTip={this.state.showLaneTip} closeLaneTip={this.closeLaneTip}/>
                            </Nav.Link>
                            <Nav.Link>
                                <AddBarButton showBarTip={this.state.showBarTip} closeBarTip={this.closeBarTip}/>
                            </Nav.Link>
                        </Nav>
                    </Col>
                </Row>

            </>)
    }

}

export default Roadmap;
