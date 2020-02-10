import React, {Component} from 'react'
import {MyContainer} from "./myContainer";

class MyComponent extends Component{
    render() {
        return <input name="name" {...this.props.name}/>
    }
}

export default MyContainer(MyComponent);