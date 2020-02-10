import React, {Component} from 'react'
import {List} from './child_to_father'

export class App1 extends Component{
    constructor(props){
        super(props);

        this.handleItemChange = this.handleItemChange.bind(this)
    }

    handleItemChange(item){
        console.log(item)
    }

    render() {
        return(
            <List
                list={[{text: 1}, {text: 2}]}
                handleItemChange={this.handleItemChange}
            />
        )
    }
}