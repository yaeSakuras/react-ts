import React, {ChangeEvent, useState} from 'react';
import SyntaxHighlighter from 'react-syntax-highlighter';
import {docco} from 'react-syntax-highlighter/dist/esm/styles/hljs';
import Alpha from "../../layout/Alpha";

function objectToStr(obj:object){
    return Object.entries(obj).map(([k, v]) => k + '=' + encodeURIComponent(v)).join('&');
}

const ObjectToStr: React.FC = () => {

    const str = JSON.stringify({
        "https://www.google.com/search?q": "react",
        "oq": "react",
        "aqs": "chrome..69i57j35i39j69i60l5j69i65.1835j1j7",
        "sourceid": "chrome",
        "ie": "UTF-8"
    },null,2);

    const [text, setText] = useState(str);

    const onChangeText = (e: ChangeEvent<HTMLTextAreaElement>) => {
        setText(e.target.value);
    };

    const renderInput = () => {
        return (
            <textarea value={text} onChange={onChangeText} className="form-textarea"/>
        )
    };

    const renderContent = () => {
        let str = '';
        try {
            str = objectToStr(JSON.parse(text));
        } catch (e) {
            console.log(e);
        }
        return (
            <div className="z-scroll">
                <SyntaxHighlighter language="javascript" style={docco}>
                    {str}
                </SyntaxHighlighter>
            </div>
        )
    };

    return (
        <>
            <Alpha
                title="obejct 对象转换成查询字符串"
                right={renderInput()}
                left={renderContent()}/>
        </>
    );
};

export default ObjectToStr;
