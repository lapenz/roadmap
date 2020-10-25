import React from 'react';
import Lane from "./Lane";

const Lanes = (props) => props.lanes.map((lane) => {
    return <Lane
        key={lane.id}
        lane={lane}
        addBar={props.addBar}
    />
});

export default Lanes;
