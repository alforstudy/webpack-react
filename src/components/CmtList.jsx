import React from 'react'
import Content from '@/components/Content'
import cssobj from '@/css/CmtList.css'
import bootstrap from 'bootstrap/dist/css/bootstrap.css'
console.log(cssobj)
export default class CmtList extends React.Component {
    constructor(){
        super()
        this.state = {
            arrayList:[
                {id:1,username:"张三",content:"。。。。。。。。。。"},
                {id:2,username:"李四",content:"!!!!!!!!!!!!!!!!"},
                {id:3,username:"王二",content:"................"}
            ]
        }
    }
    render(){
        return <div>
            <h1 className={[cssobj.title,"test"].join(' ')}>父组件</h1>
            <button className={bootstrap.btn + " "+ bootstrap['btn-primary']}>按钮</button>
            {this.state.arrayList.map(item => <Content key={item.id} {...item} />)}
        </div>
    }
}

