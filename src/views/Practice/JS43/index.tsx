import React from "react"
import SyntaxHighlighter from 'react-syntax-highlighter'
import {docco} from 'react-syntax-highlighter/dist/esm/styles/hljs'

const data = [
    {
        "id": 1,
        "name": "张三",
        "value": "技术部"
    },
    {
        "id": 2,
        "name": "李四",
        "value": "产品部"
    },
    {
        "id": 3,
        "name": "王二",
        "value": "测试部"
    },
    {
        "id": 4,
        "name": "王五",
        "value": "技术部"
    }
];

const arr1 = [...new Set(data.map(i => i.value))];
const arr2 = Array.from(new Set(data.map(i => i.value)));

console.log(arr1)
console.log(arr2)

const Js43 = () => {
    return (
        <div>
            <a rel="noopener noreferrer" href="https://github.com/zhangxinxu/quiz/issues/61" target="_blank">JS基础测试43期</a>
            <SyntaxHighlighter language="javascript" style={docco}>
                {
                    `const data = [
    {
        "id": 1,
        "name": "张三",
        "value": "技术部"
    },
    {
        "id": 2,
        "name": "李四",
        "value": "产品部"
    },
    {
        "id": 3,
        "name": "王二",
        "value": "测试部"
    },
    {
        "id": 4,
        "name": "王五",
        "value": "技术部"
    }
];

const arr1 = [...new Set(data.map(i => i.value))];
const arr2 = Array.from(new Set(data.map(i => i.value)));`
                }
            </SyntaxHighlighter>
        </div>
    )
}

export default Js43;