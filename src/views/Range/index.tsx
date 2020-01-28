import React, {useEffect} from "react";
import SyntaxHighlighter from 'react-syntax-highlighter';
import {docco} from 'react-syntax-highlighter/dist/esm/styles/hljs';
import Beta from "../../layout/Beta";
import Rectangle from "../../layout/Rectangle";

const str1 = `
<p id="p">Example: <i>italic</i> and <b>bold</b></p>
From <input id="start" type="number" value=1> – To <input id="end" type="number" value=4>
<button id="button">Click to select</button>
<script>
  button.onclick = () => {
    let range = new Range();

    range.setStart(p, start.value);
    range.setEnd(p, end.value);

    // 应用选区，后文有解释
    document.getSelection().removeAllRanges();
    document.getSelection().addRange(range);
  };
</script>`;

const str2 = `
<p id="p">Example: <i>italic</i> and <b>bold</b></p>

<p id="result"></p>
<script>
  let range = new Range();

  // 下面演示上述的各个方法：
  let methods = {
    deleteContents() {
      range.deleteContents()
    },
    extractContents() {
      let content = range.extractContents();
      result.innerHTML = "";
      result.append("extracted: ", content);
    },
    cloneContents() {
      let content = range.cloneContents();
      result.innerHTML = "";
      result.append("cloned: ", content);
    },
    insertNode() {
      let newNode = document.createElement('u');
      newNode.innerHTML = "NEW NODE";
      range.insertNode(newNode);
    },
    surroundContents() {
      let newNode = document.createElement('u');
      try {
        range.surroundContents(newNode);
      } catch(e) { alert(e) }
    },
    resetExample() {
      p.innerHTML = \`Example: <i>italic</i> and <b>bold</b>\`;
      result.innerHTML = "";

      range.setStart(p, 1);
      range.setEnd(p, 2);

      window.getSelection().removeAllRanges();
      window.getSelection().addRange(range);
    }
  };

  for(let method in methods) {
    document.write(\`<div><button onclick="methods.\${method}()">\${method}</button></div>\`);
  }

  methods.resetExample();
</script>
`;

let result:any;
const range = new Range();

const Selection: React.FC = () => {

    useEffect(() => {
        setTimeout(()=> {
            methods.resetExample();
        },100)
    });

    const methods = {
        deleteContents() {
            range.deleteContents()
        },
        extractContents() {
            let content = range.extractContents();
            result.innerHTML = "";
            result.append("extracted: ", content);
        },
        cloneContents() {
            let content = range.cloneContents();
            result.innerHTML = "";
            result.append("cloned: ", content);
        },
        insertNode() {
            let newNode = document.createElement('u');
            newNode.innerHTML = "NEW NODE";
            range.insertNode(newNode);
        },
        surroundContents() {
            let newNode = document.createElement('u');
            try {
                range.surroundContents(newNode);
            } catch(e) { alert(e) }
        },
        resetExample() {
            const selection:any = window.getSelection();
            const p:any = document.querySelector("#p2");
            result = document.querySelector('#result');
            p.innerHTML = `Example: <i>italic</i> and <b>bold</b>`;
            result.innerHTML = "";
            range.setStart(p, 1);
            range.setEnd(p, 2);

            selection.removeAllRanges();
            selection.addRange(range);
        }
    };

    const onCase1 = ()=> {
        let range = new Range();
        const selection:any = document.getSelection();
        const p1 = document.querySelector("#p1") as HTMLElement;
        const start:any = document.querySelector("#start") as HTMLElement;
        const end:any = document.querySelector("#end") as HTMLElement;
        range.setStart(p1, start.value);
        range.setEnd(p1, end.value);
        selection.removeAllRanges();
        selection.addRange(range);
    };

    const caseLeft1 = () => {
        return (
            <SyntaxHighlighter language="html" style={docco}>
                {
                    str1
                }
            </SyntaxHighlighter>
        )
    };
    const caseLeft2 = () => {
        return (
            <SyntaxHighlighter language="html" style={docco}>
                {
                    str2
                }
            </SyntaxHighlighter>
        )
    };
    const caseRight1 = () => {
        return (
            <>
                <p id="p1">Example: <i>italic</i> and <b>bold</b></p>
                From <input style={{ marginLeft:'10px' }} className="ui-input" id="start" type="number"/> – To
                <input style={{ marginLeft:'10px' }} className="ui-input" id="end" type="number"/>
                <button style={{ marginLeft:'10px' }} onClick={onCase1} className="ui-button ui-button-primary" id="button">点击选择范围</button>
            </>
        )
    };

    const caseRight2 = () => {
        return (
            <>
                <p id="p2">Example: <i>italic</i> and <b>bold</b></p>
                <div>
                    result:<span id="result" />
                </div>
                <div>
                    <button style={{ margin:'10px 10px 0 0' }} onClick={methods.deleteContents} className="ui-button ui-button-primary" id="button">deleteContents</button>
                    <button style={{ margin:'10px 10px 0 0' }} onClick={methods.extractContents} className="ui-button ui-button-primary" id="button">extractContents</button>
                    <button style={{ margin:'10px 10px 0 0' }} onClick={methods.cloneContents} className="ui-button ui-button-primary" id="button">cloneContents</button>
                    <button style={{ margin:'10px 10px 0 0' }} onClick={methods.insertNode} className="ui-button ui-button-primary" id="button">insertNode</button>
                    <button style={{ margin:'10px 10px 0 0' }} onClick={methods.surroundContents} className="ui-button ui-button-primary" id="button">surroundContents</button>
                    <button style={{ margin:'10px 10px 0 0' }} onClick={methods.resetExample} className="ui-button ui-button-primary" id="button">reset</button>
                </div>
            </>
        )
    };

    const render = () => {
        return (
            <>
                <div className="comp-code-alpha" style={{padding: "1rem",display:'block'}}>
                    <Rectangle left={caseLeft1()} right={caseRight1()}/>
                    <Rectangle left={caseLeft2()} right={caseRight2()}/>
                </div>
            </>
        )
    };

    return (
        <Beta title="Range 对象示例" content={render()}/>
    )
};

export default Selection;