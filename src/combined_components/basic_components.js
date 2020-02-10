import React, {Component} from "react";
import {Icon, Input} from "antd";

class SelectInput extends Component{
    static displayName = 'SelectInput';

    render() {
        const {selectedItem, isActive, onClickHeader, placeholder} = this.props;
        const {text} = selectedItem;

        return(
            <div>
                <div>
                    <Input
                        type="text"
                        disabled
                        value={text}
                        placeholder={placeholder}
                    />
                    <Icon type="down" />
                </div>
            </div>
        )
    }
}