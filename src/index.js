import React, { useState, useEffect, } from 'react';
import ReactDOM from 'react-dom';
import BindEvent from '@/components/bindEvent.jsx';


function Counter() {
    //定义state
    const [count,setCount,] = useState(0);
    const [fruit, setFruit,] = useState('banana');
    const [todos, setTodos,] = useState([{ text: 'Learn Hooks', },]);
    //页面重新渲染时触发
    useEffect(()=>{
        document.title = count;
    });
    useEffect(() => {
        document.title = `You clicked ${count} times`;
    },[count]); // 仅在 count 更改时更新
    return <div>
        <p>fruit:{fruit}</p>
        <div>
            {
                todos.map((item, index) => {
                    return <p key={index}>{item.text}</p>;
                })
            }
        </div>
        <p>Count:{count}</p>
        <button onClick={()=>setCount(count+1)} >Count+1</button>
    </div>;
}


ReactDOM.render(<div>
    <Counter/>
</div>,document.getElementById('app'));

