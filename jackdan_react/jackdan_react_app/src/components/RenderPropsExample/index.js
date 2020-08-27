/**
 * 渲染属性指的是使用一个值为函数的prop来传递需要动态渲染的nodes或组件。
 * 如下面的代码可以看到我们的RenderPropsExample组件包含了所有跟状态相关的代码，而Cat组件则可以是一个单纯的展示型组件，这样一来RenderPropsExample就可以单独复用了。
 * 
 * 虽然这个模式叫Render Props，但不是说非用一个叫render的props不可，习惯上大家更常写成下面这种：
 */

import React from 'react';
import Cat from './Cat/index';



class RenderPropsExample extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            target: 'Pig'
        };
    }

    render() {
        return (
            <div>
                {this.props.render(this.state)}
            </div>
        )
    }
}


{/* <RenderPropsExample render={data => {
    <Cat target={data.target} />
}} /> */}

<RenderPropsExample render={data => {
    <Cat target={data.target}></Cat>
}}></RenderPropsExample>


export default RenderPropsExample;