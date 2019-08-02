import React from 'react'

export default class BindEvent extends React.Component{
    constructor(){
        super()
        this.state = {
            msg:"你好",
            age:"32",
            gender:"男"
        }
    }
    render(){
        return <div>{this.state.msg}
            <button onClick={this.myClickHandler}>按钮</button>
            <button onClick={() => {this.myClickHandler("show msg")}}>按钮2</button>
            <hr/>
            {/* 渲染一个只读的元素 如果不提供 onChange 那么改输入框只是只读的 不想要警告 可以加 readOnly*/}
            <input ref="txt" type="text" value={this.state.msg} onChange={(e)=>this.changeValue(e)}/>
        </div>
    }
    changeValue= (e)=>{
        this.setState({
            msg:e.target.value
        })
    }
    myClickHandler=(msg)=>{
        //只会更新对应的属性
        //setState是异步方法
        this.setState({
            msg:msg
        },()=>{console.log(1+" "+ this.state.msg)})
        //证明是异步
        console.log(2+" "+this.state.msg)
    }
}