import React from 'react'
import ReactDOM from 'react-dom'


const h2 = React.createElement('h2', null, "这是h2的子元素！！！")

const h3 = React.createElement('h3', {
    id: "myh3",
    title: "这是测试属性"
}, "这是h3的子元素！！！")

const mydiv = React.createElement('div', null, h2, h3)

const mydivJsx = <div>这是JSX语法测试
    速度
</div>


let a = 999
let mystr = "hello world"
let div1 = <div>这是测试</div>
let boolean = false
let strArr = ["AAA","BBB","CCC"]

let tempArr = []
strArr.forEach(item => {
    tempArr.push(<h4 key={item}>{item}</h4>)
})





const arr = [
    a,
    <hr/>,
    mystr,
    <hr/>,
    div1,
    <hr/>,
    boolean,
    <hr/>,
    boolean.toString(),
    <hr/>,
    boolean? "真":"假",
    <hr/>,
    tempArr,
    <hr/>,
    strArr.map(item => <h5 key={item}>{item}</h5>),
    <hr/>,
    // 这是注释
    // {/* asdas*/}
    <hr/>,
    <div className="testJsxClass">jsx中class要替换成className</div>,
    <hr/>,
    <label htmlFor="abc">jsx中label的for属性 要替换成htmlFor</label>
]


ReactDOM.render(arr, document.getElementById("app"))