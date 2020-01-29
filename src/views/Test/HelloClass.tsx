import React, { Component } from "react"

interface Greeting {
    name: string,
    firstName: string,
    lastName: string
}

interface State {
    count: 1
}

class HelloClass extends Component<Greeting, State>{
    state: State = {
        count: 1
    }
    static defaultProps = {
        firstName: '',
        lastName: ''
    }

    render() {
        return (
            <div>HelloClass</div>
        )
    }
}

export default HelloClass;