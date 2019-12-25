import React, {ReactElement} from 'react';

interface Iprops {
    title: string;
    content: ReactElement;
}

const Beta: React.FC<Iprops> = props => {
    const {title, content} = props;
    return (
        <div className="layout-beta">
            <div className="layout-hader">{title}</div>
            <div className="layout-content">{content}</div>
        </div>
    );
};

export default Beta;