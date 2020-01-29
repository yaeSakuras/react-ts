import React from "react";
import HelloClass from "./HelloClass"
import HelloHooks from "./HelloHooks"
const Test = () => {
    return (
        <>
            <HelloClass name="hello"/>
            <HelloHooks name="hook"/>
            <div>test</div>
        </>
    )
};

export default Test;