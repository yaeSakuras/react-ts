import React, {useEffect} from "react";
import SyntaxHighlighter from 'react-syntax-highlighter';
import {docco} from 'react-syntax-highlighter/dist/esm/styles/hljs';
import Beta from "../../layout/Beta";
import Rectangle from "../../layout/Rectangle";

const str1 = `
<p id="p">Select me: <i>italic</i> and <b>bold</b></p>

<script>
// 从 <p> 的第 0 个子节点中选择到最后一个子节点
document.getSelection().setBaseAndExtent(p, 0, p, p.childNodes.length);
</script>`;

const str2 = `
<p id="p">Select me: <i>italic</i> and <b>bold</b></p>

From <input id="from" disabled> – To <input id="to" disabled>
<script>
  document.onselectionchange = function() {
    let {anchorNode, anchorOffset, focusNode, focusOffset} = document.getSelection();

    from.value = \`\${anchorNode && anchorNode.data}:\${anchorOffset}\`;
    to.value = \`\${focusNode && focusNode.data}:\${focusOffset}\`;
  };
</script>
`;

const str3 = `
<p id="p">Select me: <i>italic</i> and <b>bold</b></p>

Cloned: <span id="cloned"></span>
<br>
As text: <span id="astext"></span>

<script>
  document.onselectionchange = function() {
    let selection = document.getSelection();

    cloned.innerHTML = astext.innerHTML = "";

    // 从范围复制 DOM 节点（这里我们支持多选）
    for (let i = 0; i < selection.rangeCount; i++) {
      cloned.append(selection.getRangeAt(i).cloneContents());
    }

    // 以文本形式获取
    astext.innerHTML += selection;
  };
</script>
`;

const str4 = `
<textarea id="area" style="width:80%;height:60px">
Selecting in this text updates values below.
</textarea>
<br>
From <input id="from" disabled> – To <input id="to" disabled>

<script>
  area.onselect = function() {
    from.value = area.selectionStart;
    to.value = area.selectionEnd;
  };
</script>
`;

const str5 = `
<textarea id="area" style="width:80%;height:60px">
Focus on me, the cursor will be at position 10.
</textarea>

<script>
  area.onfocus = () => {
    // 将 setTimeout 设为零延迟，以便在浏览器“焦点”操作完成后运行
    setTimeout(() => {
      // 我们可以设置任何选区
      // 如果 start=end，则将光标精确定位在该位置
      area.selectionStart = area.selectionEnd = 10;
    });
  };
</script>
`;

const str6 =`
<input id="input" style="width:200px" value="Select here and click the button">
<button id="button">Wrap selection in stars *...*</button>

<script>
button.onclick = () => {
  if (input.selectionStart === input.selectionEnd) {
    return; // 什么都没选
  }

  let selected = input.value.slice(input.selectionStart, input.selectionEnd);
  input.setRangeText(\`*\${selected}*\`);
};
</script>`;

const str7 =`
<input id="input" style="width:200px" value="Replace THIS in text">
<button id="button">Replace THIS</button>

<script>
button.onclick = () => {
  let pos = input.value.indexOf("THIS");
  if (pos >= 0) {
    input.setRangeText("*THIS*", pos, pos + 4, "select");
    input.focus(); // 选中它，使选区可见
  }
};
</script>`;

const str8 = `
<input id="input" style="width:200px" value="Text Text Text Text Text">
<button id="button">Insert "HELLO" at cursor</button>

<script>
  button.onclick = () => {
    input.setRangeText("HELLO", input.selectionStart, input.selectionEnd, "end");
    input.focus();
  };
</script>
`;

