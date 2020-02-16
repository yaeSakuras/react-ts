import React from "react"
import SyntaxHighlighter from 'react-syntax-highlighter'
import {docco} from 'react-syntax-highlighter/dist/esm/styles/hljs'
import "./index.css";
import Cat1 from "../../../assets/images/cat1.jpeg";
import Cat2 from "../../../assets/images/cat2.jpeg";
import Cat3 from "../../../assets/images/cat3.jpeg";
import Cat4 from "../../../assets/images/cat4.jpeg";
import Cat6 from "../../../assets/images/cat6.jpg";

const Css17 = () => {
    const img = <>
            <img width="242" src={Cat6} alt="image"/>
            <img width="121" src={Cat1} alt="image"/>
            <img width="121" src={Cat2} alt="image"/>
            <img width="121" src={Cat3} alt="image"/>
            <img width="121" src={Cat4} alt="image"/>
        </>;

    return (
        <div>
            <a rel="noopener noreferrer" href="https://github.com/zhangxinxu/quiz/issues/60"
               target="_blank">CSS基础测试17地址</a>
            <h2>writing-mode</h2>
            <div className="box1">{img}</div>
            <SyntaxHighlighter language="css" style={docco}>
                {
                    `
.box1{
    height: 242px;
    writing-mode: vertical-lr;
}
                    `
                }
            </SyntaxHighlighter>
            <h2>flex</h2>
            <div className="box2">{img}</div>
            <SyntaxHighlighter language="css" style={docco}>
                {
                    `
.box2{
    height: 242px;
    display: flex;
    flex-wrap: wrap;
    flex-direction: column;
    align-content: baseline;
}
                    `
                }
            </SyntaxHighlighter>
        </div>
    )
}

export default Css17;