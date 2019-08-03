// import React, { useState, useEffect, } from 'react';
// import ReactDOM from 'react-dom';


// ReactDOM.render(<div>
//     <Counter/>
// </div>,document.getElementById('app'));

function log(target){
    debugger;
    const desc = Object.getOwnPropertyDescriptors(target.prototype);
    for(const key of Object.keys(desc)){
        if(key === 'constructor'){
            continue;
        }
        const func = desc[key].value;

        if('function' === typeof func){
            Object.defineProperty(target.prototype,key,{
                value(...args) {
                    console.log('before'+key);
                    const ret = func.apply(this,args);
                    console.log('after'+key);
                    return ret;
                }
            });
        }
    }
}


function readonly(target,key,descriptor){
    descriptor.writable = false;
}

function validate(target,key,descriptor){
    debugger;
    const func = descriptor.value;
    descriptor.value = function(...args){
        for(const num of args){
            if('number' !== typeof num){
                throw new Error(`${num} is not a number`);
            }
            return func.apply(this,...args);
        }
    };
}

@log
class Person{

    @readonly PI = 3.1415926;

    @validate
    say(num){
        console.log('Hello');
    }
}


const p1 = new Person();
p1.say('12');
p1.PI = 12;