import React, {Component} from 'react'

class ListItem extends Component{
    static defaultProps = {
        text: '',
        checked: false
    };

    onChange(e){
        console.log(e.target.value)
    };

    render() {
        return(
            <li>
                <input
                    type="checkbox"
                    checked={this.props.checked}
                    onChange={this.props.onChange}
                />
                <span>{this.props.value}</span>
            </li>
        )
    }
}

export class List extends Component{
    static defaultProps = {
        list: [],
        // 这儿获取了父组件传递的函数
        handleItemChange: () => {}
    };

    constructor(props){
        super(props);

        this.state = {
            list: this.props.list.map(entry => ({
                text: entry.text,
                checked: entry.checked,
            }))
        }
    }

    onItemChange(entry){
        const {list} = this.state;

        this.setState({
            list: list.map(preEntry=>({
                text: preEntry.text,
                checked: preEntry.text === entry.text ?
                    !preEntry.checked : preEntry.checked
            }))
        });

        this.props.handleItemChange(entry);
    }

    render() {
        return(
            <div>
                <ul>
                    {this.state.list.map((entry, index)=>(
                        <ListItem
                            key={`list-${index}`}
                            value={entry.text}
                            checked={entry.checked}
                            onChange={this.onItemChange.bind(this, entry)}
                        />
                    ))}
                </ul>
            </div>
        )
    }
}