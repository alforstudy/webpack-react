import React from 'react';
import ReactDOM from 'react-dom';
import {HashRouter, Route, Switch} from 'react-router-dom';

function App(){

    return (
        <div>
            <h1>App</h1>
            <ul>
                <li><Link to="/about">About</Link></li>
                <li><Link to="/inbox">Inbox</Link></li>
            </ul>
            {this.props.children}
        </div>
    );
}

function About (){
    return (
        <h3>About</h3>
    );
}


function Inbox(props){
    return (
        <div>
            <h2>Inbox</h2>
            {props.children || 'Welcome to your Inbox'}
        </div>
    );
}


function Message(props){
    return <h3>Message {props.params.id}</h3>;
}

function Hello({match}){
    console.log(match);
    return <h1>Hello World111</h1>;
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

ReactDOM.render((
    <Router/>
), document.getElementById('app'));