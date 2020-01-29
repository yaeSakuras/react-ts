import React, {useEffect, useState} from "react"

interface Greeting {
    name: string;
    firstName: string;
    lastName: string;
}

const HelloHooks = (props: Greeting) => {
    const [count, setCount] = useState(0);
    const [text, setText] = useState<string | null>(null);
    useEffect(() => {
        if (count > 5) {
            setText("!!!")
        }
    },[count]);
    return (
        <>
            <div>{count}</div>
            <div>{text}</div>
            <button onClick={() => setCount(count + 1)}>btn</button>
        </>
    )
}

HelloHooks.defaultProps = {
    firstName: 'sd',
    lastName: 'sdsd'
}

export default HelloHooks;