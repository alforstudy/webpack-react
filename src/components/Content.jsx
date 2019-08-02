import React from 'react'
export default function Content(props){
    //在JSX中写style 要用对象的形式
    //可以style对象封装成js对象  
    return <div style={{border:"1px dashed #ccc", margin:"10px", padding:"10px",boxShadow:"0 0 10px #ccc"}}>
            <h1 >评论人：{props.username}</h1>
            <p style={{fontSize:"14px"}}>{props.content}</p>
        </div>
}
