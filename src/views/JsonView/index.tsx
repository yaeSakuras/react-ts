import React from 'react';
import ReactJson from "react-json-view";
import Alpha from "../../layout/Alpha";

const json = {
    a: 1
};

const JsonView: React.FC = () => {

    const renderInput = () => {
        return (
            <input type="text"/>
        )
    };

    return (
        <>
            <Alpha
                title="json转换工具"
                right={renderInput()}
                left={<ReactJson displayDataTypes={false} src={json}/>}/>
        </>
    );
};

export default JsonView;
