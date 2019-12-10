import React, {ChangeEvent, useState} from 'react';
import SyntaxHighlighter from 'react-syntax-highlighter';
import {docco} from 'react-syntax-highlighter/dist/esm/styles/hljs';
import Alpha from "../../layout/Alpha";

function queryStrToObj(str: string) {
    let obj: any = {};
    for (let [key, value] of (new URLSearchParams(str).entries())) {
        obj[key] = value;
    }
    return obj;
}

const UrlStrToObj: React.FC = () => {

    const [text, setText] = useState('https://www.google.com/search?q=react&oq=react&aqs=chrome..69i57j35i39j69i60l5j69i65.1835j1j7&sourceid=chrome&ie=UTF-8');

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
            str = JSON.stringify(queryStrToObj(text), null, 2);
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
                title="url查询字符串解析成对象"
                right={renderInput()}
                left={renderContent()}/>
        </>
    );
};

export default UrlStrToObj;
