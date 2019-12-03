import React from 'react';
import ReactDOM from 'react-dom';
import {HashRouter, Route, Switch} from 'react-router-dom';
import {Select} from 'choerodon-ui';
import 'choerodon-ui/dist/choerodon-ui.css';
import './app.css';
const {Option} = Select;


function Hello({match}){
    console.log(match);
    return (
        <div>

        </div>
    );
}

function Hello2(){
    return <h1>Hello World2222</h1>;
}

const Router = ()=>{
    return (
        <HashRouter>
            <Switch>
                <Route component={Hello} exact path="/"/>
                <Route component={Hello2} exact path="/detail"/>
            </Switch>
        </HashRouter>
    );
};




class App extends React.Component {
    constructor(props){
        super(props);
    }
    componentDidMount(){
        if(this.h){
            console.log(this.h.offsetWidth);
        }
    }
    render(){
        return (
            <h1 ref={(h=>{console.log(h); this.h=h;})}>Hello</h1>
        );
    }
}



ReactDOM.render((
    <App/>
), document.getElementById('app'));