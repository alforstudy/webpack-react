import React from 'react'
import ReactDOM from 'react-dom'
//默认情况下不能省略后缀名 需要在webpack.config.js的extensions中定义jsx的扩展名，webpack默认只自动处理js,jsx
import Hello3 from "@/components/Hello3"

// import "@/components/class关键字测试"

//首字母大写，才能识别成React组件
//无状态组件
function Hello(props){
    // 必须return 即使返回一个空组件 也要 ruturn null
    // return null
    // props 是只读属性，但是为什么是只读  还不太清楚
    return <h1>这是组件测试--{props.name}--{props.age}</h1>
}

function Hello2(props){
    console.log(props)
    return <h1>这是第二个组件测试</h1>
}

let user = {
    name:"anlei",
    age:"22"
}

// 如果插值表达式的第一层元元素为undefined 那么会报错
// ReactDOM.render(<Hello name={user.name} age={user.age}>test</Hello>, document.getElementById("app"))

// ReactDOM.render(<Hello2 {...user}>test</Hello2>, document.getElementById("app"))
// ReactDOM.render(<Hello3 {...user}>test</Hello3>, document.getElementById("app"))

//有状态组件
class Move extends React.Component {
    constructor(){
        super()
        this.state = {
            msg : "BigBang"
        }
    }
    render(){
        //props是只读属性
        //state是可读可写的属性
        this.state.msg = "!@#$%"
        return <div>-----{this.state.msg}----Hello Component----{this.props.name}------{this.props.age}</div>
    }
}


ReactDOM.render(<div>
    <Move {...user}></Move>
    <hr/>
    <Move></Move>
</div>, document.getElementById("app"))

