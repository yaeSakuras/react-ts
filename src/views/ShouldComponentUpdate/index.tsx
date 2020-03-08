import React, {PureComponent, useState} from "react"

interface Iprops {
    number: number
}

interface Istate {
    name: string
}

class Child extends PureComponent<Iprops> {
    state = {
        name: "hello"
    }

    onClick = () => {
        this.setState({
            name: "hello"
        })
    }

    render() {
        console.log("Child render")
        return (
            <div>
                <button onClick={this.onClick}>click</button>
                <p>{this.state.name}</p>
                <p>Child: count is {this.props.number}</p>
            </div>
        )
    }
}

const ShouldComponentUpdate = () => {
    const [count, setCount] = useState(0);
    const [tile, setTitle] = useState("计数器");
    return (
        <div>
            <p>{tile}</p>
            <button onClick={() => setCount(count + 1)}>Counter</button>
            <button onClick={() => setTitle("改变计数器标题")}>Change Title</button>
            <Child number={count}/>
        </div>
    )
}

export default ShouldComponentUpdate;