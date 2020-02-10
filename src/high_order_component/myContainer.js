import React, {Component} from 'react'

export const MyContainer = (WrappedComponent) =>
    class extends Component{
        constructor(props){
            super(props);
            this.state={
                name: '',
            };

            this.onNameChange = this.onNameChange.bind(this)
        }

        onNameChange(e){
            this.setState({
                name: e.target.value
            })
        }

        render() {
            const newProps = {
                name: {
                    value: this.state.name,
                    onChange: this.onNameChange
                }
            };
            return (
                <div>
                    <WrappedComponent {...this.props} {...newProps}/>
                </div>
                )
        }
    };