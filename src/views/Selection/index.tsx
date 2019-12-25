import React from "react";
import SyntaxHighlighter from 'react-syntax-highlighter';
import {docco} from 'react-syntax-highlighter/dist/esm/styles/hljs';
import Beta from "../../layout/Beta";

const code = '(num) => num + 1';

const Selection:React.FC = ()=> {

    const render = ()=> {
        return (
            <>
                <div className="comp-code-alpha">
                    <div className="code">
                        <SyntaxHighlighter language="javascript" style={docco}>
                            {code}
                        </SyntaxHighlighter>
                    </div>
                    <div className="effect">
                        <div>qweqwe</div>
                    </div>
                </div>
            </>
        )
    };

    return (
        <Beta title="Selection 对象示例" content={render()}/>
    )
};

export default Selection;