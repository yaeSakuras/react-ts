import React, {Component, useState} from "react"

interface Iprops {
    number: number
}

interface Istate {
    count: number,
    prevCount: number
}

class Child extends Component<Iprops> {
    state = {
        count: 0,
        prevCount: -1
    }

    static getDerivedStateFromProps(props: Iprops, state: Istate) {
        if (props.number !== state.prevCount) {
            return {
                count: props.number,
                prevCount: props.number
            }
        }
        return null
    }

    setCount = () => {
        this.setState({
            count: this.state.count + 1
        })
    }

    render() {
        return (
            <div>
                <div>
                    <button onClick={this.setCount}>Child Counter</button>
                </div>
                Child: count is {this.state.count}
            </div>
        )
    }
}

const GetDerivedStateFromProps = () => {
    const [count, setCount] = useState(0);

    return (
        <div>
            <button onClick={() => setCount(count + 1)}>Counter</button>
            <Child number={count}/>
        </div>
    )
}

export default GetDerivedStateFromProps;