import React, { useState } from 'react';
import reducerr from './reducerr';
import store from './store'



const Datapage = () => {
    const [infoPage,infoPageChanged]=useState({
        name:'',
        age:'',
        email:'',
        state:'',
        birth_country:'',
        religion:'',
        password:'',
        hometown:''
    })
    const ihuoma=(i)=>{
        infoPageChanged({...infoPage,[i.taget.name]:i.target.value})
    }

    const checkAction=()=>{
        store.dispatch({
            type: 'isLoading'
        })
        setTimeout(()=>{
            store.dispatch({
                type: 'stopLoading'
        })
        },3000)
        
    }
    return (
        <div>
            <label for='namme'>Name:</label>
            <input id='namme' name='name' placeholder='namee' onchange={ihuoma} type='text'></input>
            <label for='agge'>Age:</label>
            <input id='agge' name='age' placeholder='agee'onchange={ihuoma} type='text'></input>
            <label for='religionn'>Religion:</label>
            <input id='religionn' name='religionn' placeholder='religion'onchange={ihuoma}type='text'></input>
            <label for='emaiil'>Email:</label>
            <input id='emaiil' name="email" placeholder='email'onchange={ihuoma}type='text'></input>
            <label for='passworrd'>password:</label>
            <input id='passworrd' name='password' placeholder='password'onchange={ihuoma}type='password'></input>
            <label for='hometowwn'>Home Town:</label>
            <input id='hometowwn' name='hometown' placeholder='homwtown'onchange={ihuoma}type='text'></input>
            <label for='statte'>State:</label>
            <input id='statte' name='state' placeholder='state'onchange={ihuoma}type='text'></input>
            <label for='birth'>Birth Country:</label>
            <input id='birth' name= 'birth_country' placeholder='bcountry'onchange={ihuoma}type='text'></input>
            <button onClick={()=>checkAction()}>Next</button>

        </div>
    );
}

export default Datapage;
