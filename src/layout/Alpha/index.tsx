import React, {ReactElement} from 'react';

interface Iprops {
    title: string;
    right: ReactElement;
    left: ReactElement;
}

const Alpha: React.FC<Iprops> = props => {
    const {title, right, left} = props;
    return (
        <div className="layout-grid">
            <div className="layout-hader">{title}</div>
            <div className="layout-left">{right}</div>
            <div className="layout-right">{left}</div>
        </div>
    );
};

export default Alpha;