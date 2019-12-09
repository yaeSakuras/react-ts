import React, {ChangeEvent, useState} from 'react';
import ReactJson from "react-json-view";
import Alpha from "../../layout/Alpha";

const json = {
    "no-undef": "off",
    "no-restricted-globals": "off",
    "no-unused-vars": "off"
};

const JsonView: React.FC = () => {

    const [text, setText] = useState(JSON.stringify(json));

    const onChangeText = (e: ChangeEvent<HTMLTextAreaElement>) => {
        setText(e.target.value);
    };

    const renderInput = () => {
        return (
            <textarea value={text} onChange={onChangeText} className="form-textarea"/>
        )
    };

    const renderContent = () => {
        let obj = {};
        try {
            obj = JSON.parse(text);
        } catch (e) {
            console.log(e);
        }
        return (
            <div className="z-scroll">
                <ReactJson displayDataTypes={false} src={obj}/>
            </div>
        )
    };

    return (
        <>
            <Alpha
                title="json 解析工具"
                right={renderInput()}
                left={renderContent()}/>
        </>
    );
};

export default JsonView;