const Selection: React.FC = () => {

    useEffect(() => {
        setTimeout(() => {
            const selection: any = document.getSelection();
            const p: any = document.querySelector('#p');
            const from: any = document.querySelector('#from');
            const to: any = document.querySelector('#to');
            const from1: any = document.querySelector('#from1');
            const to1: any = document.querySelector('#to1');
            const cloned: any = document.querySelector('#cloned');
            const astext: any = document.querySelector('#astext');
            const area: any = document.querySelector('#area');
            const area1: any = document.querySelector('#area1');
            const button: any = document.querySelector('#button');
            const button1: any = document.querySelector('#button1');
            const button2: any = document.querySelector('#button2');
            const input: any = document.querySelector('#input');
            const input1: any = document.querySelector('#input1');
            const input2: any = document.querySelector('#input2');
            selection.setBaseAndExtent(p, 0, p, p.childNodes.length);

            document.onselectionchange = function() {
                let selection:any = document.getSelection();
                // @ts-ignore
                let {anchorNode, anchorOffset, focusNode, focusOffset} = selection;
                from.value = `${anchorNode && anchorNode.data}:${anchorOffset}`;
                to.value = `${focusNode && focusNode.data}:${focusOffset}`;

                cloned.innerHTML = astext.innerHTML = "";

                // 从范围复制 DOM 节点（这里我们支持多选）
                for (let i = 0; i < selection.rangeCount; i++) {
                    cloned.append(selection.getRangeAt(i).cloneContents());
                }

                // 以文本形式获取
                astext.innerHTML += selection;
            };
            area.onselect = function() {
                from1.value = area.selectionStart;
                to1.value = area.selectionEnd;
            };

            area1.onfocus = () => {
                // 将 setTimeout 设为零延迟，以便在浏览器“焦点”操作完成后运行
                setTimeout(() => {
                    // 我们可以设置任何选区
                    // 如果 start=end，则将光标精确定位在该位置
                    area1.selectionStart = area1.selectionEnd = 10;
                });
            };

            button.onclick = () => {
                if (input.selectionStart == input.selectionEnd) {
                    return; // 什么都没选
                }
                let selected = input.value.slice(input.selectionStart, input.selectionEnd);
                input.setRangeText(`*${selected}*`);
            };
            button1.onclick = () => {
                let pos = input1.value.indexOf("THIS");
                if (pos >= 0) {
                    input1.setRangeText("*THIS*", pos, pos + 4, "select");
                    input1.focus(); // 选中它，使选区可见
                }
            };

            button2.onclick = () => {
                input2.setRangeText("VALUE", input2.selectionStart, input2.selectionEnd, "end");
                input2.focus();
            };
        }, 200);
    });

    const caseLeft1 = () => {
        return (
            <SyntaxHighlighter language="html" style={docco}>
                {
                    str1
                }
            </SyntaxHighlighter>
        )
    };
    const caseRight1 = () => {
        return (
            <>
                <h3>选区选择示例</h3>
                <p id="p">Select me: <i>italic</i> and <b>bold</b></p>
            </>
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
    const caseRight2 = () => {
        return (
            <>
                <h3>选区跟踪示例</h3>
                <p id="p1">Select me: <i>italic</i> and <b>bold</b></p>
                <div>
                    From <input style={{marginLeft: '10px'}} className="ui-input" id="from" disabled/> – To
                    <input style={{marginLeft: '10px'}} className="ui-input" id="to" disabled/>
                </div>
            </>
        )
    };

    const caseLeft3 = () => {
        return (
            <SyntaxHighlighter language="html" style={docco}>
                {
                    str3
                }
            </SyntaxHighlighter>
        )
    };

    const caseRight3 = () => {
        return (
            <>
                <h3>选区获取示例</h3>
                <p id="p2">Select me: <i>italic</i> and <b>bold</b></p>
                <div>Cloned: <span id="cloned" /></div>
                <div>As text: <span id="astext" /></div>
            </>
        )
    };

    const caseLeft4 = () => {
        return (
            <SyntaxHighlighter language="html" style={docco}>
                {
                    str4
                }
            </SyntaxHighlighter>
        )
    };

    const caseRight4 = () => {
        return (
            <>
                <h3>跟踪选区示例</h3>
                <textarea style={{marginTop:"1rem"}} className="ui-textarea" id="area">Selecting in this text updates values below.</textarea>
                <div style={{marginTop:"1rem"}}>
                    From <input style={{marginLeft: '10px'}} className="ui-input" id="from1" disabled/> – To
                    <input style={{marginLeft: '10px'}} className="ui-input" id="to1" disabled/>
                </div>
            </>
        )
    };

    const caseLeft5 = () => {
        return (
            <SyntaxHighlighter language="html" style={docco}>
                {
                    str5
                }
            </SyntaxHighlighter>
        )
    };

    const caseRight5 = () => {
        return (
            <>
                <h3>移动光标示例</h3>
                <textarea style={{marginTop:"1rem",width:'80%'}} className="ui-textarea" id="area1">Focus on me, the cursor will be at position 10.</textarea>
            </>
        )
    };

    const caseLeft6 = () => {
        return (
            <SyntaxHighlighter language="html" style={docco}>
                {
                    str6
                }
            </SyntaxHighlighter>
        )
    };

    const caseRight6 = () => {
        return (
            <>
                <h3>修改选区示例</h3>
                <input style={{ marginTop:"1rem",width:"50%" }} className="ui-input" id="input" value="Select here and click the button" />
                <div style={{ marginTop:"1rem" }}>
                    <button className="ui-button ui-button-primary" id="button">Wrap selection in stars *...*</button>
                </div>
            </>
        )
    };

    const caseLeft7 = () => {
        return (
            <SyntaxHighlighter language="html" style={docco}>
                {
                    str7
                }
            </SyntaxHighlighter>
        )
    };

    const caseRight7 = () => {
        return (
            <>
                <h3>选区替换示例</h3>
                <input style={{ marginTop:"1rem",width:"50%" }} className="ui-input" id="input1" value="Replace THIS in text" />
                <div style={{ marginTop:"1rem" }}>
                    <button className="ui-button ui-button-primary" id="button1">Replace THIS</button>
                </div>
            </>
        )
    };

    const caseLeft8 = () => {
        return (
            <SyntaxHighlighter language="html" style={docco}>
                {
                    str8
                }
            </SyntaxHighlighter>
        )
    };

    const caseRight8 = () => {
        return (
            <>
                <h3>光标插入</h3>
                <input style={{ marginTop:"1rem",width:"50%" }} className="ui-input" id="input2" value="Text Text Text Text Text" />
                <div style={{ marginTop:"1rem" }}>
                    <button className="ui-button ui-button-primary" id="button2">Insert "VALUE" at cursor</button>
                </div>
            </>
        )
    };

    const render = () => {
        return (
            <>
                <div className="comp-code-alpha" style={{padding: "1rem", display: 'block'}}>
                    <Rectangle left={caseLeft1()} right={caseRight1()}/>
                    <Rectangle left={caseLeft2()} right={caseRight2()}/>
                    <Rectangle left={caseLeft3()} right={caseRight3()}/>
                    <Rectangle left={caseLeft4()} right={caseRight4()}/>
                    <Rectangle left={caseLeft5()} right={caseRight5()}/>
                    <Rectangle left={caseLeft6()} right={caseRight6()}/>
                    <Rectangle left={caseLeft7()} right={caseRight7()}/>
                    <Rectangle left={caseLeft8()} right={caseRight8()}/>
                </div>
            </>
        )
    };

    return (
        <Beta title="Selection 对象示例" content={render()}/>
    )
};

export default Selection;