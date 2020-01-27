import React, {ReactElement} from 'react';

interface Iprops {
    left: ReactElement,
    right: ReactElement
}

const Rectangle:React.FC<Iprops> = props => {
    const {left,right} = props;
    return (
        <div className="layout-rectangle">
            <div className="left">{left}</div>
            <div className="right">{right}</div>
        </div>
    )
}

export default Rectangle;
