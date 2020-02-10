import React from 'react';
import 'antd/dist/antd.css';
// import {ThirdFunction} from './child_component/index'
import styles from "./test_css_module.css"

import {List} from "./communication_between_components/child_to_father"
import {App1 as CommunicationApp} from "./communication_between_components/App"
import MyComponent from "./high_order_component/myComponent"

function App() {
    return (
    <div>
        <MyComponent/>
    </div>
  );
}

export default App;
